import Group from '../components/Icons/Group'

export const BASE_PAGE_TITLE =
  'Luz Velandia Abogados. Abogados en Derecho de Familia, Civil y Circuito en Colombia'

export const BASE_PAGE_COPY =
  'Luz Velandia Abogados. Escpecializados en derecho de familia en Colombia'

export const BASE_PAGE_URL = 'https://luzvelandiaabogados.com'

export const BASE_PAGE_IMAGE = '/favicon/apple-touch-icon.png'

export const LINKS = {
  addresses: {
    main: 'Cra 19 # 8 - 15',
    maps: { google: 'https://g.page/LuzVelandiaAbogados?share' }
  },
  facebook: {
    main: 'https://www.facebook.com/luzVelandiaAbogados/',
    share:
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fluzvelandiaabogados.com%2F'
  },
  twitter: {
    main: 'https://twitter.com/luzVelandiaAbogagos',
    share:
      'https://twitter.com/intent/tweet?text=Luz Velandia Abogados&url=https%3A%2F%2Fluzvelandiaabogados.com%2F'
  },
  mail: { contact: 'yovese@gmail.com' },
  phone: {
    main: '+57 320 378 9546',
    share: 'https://api.whatsapp.com/send?phone=573203789546'
  }
}

export const AUTHORS = {
  luzVelandia: {
    name: 'Luz Velandia Sepulveda',
    url: '/acerca-de',
    avatar: '/assets/authors/luz-velandia-sepulveda.jpg'
  }
}

export const sections = [
  {
    title: 'Familia',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ipsam natus aperiam,',
    tablet: Group,
    color: '#FFCB00',
    name: 'familia'
  },
  {
    title: 'Civil',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ipsam natus aperiam,',
    tablet: Group,
    color: '#53bf9d',
    name: 'civil'
  },
  {
    title: 'Circuito',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ipsam natus aperiam,',
    tablet: Group,
    color: '#ff4cbf',
    name: 'circuito'
  }
]
