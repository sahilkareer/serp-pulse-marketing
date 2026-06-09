import { defineType, defineField, defineArrayMember } from 'sanity'

const CATEGORIES = [
  { title: 'AI Traffic', value: 'ai-traffic' },
  { title: 'Google Search Console', value: 'google-search-console' },
  { title: 'Analytics', value: 'analytics' },
  { title: 'Agency SEO', value: 'agency-seo' },
  { title: 'SEO Strategy', value: 'seo-strategy' },
]

export const postType = defineType({
  name: 'post',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt (shown in blog index)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: { list: CATEGORIES, layout: 'radio' },
    }),
    defineField({
      name: 'readTime',
      title: 'Read time (e.g. "8 min read")',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured post?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'content',
      title: 'Post Content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Heading 4', value: 'h4' },
            { title: 'Blockquote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  { name: 'href', type: 'string', title: 'URL' },
                  { name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true },
                ],
              },
            ],
          },
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Published (newest first)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category' },
    prepare({ title, subtitle }) {
      const cat = CATEGORIES.find((c) => c.value === subtitle)
      return { title, subtitle: cat?.title || subtitle }
    },
  },
})
