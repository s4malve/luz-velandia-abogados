import Header from '../components/Header'
import Layout from '../components/Layout'
import ArticleHeader from '../components/Article/Header'
import Image from '../components/Article/Image'

import { AUTHORS } from '../lib/constants'

const AcercaDe = () => {
  const shareLinks = {
    facebook: '',
    twitter: ''
  }

  return (
    <>
      <Header
        cover="/assets/about-me/cover.jpg"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, omnis iusto cupiditate vitae voluptas repudiandae minus laudantium corrupti eius blanditiis."
        title="Acerca de Nosotros"
      />
      <Layout shareLinks={shareLinks}>
        <ArticleHeader
          date="7 de Julio de 2022"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, omnis iusto cupiditate vitae voluptas repudiandae minus laudantium corrupti eius blanditiis."
          pathname="/acerca-de"
          readtime="8 minutos"
          title="¿Qué es Luz Velandia Abogados?"
          author={AUTHORS.luzVelandia}
        />
        <Image cover="/assets/about-me/question.jpg" />
      </Layout>
    </>
  )
}

export default AcercaDe
