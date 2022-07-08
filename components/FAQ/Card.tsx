type Props = {
  children: React.ReactNode
  id: string
}

const Card = ({ children, id }: Props) => {
  return (
    <section
      className="flex flex-col px-8 py-10 rounded-lg shadow gap-y-10"
      id={id}
    >
      {children}
    </section>
  )
}

export default Card
