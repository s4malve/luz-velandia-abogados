import NavStyles from './Nav.module.css'
import DownArrow from '../Icons/DownArrow'

import links from '../../data/links.json'
import Link from './Link'

type Props = {
  isOpen: boolean
}

const NavLinks = ({ isOpen }: Props) => {
  return (
    <ul
      className={`${
        NavStyles['nav-links']
      } flex flex-col gap-y-5 items-center absolute top-0 p-8 min-h-[60vh] rounded-lg right-0 left-0  text-dark bg-brilliance z-10 font-semibold gap-x-6 lg:flex lg:static lg:flex-row lg:min-h-full lg:bg-transparent lg:p-0 lg:text-brilliance ${
        isOpen ? NavStyles['active'] : ''
      }`}
    >
      {links.map(({ href, title, links }, i) => (
        <li
          key={i}
          className={`flex flex-col relative ${
            links.length > 0 && NavStyles['nav-links-dropdown']
          }`}
        >
          <Link title={title} type={href ? 'a' : 'span'} opt={{ href }}>
            {links.length > 0 && (
              <DownArrow className={`w-3 transition-transform`} />
            )}
          </Link>
          <ul className="flex flex-col items-center transition-opacity opacity-0 pointer-events-none gap-y-5 text-dark/75 lg:absolute lg:top-full lg:bg-brilliance lg:p-6 lg:rounded-lg lg:min-w-max">
            {links.map(({ href, title }, i) => (
              <li key={i}>
                <a href={href} className="links">
                  <span>{title}</span>
                </a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
