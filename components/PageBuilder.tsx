import Hero from './blocks/Hero'
import { TrustBar, FeatureSpotlight, HowItWorks } from './blocks/SectionBlocks'
import { AiTrafficSection, Testimonials, FounderStory, Pricing, Integrations, FinalCta } from './blocks/MoreBlocks'

export default function PageBuilder({ blocks }: { blocks: any[] }) {
  if (!Array.isArray(blocks)) return null

  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case 'hero':
            return <Hero key={block._key} data={block} />
          case 'trustBar':
            return <TrustBar key={block._key} data={block} />
          case 'featureSpotlight':
            return <FeatureSpotlight key={block._key} data={block} />
          case 'aiTrafficSection':
            return <AiTrafficSection key={block._key} data={block} />
          case 'howItWorks':
            return <HowItWorks key={block._key} data={block} />
          case 'testimonials':
            return null // Removed: unverified testimonials
          case 'founderStory':
            return <FounderStory key={block._key} data={block} />
          case 'pricing':
            return <Pricing key={block._key} data={block} />
          case 'integrations':
            return <Integrations key={block._key} data={block} />
          case 'finalCta':
            return <FinalCta key={block._key} data={block} />
          default:
            return null
        }
      })}
    </>
  )
}
