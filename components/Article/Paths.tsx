type Props = {
  pathTransformedtoArray: string[]
}

const Paths = ({ pathTransformedtoArray }: Props) => {
  const currentPath = (index: number) =>
    pathTransformedtoArray
      .map((_, i) => (i > index ? '' : `/${pathTransformedtoArray[i]}`))
      .join('')
  return (
    <ul className="flex items-center gap-x-2 article-header-links">
      {pathTransformedtoArray.map((path, index) => (
        <li key={index}>
          <a
            href={currentPath(index)}
            className="font-semibold capitalize hover:underline text-dark/70"
          >
            {path}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Paths
