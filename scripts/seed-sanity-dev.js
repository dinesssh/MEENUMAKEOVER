const { createClient } = require('next-sanity')
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

const sampleLooks = [
  {
    _type: 'bridalLook',
    title: 'Traditional Muhurtham',
    category: 'Bridal',
    featured: true,
    date: new Date().toISOString(),
  },
  {
    _type: 'bridalLook',
    title: 'Modern Reception',
    category: 'Reception',
    featured: true,
    date: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    _type: 'bridalLook',
    title: 'Elegant Engagement',
    category: 'Engagement',
    featured: false,
    date: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    _type: 'bridalLook',
    title: 'Mehendi Glow',
    category: 'Mehendi',
    featured: true,
    date: new Date(Date.now() - 86400000 * 3).toISOString(),
  },
  {
    _type: 'bridalLook',
    title: 'Classic Microblading',
    category: 'Microblading',
    featured: false,
    date: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
  {
    _type: 'bridalLook',
    title: 'HD Bridal Finish',
    category: 'Bridal',
    featured: false,
    date: new Date(Date.now() - 86400000 * 5).toISOString(),
  }
]

async function seed() {
  console.log("Seeding dummy looks...")
  // Note: we can't easily upload images via URL directly to the image field without downloading them first.
  // Wait, Sanity allows creating assets from URLs if we use the asset pipeline, but it's complex for a simple script.
  // I will just create the documents without images for now, or use a workaround.
  // Actually, without an image, the schema validation will fail because image is required().
  // Let me fetch an image buffer from unsplash and upload it.
  
  for (const look of sampleLooks) {
    try {
      const imgRes = await fetch('https://images.unsplash.com/photo-1596455607563-ad6193f76b17?w=800&q=80')
      const buffer = await imgRes.arrayBuffer()
      const asset = await client.assets.upload('image', Buffer.from(buffer), {
        filename: 'sample-bride.jpg'
      })

      const doc = {
        ...look,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id
          }
        }
      }

      await client.create(doc)
      console.log(`Created: ${look.title}`)
    } catch (err) {
      console.error(`Failed to create ${look.title}:`, err.message)
    }
  }
  console.log("Done seeding!")
}

seed()
