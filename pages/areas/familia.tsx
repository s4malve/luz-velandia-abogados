import Head from 'next/head'

import BaseHead from '../../components/Head/BaseHead'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import ArticleHeader from '../../components/Article/Header'
import Image from '../../components/Article/Image'

import { AUTHORS } from '../../lib/constants'

const Family = () => {
  const shareLinks = {
    facebook: '',
    twitter: ''
  }

  return (
    <>
      <Head>
        <BaseHead description="" permalink="" title="" />
      </Head>
      <Header
        cover="/assets/areas/family/cover.jpg"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum labore doloremque officiis minus, quibusdam a ut, iusto officia quis magni voluptatem fuga aspernatur? Officiis incidunt alias voluptas voluptatibus hic eaque."
        title="Familia"
        coverPosition="bg-center"
      />
      <Layout shareLinks={shareLinks}>
        <ArticleHeader
          date="7 de Julio de 2022"
          description="Conoce todo acerca de las areas en las cuales somos expertos y lsobre los servicios que anejamos"
          pathname="/areas/familia"
          readtime="8 minutos"
          title="¿Cúales son las áreas que manejamos en Velandia Abogados?"
          author={AUTHORS.luzVelandia}
        />
        <Image cover="/assets/areas/family/article-cover.jpg" />
        <section className="wrapper-article">
          <h2>Familia</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            tenetur modi, illum similique, consectetur accusamus asperiores
            error molestias quisquam incidunt fugit corporis distinctio! Quam
            excepturi aut laborum totam. Nostrum, accusantium.
          </p>
          <Image cover="/assets/areas/family/article-cover.jpg" />
        </section>
        <section className="wrapper-article">
          <h2>Civil</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            tenetur modi, illum similique, consectetur accusamus asperiores
            error molestias quisquam incidunt fugit corporis distinctio! Quam
            excepturi aut laborum totam. Nostrum, accusantium.
          </p>
          <Image cover="/assets/areas/family/article-cover.jpg" />
        </section>
        <section className="wrapper-article">
          <h2>Circuito</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
            tenetur modi, illum similique, consectetur accusamus asperiores
            error molestias quisquam incidunt fugit corporis distinctio! Quam
            excepturi aut laborum totam. Nostrum, accusantium.
          </p>
          <Image cover="/assets/areas/family/article-cover.jpg" />
        </section>
      </Layout>
    </>
  )
}

export default Family
