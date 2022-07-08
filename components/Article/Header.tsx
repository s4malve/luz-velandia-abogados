import Author from './Author'
import AuthorType from '../../types/author'
import Paths from './Paths'

type Props = {
  pathname: string
  title: string
  description: string
  author?: AuthorType
  readtime: string
  date: string
}

const Header = ({
  pathname,
  title,
  description,
  author,
  date,
  readtime
}: Props) => {
  const pathTransformedtoArray = pathname.split('/').slice(1)

  return (
    <header className="flex flex-col gap-y-4">
      <Paths pathTransformedtoArray={pathTransformedtoArray} />
      <div className="flex flex-col gap-y-2">
        <h2 className="dark">{title}</h2>
        <p className="">{description}</p>
      </div>
      <div className="flex items-center gap-x-4 h-fit">
        {author && <Author author={author} />}
        <p>
          <time dateTime={date}>{date}</time> | {readtime} de lectura
        </p>
      </div>
    </header>
  )
}

export default Header
