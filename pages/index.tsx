import Head from 'next/head'

import AreaPointer from '../components/AreaPointer'
import BaseHead from '../components/Head/BaseHead'
import CardArea from '../components/CardArea'
import CardComment from '../components/CardComment'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Form from '../components/Form'

import areas from '../data/areas'
import comments from '../data/comments.json'
import howWeWorks from '../data/how-we-works.json'

const Home = () => (
  <>
    <Head>
      <BaseHead
        title="Example Blog"
        description="The perfect starter for your perfect blog."
        permalink="https://luzvelandiaabogados.com/"
      />
    </Head>

    <Header
      title="Protegémos lo que a tí más te importa"
      description="Somos un buffet . Especializado en derecho de familia, el cual tiene la vision de tratar todas las ramas del derecho con la familia en el centro, y basamos nuestra mentalidad en ello"
      cover="https://images.unsplash.com/photo-1547948577-438c80482068?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    >
      <a
        href="https://api.whatsapp.com/send?phone=573203789546"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
      >
        Agenda tu cita
      </a>
    </Header>
    <main id="main-content">
      <section className="content-container">
        <div className="wrapper">
          <div className="flex flex-col justify-between gap-12 md:flex-row md:items-center">
            <figure className="max-w-[540px]">
              <img
                src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                alt=""
              />
            </figure>
            <div className="mb-12 max-w-[440px]">
              <h2 className="mb-2">Nuestras Áreas</h2>
              <p className="mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
              <a href="/areas" className="btn btn-primary">
                Ver más áreas
              </a>
            </div>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(292px,1fr))] mt-8 gap-8">
            {areas.map(({ title, href, color, description, tablet }, i) => (
              <li key={i} className="area-card">
                <a href={href}>
                  <CardArea
                    title={title}
                    color={color}
                    description={description}
                    tablet={tablet}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="content-container bg-section">
        <div className="flex flex-col items-center justify-between wrapper md:flex-row gap-x-8">
          <figure className="max-w-[446px]">
            <img src="/lawyer-image.png" alt="" />
          </figure>
          <div className="max-w-[400px] lg:max-w-[590px]">
            <h2 className="md:text-4xl lg:text-5xl">
              “Cada persona es un mundo. Y mi trabajo es proteger cada mundo”
            </h2>
            <p className="mt-3 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel fringilla est
            </p>
            <a href="/acerca-de" className="btn btn-primary">
              Ver biografía
            </a>
          </div>
        </div>
      </section>
      <section className="content-container bg-pucker-up text-brilliance">
        <div className="flex flex-col items-center wrapper md:flex-row gap-y-16 gap-x-12">
          <h2 className="md:max-w-[400px] text-center md:text-left">
            Lo que nuestros clientes tienen que decir
          </h2>
          <div className="relative before:w-full before:h-64 before:bg-comments-mobile before:absolute before:top-0 after:w-full after:h-64 after:bg-comments-mobile after:absolute after:bottom-0 after:rotate-180 md:before:left-0 md:after:h-full md:after:w-28 md:after:right-0 md:after:rotate-180 md:after:bg-comments-desktop md:before:bg-comments-desktop md:before:w-28">
            <div className="w-full overflow-x-auto max-w-[635px]">
              <ul className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-[repeat(3,380px)] gap-6 w-full">
                {comments.map(({ user, comment }, i) => (
                  <li key={i}>
                    <CardComment comment={comment} user={user} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center content-container wrapper">
        <div className="grid mb-12 text-center justify-items-center gap-y-2 md:max-w-sm">
          <h2>¿Cómo trabajamos?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus
          </p>
        </div>
        <div className="grid gap-y-0 w-full md:before:w-full md:before:h-[6px] before:bg-pucker-up relative before:absolute before:rounded-full md:before:my-auto md:before:-top-[3px] before:w-[6px] before:h-full before:bottom-0 before:right-[13px] md:before:right-auto">
          <ul className="flex flex-col md:flex-row w-full items-start md:items-end md:justify-end justify-self-end md:-mb-[5px] md:how-we-work--card-top">
            {howWeWorks.map(({ color, description, tablet, title }, i) => (
              <AreaPointer
                className="flex-row justify-between w-full md:flex-col md:w-auto md:justify-end"
                key={i}
              >
                <CardArea
                  color={color}
                  description={description}
                  tablet={tablet}
                  title={title}
                  className="max-w-xs shadow-none"
                />
              </AreaPointer>
            ))}
          </ul>
          <ul className="items-center hidden md:-mt-7 md:flex md:how-we-work--card-bottom">
            {howWeWorks.map(({ color, description, tablet, title }, i) => (
              <AreaPointer className="flex-col-reverse" key={i}>
                <CardArea
                  color={color}
                  description={description}
                  tablet={tablet}
                  title={title}
                  className="max-w-xs shadow-none"
                />
              </AreaPointer>
            ))}
          </ul>
        </div>
      </section>
      <Form title="¿Increíble verdad? Qué esperas para ponerte en contacto" />
    </main>
    <Footer />
  </>
)

export default Home
