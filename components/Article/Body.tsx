import { ReactElement } from 'react'

import markdownStyles from './markdown.module.css'

import Aside from '../Aside'

import ShareLinks from '../../types/share-links'

type Props = {
  children?: ReactElement<any, any>
  shareLinks: ShareLinks
}

const Body = ({ children, shareLinks }: Props) => {
  return (
    <div className={`wrapper ${markdownStyles['markdown']}`}>
      <article className="content-container grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-rows-[1fr] lg:grid-cols-[repeat(2,auto)] gap-6 justify-between">
        <main className="col-start-1 max-w-[700px]">{children}</main>
        <Aside shareLinks={shareLinks} className="row-start-1 lg:row-auto" />
      </article>
    </div>
  )
}

export default Body
