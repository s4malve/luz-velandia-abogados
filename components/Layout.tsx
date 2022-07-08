import { ReactElement } from 'react'

import Aside from '../components/Aside'
import Footer from '../components/Footer'

import ShareLinks from '../types/share-links'

type Props = {
  children?: ReactElement<any, any> | ReactElement<any, any>[]
  shareLinks: ShareLinks
}

const Layout = ({ children, shareLinks }: Props) => (
  <>
    <main className="relative content-container">
      <div className="wrapper grid lg:grid-cols-[1fr_auto] gap-y-8 gap-x-8 justify-items-center">
        <article className="w-full max-w-[744px] [&_p]:text-dark-72 grid gap-y-10">
          {children}
        </article>
        <Aside
          shareLinks={shareLinks}
          className="row-start-1 lg:col-start-2 lg:sticky lg:top-8 h-fit"
        />
      </div>
    </main>
    <Footer />
  </>
)

export default Layout
