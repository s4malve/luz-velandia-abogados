import WhatsAppLogo from '../components/Icons/WhatsApp'
import FacebookLogo from '../components/Icons/Facebook'
import TwitterLogo from '../components/Icons/Twitter'

import SocialMedia from '../types/social-media'

import { LINKS } from '../lib/constants'

const socialMedia: SocialMedia[] = [
  {
    link: LINKS.phone.main,
    logo: WhatsAppLogo,
    name: 'WhatsApp'
  },
  {
    link: LINKS.facebook.main,
    logo: FacebookLogo,
    name: 'Facebook'
  },
  {
    link: LINKS.twitter.main,
    logo: TwitterLogo,
    name: 'Twitter'
  }
]

export default socialMedia
