import Mouse from '../Icons/Mouse'
import Nav from './Nav'

interface Props {
  cover: string
  title: string
  description: string
  children?: React.ReactNode
  coverPosition?: 'bg-top' | 'bg-bottom' | 'bg-center'
}

const Header = ({
  cover,
  title,
  description,
  children,
  coverPosition = 'bg-top'
}: Props) => (
  <header
    style={{
      backgroundImage: `linear-gradient(0deg, rgba(21, 26, 44, 0.68),
  rgba(21, 26, 44, 0.68)), url('${cover}')`
    }}
    className={`${coverPosition} bg-no-repeat bg-cover text-brilliance`}
  >
    <div className="wrapper grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto]">
      <Nav />
      <div className="self-center text-content max-w-prose">
        <h1 className="mb-4">{title}</h1>
        <p className="mb-5 text-sm text-brilliance/75">{description}</p>
        {children}
      </div>
      <footer className="flex items-center justify-between py-10 lg:py-16 opacity-60">
        <section className="flex items-center gap-x-6">
          <span>left</span>
          <span>rigth</span>
        </section>
        <section className="flex items-center gap-x-4">
          <div className="flex flex-col items-end">
            <span className="font-bold title">Desliza</span>
            <span>para ver más</span>
          </div>
          <Mouse />
        </section>
      </footer>
    </div>
  </header>
)

export default Header
