import { useCallback, useState } from 'react'

import Menu from '../Icons/Menu'
import NavLinks from './NavLinks'

import Logo from '../Logo'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = useCallback(() => setIsOpen(!isOpen), [isOpen])

  return (
    <nav className="relative flex items-center justify-between py-8">
      <a href="/">
        <Logo />
      </a>
      <Menu className="lg:hidden" handleClick={handleClick} isOpen={isOpen} />
      <NavLinks isOpen={isOpen} />
    </nav>
  )
}
export default Nav
