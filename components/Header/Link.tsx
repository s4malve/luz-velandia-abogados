import {
  AnchorHTMLAttributes,
  ClassAttributes,
  createElement,
  InputHTMLAttributes
} from 'react'

type Props = {
  type: 'span' | 'a'
  title: string
  children?: React.ReactNode
  opt?:
    | (InputHTMLAttributes<HTMLInputElement> &
        ClassAttributes<HTMLInputElement>)
    | AnchorHTMLAttributes<HTMLAnchorElement>
}

const Link = ({ type = 'span', title, children, opt }: Props) =>
  createElement(
    type,
    {
      ...opt,
      className: `flex items-center gap-x-2 ${type === 'a' ? 'links' : ''}`
    },
    [title, children]
  )

export default Link
