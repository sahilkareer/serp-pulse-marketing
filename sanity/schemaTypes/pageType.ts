import { defineType, defineField, defineArrayMember } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Sections',
      description: 'Drag to reorder sections',
      type: 'array',
      of: [
        defineArrayMember({ type: 'hero' }),
        defineArrayMember({ type: 'trustBar' }),
        defineArrayMember({ type: 'featureSpotlight' }),
        defineArrayMember({ type: 'aiTrafficSection' }),
        defineArrayMember({ type: 'howItWorks' }),
        defineArrayMember({ type: 'testimonials' }),
        defineArrayMember({ type: 'founderStory' }),
        defineArrayMember({ type: 'pricing' }),
        defineArrayMember({ type: 'integrations' }),
        defineArrayMember({ type: 'finalCta' }),
      ],
    }),
    defineField({ name: 'seoTitle', title: 'SEO Title', type: 'string', group: 'seo' }),
    defineField({ name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 2, group: 'seo' }),
  ],
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
})
