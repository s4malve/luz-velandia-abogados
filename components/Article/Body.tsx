import { ReactElement } from 'react'
import Aside from '../Aside'
import markdownStyles from './markdown.module.css'

type Props = {
  children?: ReactElement<any, any>
}

const Body = ({ children }: Props) => {
  return (
    <div className={`wrapper ${markdownStyles['markdown']}`}>
      <article className="content-container grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-rows-[1fr] lg:grid-cols-[repeat(2,auto)] gap-6 justify-between">
        <main className="col-start-1 max-w-[700px]">{children}</main>
        <Aside className="row-start-1 lg:row-auto" />
      </article>
    </div>
  )
}

export default Body
