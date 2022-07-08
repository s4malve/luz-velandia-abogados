type Props = {
  title: string
  description: string
  children: React.ReactNode
}

export default ({ title, description, children }: Props) => (
  <header className="flex items-start gap-x-4">
    {children}
    <div className="flex flex-col gap-y-2">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </header>
)
