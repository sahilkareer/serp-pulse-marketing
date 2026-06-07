import { defineType, defineField, defineArrayMember } from 'sanity'

export const trustBarType = defineType({
  name: 'trustBar',
  title: 'Trust Bar',
  type: 'object',
  fields: [
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', title: 'Number (e.g. 500+)', type: 'string' }),
            defineField({ name: 'label', title: 'Label (e.g. Active users)', type: 'string' }),
          ],
          preview: {
            select: { title: 'number', subtitle: 'label' },
          },
        }),
      ],
    }),
    defineField({
      name: 'badges',
      title: 'Trust Badges',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'text', title: 'Badge Text', type: 'string' }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: { list: ['shield', 'lock'] },
            }),
          ],
          preview: {
            select: { title: 'text' },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Trust Bar' }
    },
  },
})
