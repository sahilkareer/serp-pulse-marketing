import { defineType, defineField, defineArrayMember } from 'sanity'

export const featureSpotlightType = defineType({
  name: 'featureSpotlight',
  title: 'Feature Spotlight',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Section Label (e.g. Key Differentiator)', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline (use | for line break)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'features',
      title: 'Feature Bullets',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'text', title: 'Feature Text', type: 'string' }),
          ],
          preview: { select: { title: 'text' } },
        }),
      ],
    }),
    defineField({
      name: 'mockupType',
      title: 'Which Mockup to Show',
      type: 'string',
      options: {
        list: [
          { title: 'Growth Monitoring', value: 'growth' },
          { title: 'Combined GSC + GA4', value: 'combined' },
          { title: 'Advanced Filters', value: 'filters' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'reverse',
      title: 'Reverse Layout (mockup on left)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'string',
      options: { list: ['white', 'light'], layout: 'radio' },
      initialValue: 'white',
    }),
  ],
  preview: {
    select: { title: 'headline', subtitle: 'mockupType' },
    prepare({ title, subtitle }) {
      return { title: title || 'Feature Spotlight', subtitle }
    },
  },
})
