import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'serp-pulse-marketing',
  title: 'SERP-Pulse Marketing Site',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('🏠 Homepage')
              .child(
                S.documentList()
                  .title('Homepage')
                  .filter('_type == "page" && slug.current == "home"')
              ),
            S.listItem()
              .title('📄 All Pages')
              .child(S.documentTypeList('page').title('Pages')),
            S.divider(),
            S.listItem()
              .title('⚙️ Site Settings (Nav & Footer)')
              .child(
                S.documentList()
                  .title('Site Settings')
                  .filter('_type == "siteSettings"')
              ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
