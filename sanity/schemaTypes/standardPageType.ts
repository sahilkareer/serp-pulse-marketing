import { defineType, defineField, defineArrayMember } from 'sanity'

export const standardPageType = defineType({
  name: 'standardPage',
  title: 'Pages',
  type: 'document',
  groups: [
    { name: 'seo',     title: 'SEO' },
    { name: 'hero',    title: 'Hero' },
    { name: 'content', title: 'Content' },
    { name: 'cta',     title: 'Final CTA' },
  ],
  fields: [
    defineField({ name: 'title',       title: 'Page name (internal)',                 type: 'string' }),
    defineField({ name: 'slug',        title: 'Slug (identifies the page)',            type: 'slug', options: { source: 'title' }, validation: R => R.required() }),
    defineField({ name: 'seoTitle',    title: 'SEO title',     type: 'string', group: 'seo' }),
    defineField({ name: 'seoDesc',     title: 'SEO description', type: 'text', rows: 2, group: 'seo' }),

    // ── Hero ──────────────────────────────────────────────────────
    defineField({ name: 'heroLabel',         title: 'Label above headline',                     type: 'string',  group: 'hero' }),
    defineField({ name: 'heroHeadline',      title: 'Headline (use | for line break)',           type: 'text',    group: 'hero', rows: 3 }),
    defineField({ name: 'heroAccent',        title: 'Accent word/phrase (highlighted in teal)',  type: 'string',  group: 'hero' }),
    defineField({ name: 'heroSubtext',       title: 'Subtext paragraph',                        type: 'text',    group: 'hero', rows: 3 }),
    defineField({ name: 'heroPrimaryText',   title: 'Primary CTA text',                         type: 'string',  group: 'hero' }),
    defineField({ name: 'heroPrimaryUrl',    title: 'Primary CTA URL',                          type: 'string',  group: 'hero' }),
    defineField({ name: 'heroSecondaryText', title: 'Secondary CTA text',                       type: 'string',  group: 'hero' }),
    defineField({ name: 'heroSecondaryUrl',  title: 'Secondary CTA URL',                        type: 'string',  group: 'hero' }),
    defineField({ name: 'heroNote',          title: 'Small note below CTAs',                    type: 'string',  group: 'hero' }),

    // ── Content sections ──────────────────────────────────────────
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'label',   type: 'string', title: 'Small label' }),
          defineField({ name: 'heading', type: 'text',   title: 'Heading', rows: 2 }),
          defineField({ name: 'body',    type: 'text',   title: 'Body paragraph', rows: 4 }),
          defineField({
            name: 'checks',
            title: 'Feature bullets / checklist',
            type: 'array',
            of: [defineArrayMember({ type: 'string' })],
          }),
        ],
        preview: { select: { title: 'heading', subtitle: 'label' } },
      })],
    }),

    // FAQs (pricing, docs)
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({ name: 'q', type: 'string', title: 'Question' }),
          defineField({ name: 'a', type: 'text',   title: 'Answer', rows: 3 }),
        ],
        preview: { select: { title: 'q' } },
      })],
    }),

    // Rich text (docs, privacy, terms)
    defineField({
      name: 'content',
      title: 'Rich text content',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({
        type: 'block',
        styles: [
          { title: 'Normal',     value: 'normal'     },
          { title: 'Heading 2',  value: 'h2'         },
          { title: 'Heading 3',  value: 'h3'         },
          { title: 'Blockquote', value: 'blockquote' },
        ],
        marks: {
          decorators: [
            { title: 'Bold',   value: 'strong' },
            { title: 'Italic', value: 'em'     },
            { title: 'Code',   value: 'code'   },
          ],
          annotations: [{
            name: 'link', type: 'object', title: 'Link',
            fields: [
              { name: 'href',  type: 'string',  title: 'URL' },
              { name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true },
            ],
          }],
        },
      })],
    }),

    // ── Final CTA ─────────────────────────────────────────────────
    defineField({ name: 'ctaHeadline',  title: 'CTA headline (use | for line break)', type: 'text',   group: 'cta', rows: 2 }),
    defineField({ name: 'ctaSubtext',   title: 'CTA subtext',                         type: 'text',   group: 'cta', rows: 2 }),
    defineField({ name: 'ctaText',      title: 'CTA button text',                     type: 'string', group: 'cta' }),
    defineField({ name: 'ctaUrl',       title: 'CTA button URL',                      type: 'string', group: 'cta' }),
  ],
  orderings: [{ title: 'Slug A→Z', name: 'slugAsc', by: [{ field: 'slug.current', direction: 'asc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
    prepare({ title, subtitle }) {
      return { title: title || 'Untitled', subtitle: `/${subtitle || ''}` }
    },
  },
})
