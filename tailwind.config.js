module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Montserrat', 'sans-serif']
      },
      colors: {
        'dark-72': 'rgba(21, 26, 44, 0.72)',
        'expressionism-green': '#53bf9d',
        'golden-promise': '#f6a504',
        'primary-75': '#861546c0',
        'primary-90': '#841545e6',
        'primary-95': '#841545f2',
        'pucker-up': '#201a1b',
        'spinel-red': '#ff4cbf',
        brilliance: '#fdfdfd',
        dark: '#151a2c',
        gmail: '#ea4335',
        primary: '#861546',
        whatsapp: '#25d366'
      },
      backgroundImage: {
        section:
          'linear-gradient( 104.16deg, #fafafa 2.62%, rgba(255, 255, 255, 0) 55.49%, #fafafa 87%)',
        'comments-mobile':
          'linear-gradient( 180deg, rgba(21, 26, 44, 0.65) 0%, rgba(21, 26, 44, 0) 84.18%)',
        'comments-desktop':
          'linear-gradient( 90deg, rgba(21, 26, 44, 0.65) 0%, rgba(21, 26, 44, 0) 84.18%)'
      },
      keyframes: {
        pulse: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.5 }
        },
        scrolldown: {
          '0%': {
            opacity: 0,
            height: '6px'
          },

          '40%': {
            opacity: 1,
            height: '10px'
          },

          '80%': {
            transform: 'translate(0, 20px)',
            height: '10px',
            opacity: 0
          },

          '100%': {
            height: '3px',
            opacity: 0
          }
        }
      },
    }
  },
  plugins: []
}
