import Head from 'next/head'
import { useRouter } from 'next/router'

import Image from '../../components/Article/Image'
import CardArea from '../../components/CardArea'
import BaseHead from '../../components/Head/BaseHead'
import ArticleHeader from '../../components/Article/Header'
import Layout from '../../components/Layout'
import Header from '../../components/Header'

import areas from '../../data/areas'

const Areas = () => {
  const router = useRouter()
  const { pathname } = router

  const title = 'Nuestras Areas | Luz Velandia Abogados'
  const description = 'The perfect starter for your perfect blog.'
  const permalink = 'https://example.com/areas'
  const shareLinks = {
    facebook:
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fluz-velandia.com%2Fareas%2F',
    twitter:
      'https://twitter.com/intent/tweet?text=Luz%20Velandia%20Abogados&url=https%3A%2F%2Fluz-velandia.com%2Fareas%2F&via=luz_velandia'
  }

  return (
    <>
      <Head>
        <BaseHead
          description={description}
          title={title}
          permalink={permalink}
        />
      </Head>
      <Header
        cover="/assets/areas/cover.jpg"
        description="Estas son nuestras areas base"
        title="Nuestras Áreas"
      />
      <Layout shareLinks={shareLinks}>
        <section className="wrapper-article">
          <ArticleHeader
            description="Estas son nuestras areas base"
            pathname={pathname}
            title="¿Cuales son nuestras áreas base?"
            date="7 de junio de 2022"
            readtime="8 minutos"
            author={{
              name: 'Luz Velandia Sepulveda',
              avatar: '/assets/authors/luz-velandia-sepulveda.jpg',
              url: '/acerca-de'
            }}
          />
          <Image
            cover="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            title="La descirpción de la imagen"
          />
        </section>
        <section className="wrapper-article">
          <h2> Nuestras Áreas base</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non
          </p>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-6 mt-2">
            {areas.map(({ color, description, href, tablet, title }, i) => (
              <li className="area-card" key={i}>
                <a href={href}>
                  <CardArea
                    color={color}
                    description={description}
                    tablet={tablet}
                    title={title}
                  />
                </a>
              </li>
            ))}
          </ul>
        </section>
        <section className="wrapper-article">
          <h2>Familia</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare
          </p>
          <Image cover="https://images.unsplash.com/photo-1491295314828-fb03946d9b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis enim lobortis scelerisque fermentum dui faucibus
            in ornare
          </p>
        </section>
      </Layout>
    </>
  )
}

export default Areas
