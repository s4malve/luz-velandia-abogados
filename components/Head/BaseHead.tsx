import { BASE_PAGE_TITLE } from '../../lib/constants'
import Favicons from './Favicons'

export interface Props {
  title: string
  description: string
  permalink: string
}

const BaseHead = ({ title, description, permalink }: Props) => (
  <>
    <title>{`${title} | ${BASE_PAGE_TITLE}` || BASE_PAGE_TITLE}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    <Favicons />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={permalink} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/favicon/apple-touch-icon.png" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={permalink} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content="/favicon/apple-touch-icon.png" />
  </>
)

export default BaseHead
