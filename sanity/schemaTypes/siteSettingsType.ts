import { defineType, defineField, defineArrayMember } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings (Nav & Footer)',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Internal Title', type: 'string', initialValue: 'Site Settings' }),

    // NAV
    defineField({
      name: 'nav',
      title: 'Navigation',
      type: 'object',
      fields: [
        defineField({ name: 'logoText', title: 'Logo Text', type: 'string', initialValue: 'SERP-Pulse' }),
        defineField({ name: 'loginText', title: 'Login Link Text', type: 'string', initialValue: 'Log in' }),
        defineField({ name: 'loginUrl', title: 'Login URL', type: 'string', initialValue: '/login' }),
        defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string', initialValue: 'Start Free Trial →' }),
        defineField({ name: 'ctaUrl', title: 'CTA URL', type: 'string', initialValue: '/signup' }),
      ],
    }),

    // FOOTER
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
        defineField({ name: 'copyright', title: 'Copyright Text', type: 'string' }),
        defineField({
          name: 'columns',
          title: 'Footer Columns',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'heading', title: 'Column Heading', type: 'string' }),
                defineField({
                  name: 'links',
                  title: 'Links',
                  type: 'array',
                  of: [
                    defineArrayMember({
                      type: 'object',
                      fields: [
                        defineField({ name: 'label', title: 'Label', type: 'string' }),
                        defineField({ name: 'url', title: 'URL', type: 'string' }),
                      ],
                      preview: { select: { title: 'label' } },
                    }),
                  ],
                }),
              ],
              preview: { select: { title: 'heading' } },
            }),
          ],
        }),
        defineField({
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'platform',
                  title: 'Platform',
                  type: 'string',
                  options: { list: ['linkedin', 'twitter'] },
                }),
                defineField({ name: 'url', title: 'URL', type: 'string' }),
              ],
              preview: { select: { title: 'platform' } },
            }),
          ],
        }),
      ],
    }),
  ],
})
