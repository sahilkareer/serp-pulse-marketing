import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
})

export const HOME_QUERY = `*[_type == "page" && slug.current == "home"][0]{
  title,
  pageBuilder[]{
    ...,
    _type,
    _key
  }
}`

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  nav,
  footer
}`
