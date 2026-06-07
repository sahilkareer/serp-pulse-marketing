import { defineType, defineField, defineArrayMember } from 'sanity'

export const howItWorksType = defineType({
  name: 'howItWorks',
  title: 'How It Works',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Step Number', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({ name: 'time', title: 'Time Badge (e.g. ⚡ 30s)', type: 'string' }),
          ],
          preview: { select: { title: 'title' } },
        }),
      ],
    }),
  ],
  preview: {
    prepare() { return { title: 'How It Works' } },
  },
})

export const testimonialsType = defineType({
  name: 'testimonials',
  title: 'Testimonials / Social Proof',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({
      name: 'stats',
      title: 'Stats Row',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number', type: 'string' }),
            defineField({ name: 'label', title: 'Label', type: 'string' }),
          ],
          preview: { select: { title: 'number', subtitle: 'label' } },
        }),
      ],
    }),
    defineField({
      name: 'items',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'text', title: 'Quote Text', type: 'text', rows: 3 }),
            defineField({ name: 'authorInitials', title: 'Author Initials (e.g. SK)', type: 'string' }),
            defineField({ name: 'authorName', title: 'Author Name', type: 'string' }),
            defineField({ name: 'authorRole', title: 'Author Role', type: 'string' }),
          ],
          preview: { select: { title: 'authorName', subtitle: 'authorRole' } },
        }),
      ],
    }),
  ],
  preview: {
    prepare() { return { title: 'Testimonials' } },
  },
})

export const founderType = defineType({
  name: 'founderStory',
  title: 'Founder Story',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({
      name: 'paragraphs',
      title: 'Story Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
    }),
    defineField({ name: 'name', title: 'Founder Name', type: 'string' }),
    defineField({ name: 'role', title: 'Founder Role', type: 'string' }),
    defineField({ name: 'years', title: 'Years Experience (e.g. 6+ years in SEO...)', type: 'string' }),
    defineField({ name: 'photo', title: 'Founder Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'initials', title: 'Initials (shown if no photo)', type: 'string' }),
  ],
  preview: {
    prepare() { return { title: 'Founder Story' } },
  },
})

export const pricingType = defineType({
  name: 'pricing',
  title: 'Pricing Section',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'annualDiscount', title: 'Annual Discount Label (e.g. Save 30%)', type: 'string' }),
    defineField({
      name: 'plans',
      title: 'Plans',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Plan Name', type: 'string' }),
            defineField({ name: 'monthlyPrice', title: 'Monthly Price (number)', type: 'number' }),
            defineField({ name: 'annualPrice', title: 'Annual Price (number)', type: 'number' }),
            defineField({ name: 'description', title: 'Description', type: 'string' }),
            defineField({ name: 'popular', title: 'Most Popular?', type: 'boolean', initialValue: false }),
            defineField({ name: 'popularLabel', title: 'Popular Badge Label', type: 'string' }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({ name: 'text', title: 'Feature Text', type: 'string' }),
                    defineField({ name: 'included', title: 'Included?', type: 'boolean', initialValue: true }),
                  ],
                  preview: { select: { title: 'text', subtitle: 'included' } },
                }),
              ],
            }),
            defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
            defineField({ name: 'ctaUrl', title: 'CTA URL', type: 'string' }),
          ],
          preview: { select: { title: 'name' } },
        }),
      ],
    }),
  ],
  preview: {
    prepare() { return { title: 'Pricing Section' } },
  },
})

export const integrationsType = defineType({
  name: 'integrations',
  title: 'Integrations Section',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Integration Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'string' }),
            defineField({ name: 'faviconDomain', title: 'Domain for favicon (e.g. search.google.com)', type: 'string' }),
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
              options: { list: ['active', 'coming_soon'], layout: 'radio' },
              initialValue: 'active',
            }),
          ],
          preview: { select: { title: 'name', subtitle: 'status' } },
        }),
      ],
    }),
  ],
  preview: {
    prepare() { return { title: 'Integrations' } },
  },
})

export const finalCtaType = defineType({
  name: 'finalCta',
  title: 'Final CTA (Dark)',
  type: 'object',
  fields: [
    defineField({ name: 'headline', title: 'Headline (use | for line break)', type: 'string' }),
    defineField({ name: 'accentWord', title: 'Accent Word', type: 'string' }),
    defineField({ name: 'subtext', title: 'Sub Text', type: 'text', rows: 2 }),
    defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
    defineField({ name: 'ctaUrl', title: 'CTA URL', type: 'string' }),
    defineField({
      name: 'badges',
      title: 'Trust Badges',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
  preview: {
    prepare() { return { title: 'Final CTA' } },
  },
})
