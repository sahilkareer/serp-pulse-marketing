import { defineType, defineField, defineArrayMember } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'tabs',
      title: 'Hero Variants (3 tabs)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'heroTab',
          fields: [
            defineField({ name: 'label', title: 'Tab Label', type: 'string' }),
            defineField({ name: 'headline', title: 'Headline (use | for line break)', type: 'string' }),
            defineField({ name: 'accentWord', title: 'Accent Word/Phrase', type: 'string' }),
            defineField({ name: 'subtext', title: 'Sub Text', type: 'text', rows: 3 }),
            defineField({ name: 'primaryCtaText', title: 'Primary CTA Text', type: 'string' }),
            defineField({ name: 'primaryCtaUrl', title: 'Primary CTA URL', type: 'string' }),
            defineField({ name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string' }),
            defineField({ name: 'secondaryCtaUrl', title: 'Secondary CTA URL', type: 'string' }),
            defineField({ name: 'note', title: 'Note below CTAs', type: 'string' }),
          ],
          preview: {
            select: { title: 'label' },
            prepare({ title }) {
              return { title: title || 'Hero Tab' }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'previewUrl',
      title: 'Browser Bar URL (in product preview)',
      type: 'string',
      initialValue: 'app.serp-pulse.com/project/demo-website',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hero Section' }
    },
  },
})
