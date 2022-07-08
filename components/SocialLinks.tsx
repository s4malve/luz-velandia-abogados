import socialmedia from '../data/social-media'

import SocialMedia from '../types/social-media'

type Props = {
  linksColor?: 'btn-outline' | 'btn-outline-dark'
  links?: SocialMedia[]
}

const SocialLinks = ({
  linksColor = 'btn-outline',
  links = socialmedia
}: Props) => (
  <div className="flex items-center gap-x-4 text-dark-72">
    {links.map(({ link, logo, name }) => {
      const Icon = logo
      return (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${linksColor} btn-icon `}
        >
          <Icon />
        </a>
      )
    })}
  </div>
)

export default SocialLinks
