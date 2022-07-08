import Button from '../Button'

import Gmail from '../Icons/Gmail'
import WhatsApp from '../Icons/WhatsApp'
import Group from '../Icons/Group'
import Facebook from '../Icons/Facebook'

import { LINKS } from '../../lib/constants'

import ShareLinks from '../../types/share-links'

type Props = {
  className?: string
  shareLinks: ShareLinks
}

const Aside = ({ className = '', shareLinks }: Props) => {
  const iconClass = 'btn-with-icon'

  return (
    <aside className={className}>
      <ul className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(232px,1fr))] justify-between lg:max-w-[320px]">
        <LI title="¿Quieres llevar tu caso con nostotros?">
          <p>
            No dejes que alguien más haga uso de tus derechos. Empieza tu caso
            con nosotros.
          </p>
        </LI>
        <LI title="Contáctanos">
          <Button
            type="a"
            props={{
              href: LINKS.phone.share,
              className: `${iconClass} btn-whatsapp`,
              target: '_blank',
              rel: 'noopener noreferrer'
            }}
          >
            <WhatsApp />
            WhatsApp
          </Button>
          <Button
            type="a"
            props={{
              href: `mailto:${LINKS.mail.contact}`,
              className: `${iconClass} btn-gmail`,
              target: '_blank',
              rel: 'noopener noreferrer'
            }}
          >
            <Gmail />
            Gmail
          </Button>
        </LI>
        <LI title="Nuestras Áreas">
          {/*I know, this part can be optimizing by using map, but with tailwind is hard to implement dynamic styles  */}
          <Button
            type="a"
            props={{
              href: '/areas/familia',
              className: 'btn-with-icon btn-family btn-areas'
            }}
          >
            <Group />
            Family
          </Button>
          <Button
            type="a"
            props={{
              href: '/areas/civil',
              className: 'btn-with-icon btn-civil btn-areas'
            }}
          >
            <Group />
            Civil
          </Button>
          <Button
            type="a"
            props={{
              href: '/areas/circuito',
              className: 'btn-with-icon btn-circuit btn-areas'
            }}
          >
            <Group />
            Circuito
          </Button>
        </LI>
        <LI title="Comparte este post">
          <div className="flex items-center gap-x-3 text-dark/75">
            <a
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon btn-outline"
            >
              <Facebook />
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-icon btn-outline"
            >
              <WhatsApp />
            </a>
          </div>
        </LI>
      </ul>
    </aside>
  )
}

type LIProps = {
  children: JSX.Element[] | JSX.Element
  title: string
}
const LI = ({ children, title }: LIProps) => (
  <li className="flex flex-col gap-y-3">
    <h3>{title}</h3>
    {children}
  </li>
)

export default Aside
