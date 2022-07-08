import { AppProps } from 'next/app'
import Head from 'next/head'
import BaseHead from '../components/Head/BaseHead'
import {
  BASE_PAGE_COPY,
  BASE_PAGE_TITLE,
  BASE_PAGE_URL
} from '../lib/constants'
import '../styles/font-face.css'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <BaseHead
          title={BASE_PAGE_TITLE}
          description={BASE_PAGE_COPY}
          permalink={BASE_PAGE_URL}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
