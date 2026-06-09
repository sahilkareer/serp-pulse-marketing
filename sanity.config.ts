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
            // ── Homepage ──────────────────────────────────────────
            S.listItem()
              .title('🏠 Homepage')
              .child(
                S.documentList()
                  .title('Homepage')
                  .filter('_type == "page" && slug.current == "home"')
              ),

            // ── Blog ──────────────────────────────────────────────
            S.listItem()
              .title('📝 Blog Posts')
              .child(S.documentTypeList('post').title('Blog Posts')),

            // ── Roadmap ───────────────────────────────────────────
            S.listItem()
              .title('🗺️ Roadmap')
              .child(S.documentTypeList('roadmap').title('Roadmap')),

            S.divider(),

            // ── Marketing Pages (standardPage) ────────────────────
            S.listItem()
              .title('📄 Marketing Pages')
              .child(
                S.list()
                  .title('Marketing Pages')
                  .items([
                    // General
                    S.listItem().title('About').child(S.documentList().filter('_type == "standardPage" && slug.current == "about"').title('About')),
                    S.listItem().title('Contact').child(S.documentList().filter('_type == "standardPage" && slug.current == "contact"').title('Contact')),
                    S.listItem().title('Pricing').child(S.documentList().filter('_type == "standardPage" && slug.current == "pricing"').title('Pricing')),
                    S.listItem().title('Integrations').child(S.documentList().filter('_type == "standardPage" && slug.current == "integrations"').title('Integrations')),
                    S.listItem().title('Docs').child(S.documentList().filter('_type == "standardPage" && slug.current == "docs"').title('Docs')),
                    S.divider(),
                    // Features
                    S.listItem().title('Features Overview').child(S.documentList().filter('_type == "standardPage" && slug.current == "features"').title('Features')),
                    S.listItem().title('Feature: AI Citations').child(S.documentList().filter('_type == "standardPage" && slug.current == "features-ai-traffic"').title('AI Traffic')),
                    S.listItem().title('Feature: Analytics').child(S.documentList().filter('_type == "standardPage" && slug.current == "features-analytics"').title('Analytics')),
                    S.listItem().title('Feature: Growth').child(S.documentList().filter('_type == "standardPage" && slug.current == "features-growth"').title('Growth')),
                    S.listItem().title('Feature: MCP Server').child(S.documentList().filter('_type == "standardPage" && slug.current == "features-mcp"').title('MCP')),
                    S.listItem().title('Feature: Reports').child(S.documentList().filter('_type == "standardPage" && slug.current == "features-reports"').title('Reports')),
                    S.listItem().title('Feature: Search Console').child(S.documentList().filter('_type == "standardPage" && slug.current == "features-search-console"').title('GSC')),
                    S.divider(),
                    // Use Cases
                    S.listItem().title('Use Case: Agencies').child(S.documentList().filter('_type == "standardPage" && slug.current == "use-cases-agencies"').title('Agencies')),
                    S.listItem().title('Use Case: Freelancers').child(S.documentList().filter('_type == "standardPage" && slug.current == "use-cases-freelancers"').title('Freelancers')),
                    S.listItem().title('Use Case: In-House').child(S.documentList().filter('_type == "standardPage" && slug.current == "use-cases-in-house"').title('In-House')),
                    S.divider(),
                    // Legal
                    S.listItem().title('Privacy Policy').child(S.documentList().filter('_type == "standardPage" && slug.current == "privacy"').title('Privacy')),
                    S.listItem().title('Terms of Service').child(S.documentList().filter('_type == "standardPage" && slug.current == "terms"').title('Terms')),
                    S.divider(),
                    // Blog & Roadmap pages (hero/SEO fields)
                    S.listItem().title('Blog Page').child(S.documentList().filter('_type == "standardPage" && slug.current == "blog"').title('Blog Page')),
                    S.listItem().title('Roadmap Page').child(S.documentList().filter('_type == "standardPage" && slug.current == "roadmap"').title('Roadmap Page')),
                    // All
                    S.divider(),
                    S.listItem().title('All marketing pages').child(S.documentTypeList('standardPage').title('All Pages')),
                  ])
              ),

            S.divider(),

            // ── Advanced ──────────────────────────────────────────
            S.listItem()
              .title('⚙️ Site Settings')
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
