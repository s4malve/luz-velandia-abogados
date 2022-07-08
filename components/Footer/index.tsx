import Links from './Links'
import Logo from '../Logo'
import SocialLinks from '../SocialLinks'

import links from '../../data/links.json'

const Footer = () => {
  const family = links.find(({ name }) => name === 'family')
  const areas = links.find(({ name }) => name === 'areas')

  return (
    <footer className="rounded-tl-lg rounded-tr-lg content-container bg-pucker-up text-brilliance/75">
      <div className="grid wrapper gap-y-16">
        <section className="flex flex-col items-start justify-between md:flex-row gap-y-12">
          <div className="grid gap-y-4 md:max-w-xs">
            <a href="/">
              <Logo />
            </a>
            <p className="text-sm text-brilliance/75">
              Creemos que un proceso no es una lucha entre partes, sino, un
              camino a la conciliación.
            </p>
            <SocialLinks linksColor="btn-outline-dark" />
          </div>
          <div className="flex items-start gap-x-8">
            {family && (
              <Links
                href={family.href}
                title={family.title}
                links={family.links}
              />
            )}
            {areas &&
              areas.links.map(({ href, title, links }, i) => (
                <Links key={i} href={href} title={title} links={links} />
              ))}
          </div>
        </section>
        <section className="flex flex-col items-center justify-between sm:flex-row gap-y-4">
          <div className="flex items-center justify-between w-full gap-x-4 sm:w-auto sm:justify-start">
            <a href="#" className="links-semi">
              Terminos
            </a>
            <a href="#" className="links-semi">
              Política de Privacidad
            </a>
          </div>
          <span>© 2022 Luz Velandia Abogados</span>
        </section>
      </div>
    </footer>
  )
}

export default Footer
