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

// Blog queries
export const BLOG_INDEX_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  category,
  readTime,
  publishedAt,
  featured
}`

export const BLOG_POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  category,
  readTime,
  publishedAt,
  content
}`

export const BLOG_SLUGS_QUERY = `*[_type == "post"] { "slug": slug.current }`

// Roadmap query
export const ROADMAP_QUERY = `*[_type == "roadmap"][0] {
  upcoming,
  shipped
}`

// Generic standard page query (about, contact, pricing, features, use-cases, docs, privacy, terms, etc.)
export const STANDARD_PAGE_QUERY = `*[_type == "standardPage" && slug.current == $slug][0] {
  seoTitle, seoDesc,
  heroLabel, heroHeadline, heroAccent, heroSubtext,
  heroPrimaryText, heroPrimaryUrl, heroSecondaryText, heroSecondaryUrl, heroNote,
  sections, faqs, content,
  ctaHeadline, ctaSubtext, ctaText, ctaUrl
}`
