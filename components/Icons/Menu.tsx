import Icon from '../../types/icon'

interface Props extends Icon {
  handleClick: () => void
  isOpen: boolean
}

const Menu = ({ className, handleClick, isOpen }: Props) => (
  <button
    className={`btn-hamburger not-active ${className}`}
    onClick={handleClick}
  >
    <div className="line-hamburger"></div>
    <div className="line-hamburger"></div>
    <div className="line-hamburger"></div>
  </button>
)

export default Menu
