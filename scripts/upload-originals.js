const { createClient } = require('next-sanity')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: '.env.local' })

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_WRITE_TOKEN

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_WRITE_TOKEN in .env.local")
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-10',
  useCdn: false,
  token,
})

async function uploadImages() {
  const galleryDir = path.join(process.cwd(), 'public', 'originals', 'gallery')
  
  if (!fs.existsSync(galleryDir)) {
    console.error("Originals directory not found at", galleryDir)
    return
  }

  const files = fs.readdirSync(galleryDir)
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))

  if (imageFiles.length === 0) {
    console.log("No images found to upload.")
    return
  }

  console.log(`Found ${imageFiles.length} original images. Uploading to Sanity...`)

  for (let i = 0; i < imageFiles.length; i++) {
    const file = imageFiles[i]
    const filePath = path.join(galleryDir, file)
    
    try {
      // Upload the image asset
      console.log(`Uploading ${file}...`)
      const buffer = fs.readFileSync(filePath)
      const asset = await client.assets.upload('image', buffer, { filename: file })
      
      // Create the bridalLook document
      const doc = {
        _type: 'bridalLook',
        title: `Original Look ${i + 1}`,
        category: 'Bridal', // Defaulting to Bridal, user can edit in Studio
        featured: i < 4, // Make first 4 featured
        date: new Date(Date.now() - (i * 86400000)).toISOString(),
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id
          }
        }
      }

      await client.create(doc)
      console.log(`✓ Successfully uploaded and created document for ${file}`)
    } catch (err) {
      console.error(`Failed to process ${file}:`, err.message)
    }
  }

  console.log("Done! All original images are now in Sanity.")
}

uploadImages()
