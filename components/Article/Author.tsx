import Author from '../../types/author'

type Props = {
  author: Author
}

const Author = ({ author }: Props) => (
  <a
    href={author.url}
    className="flex items-center px-4 py-2 rounded-full gap-x-3 hover:bg-dark/5 w-fit active:bg-dark/10"
  >
    <figure>
      <img
        src={author.avatar}
        alt={`${author.name} profile`}
        className="object-cover w-[32px] h-[32px] overflow-hidden rounded-full"
      />
    </figure>
    <span className="text-sm font-semibold">{author.name}</span>
  </a>
)

export default Author
