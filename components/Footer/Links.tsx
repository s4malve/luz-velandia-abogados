type Props = {
  href: string
  title: string
  links: {
    href: string
    title: string
  }[]
}
const Links = ({ href, title, links }: Props) => (
  <div className="flex flex-col gap-y-3">
    <a href={href} className="font-semibold links">
      {title}
    </a>
    <ul className="flex flex-col gap-y-2">
      {links.map(({ href, title }, i) => (
        <li key={i}>
          <a href={href} className="links">
            {title}
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default Links
