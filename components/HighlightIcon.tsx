import { ReactElement } from 'react'

type Props = {
  Icon: () => ReactElement<any, any>
  className: string
}

const HightlightIcon = ({ Icon, className }: Props) => (
  <span className={`px-3 py-4 rounded-lg ${className}`}>
    <Icon />
  </span>
)

export default HightlightIcon
