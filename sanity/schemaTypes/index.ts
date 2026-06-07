import { heroType } from './blocks/heroType'
import { trustBarType } from './blocks/trustBarType'
import { featureSpotlightType } from './blocks/featureSpotlightType'
import { aiTrafficType } from './blocks/aiTrafficType'
import { howItWorksType, testimonialsType, founderType, pricingType, integrationsType, finalCtaType } from './blocks/otherBlocks'
import { pageType } from './pageType'
import { siteSettingsType } from './siteSettingsType'

export const schemaTypes = [
  // Documents
  pageType,
  siteSettingsType,
  // Blocks
  heroType,
  trustBarType,
  featureSpotlightType,
  aiTrafficType,
  howItWorksType,
  testimonialsType,
  founderType,
  pricingType,
  integrationsType,
  finalCtaType,
]
