import {
  AnchorHTMLAttributes,
  ClassAttributes,
  createElement,
  InputHTMLAttributes,
  ReactNode
} from 'react'

type Props = {
  type?: 'a' | 'button'
  children: ReactNode[] | ReactNode
  props: InputHTMLAttributes<HTMLInputElement> &
    ClassAttributes<HTMLInputElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>
}

const Button = ({ type = 'button', children, props = {} }: Props) => {
  return createElement(type, props, children)
}

export default Button
