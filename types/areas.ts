import Author from './author'

type AreaType = {
  slug: string
  title: string
  content: string
  description: string
  coverImage: string
  date: string
  readtime: string
  header: {
    title: string
    description: string
  }
  author: Author
  ogImage: {
    url: string
  }
}

export default AreaType
