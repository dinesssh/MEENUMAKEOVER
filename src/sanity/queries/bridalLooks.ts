import { groq } from 'next-sanity'

export const bridalLooksQuery = groq`*[_type == "bridalLook"] | order(featured desc, date desc) {
  _id,
  title,
  category,
  "image": image.asset->url,
  "aspectRatio": "aspect-[3/4]"
}`
