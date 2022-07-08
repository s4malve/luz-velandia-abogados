import { ReactElement } from 'react'

type Props = {
  tablet: (() => ReactElement<any, any>) | string | (() => JSX.Element)
  title: string
  description: string
  color: string
  className?: string
  orientation?: 'flex-col' | 'flex-row'
}

const CardArea = ({
  tablet,
  title,
  description,
  color,
  className = '',
  orientation = 'flex-col'
}: Props) => {
  const Icon = tablet
  return (
    <article
      className={`py-10 px-8 rounded-lg flex ${orientation} gap-4 items-start shadow-sm shadow-dark-72 w-full ${className}`}
    >
      {typeof tablet === 'string' ? (
        <div
          className="px-4 py-2 rounded-lg"
          style={{ backgroundColor: color }}
        >
          <span className="text-3xl font-bold">{tablet}</span>
        </div>
      ) : (
        <div
          className="px-3 py-4 rounded-lg"
          style={{ backgroundColor: color }}
        >
          <Icon />
        </div>
      )}
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-dark-72">{description}</p>
      </div>
    </article>
  )
}

export default CardArea
