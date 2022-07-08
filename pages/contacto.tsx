import Head from 'next/head'

import BaseHead from '../components/Head/BaseHead'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Form from '../components/Form'
import Button from '../components/Button'

import Location from '../components/Icons/Location'
import Mail from '../components/Icons/Mail'
import Phone from '../components/Icons/Phone'

import { LINKS } from '../lib/constants'

const Contacto = () => {
  const links = [
    {
      href: LINKS.addresses.maps.google,
      text: LINKS.addresses.main,
      icon: Location
    },
    {
      href: `mailto:${LINKS.mail.contact}`,
      text: LINKS.mail.contact,
      icon: Mail
    },
    {
      href: LINKS.phone.share,
      text: LINKS.phone.main,
      icon: Phone
    }
  ]

  return (
    <>
      <Head>
        <BaseHead description="" permalink="" title="" />
      </Head>
      <Header
        cover="/assets/contact/cover.jpg"
        coverPosition="bg-center"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, omnis iusto cupiditate vitae voluptas repudiandae minus laudantium corrupti eius blanditiis."
        title="Contáctanos"
      />
      <main className="grid grid-cols-1 grid-rows-2 mb-8 lg:grid-rows-1 lg:grid-cols-2 wrapper">
        <Form title="¿Que estas esperando para hecer tu voz oir?" />
        <a
          href={LINKS.addresses.maps.google}
          className="w-full h-full relative before:absolute before:inset-0 before:-z-[1] before:transition-transform hover:before:scale-105 before:bg-[url('/assets/contact/map.png')] py-12 px-8 flex items-end overflow-hidden before:bg-no-repeat before:bg-cover before:bg-center rounded-lg lg:rounded-tr-none lg:rounded-tl-none"
        >
          <div className="flex flex-col gap-y-4 text-brilliance">
            <h3 className="text-2xl">Visítanos:</h3>
            {links.map(({ href, icon, text }) => {
              const Icon = icon
              return (
                <Button
                  type="a"
                  props={{
                    href,
                    className: 'btn p-0 justify-start links',
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  }}
                >
                  <Icon />
                  {text}
                </Button>
              )
            })}
          </div>
        </a>
      </main>
      <Footer />
    </>
  )
}

export default Contacto
