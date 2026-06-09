import { defineType, defineField, defineArrayMember } from 'sanity'

const STATUS_OPTIONS = [
  { title: 'In Progress', value: 'In Progress' },
  { title: 'Next Up', value: 'Next Up' },
  { title: 'Planned', value: 'Planned' },
  { title: 'Exploring', value: 'Exploring' },
]

export const roadmapType = defineType({
  name: 'roadmap',
  title: 'Roadmap',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Internal title',
      type: 'string',
      initialValue: 'Roadmap',
    }),
    defineField({
      name: 'upcoming',
      title: 'Upcoming Items',
      description: 'Drag to reorder. Shown top-to-bottom on the roadmap page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Feature title', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'text', rows: 2 }),
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
              options: { list: STATUS_OPTIONS, layout: 'radio' },
              initialValue: 'Planned',
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'status' },
          },
        }),
      ],
    }),
    defineField({
      name: 'shipped',
      title: 'Shipped Items',
      description: 'Features already live in production.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Feature label', type: 'string' }),
            defineField({ name: 'note', title: 'Badge text (e.g. "Live")', type: 'string', initialValue: 'Live' }),
          ],
          preview: { select: { title: 'label' } },
        }),
      ],
    }),
  ],
  preview: {
    prepare() { return { title: 'Roadmap' } },
  },
})
