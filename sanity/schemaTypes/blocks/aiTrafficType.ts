import { defineType, defineField, defineArrayMember } from 'sanity'

export const aiTrafficType = defineType({
  name: 'aiTrafficSection',
  title: 'AI Traffic Section (Dark)',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Section Label', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline (use | for line break)', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
    defineField({
      name: 'platforms',
      title: 'AI Platforms',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Platform Name (e.g. ChatGPT)', type: 'string' }),
            defineField({ name: 'domain', title: 'Domain for favicon (e.g. chatgpt.com)', type: 'string' }),
            defineField({ name: 'sessions', title: 'Sessions (e.g. 4,218)', type: 'string' }),
            defineField({ name: 'growth', title: 'Growth % (e.g. +24%)', type: 'string' }),
            defineField({ name: 'barWidth', title: 'Bar Width % (e.g. 78)', type: 'number' }),
            defineField({ name: 'share', title: 'Share % (e.g. 55.5%)', type: 'string' }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'sessions' },
          },
        }),
      ],
    }),
    defineField({
      name: 'totalSessions',
      title: 'Total AI Sessions (e.g. 7,603)',
      type: 'string',
    }),
    defineField({
      name: 'totalGrowth',
      title: 'Total Growth (e.g. ▲ 34.2%)',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'AI Traffic Section' }
    },
  },
})
