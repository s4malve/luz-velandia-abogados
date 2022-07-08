interface Props {
  cover: string
  title?: string
}

const Image = ({ cover, title }: Props) => (
  <figure className="grid gap-y-2">
    <img src={cover} alt={title} loading="lazy" />
    {title && (
      <figcaption className="text-sm italic justify-self-end">
        {title}
      </figcaption>
    )}
  </figure>
)

export default Image
