import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        BBBBBB: '#BBBBBB',
        F2F2F2: '#F2F2F2',
        '171717': '#171717',
        ECECEC: '#ECECEC',
        '565656': '#565656',
        A0A0A0: '#A0A0A0',
        '707070': '#707070',
        D9D9D9: '#D9D9D9',
        '515151': '#515151',
        C1C1C1: '#C1C1C1',
      },

      fontFamily: {
        // 폰트패밀리
        roboto: ['var(--roboto)'],
        inter: ['var(--inter)'],
      },
      fontSize: {
        '10': [
          '1rem',
          {
            lineHeight: '1.498rem',
          },
        ],
        '11': [
          '1.1rem',
          {
            lineHeight: '1.498rem',
          },
        ],
        '12': [
          '1.2rem',
          {
            lineHeight: '1.6rem',
          },
        ],
        '14': [
          '1.4rem',
          {
            lineHeight: '1.907rem',
          },
        ],
        '15': [
          '1.5rem',
          {
            lineHeight: '2.43rem',
          },
        ],
        '16': [
          '1.6rem',
          {
            lineHeight: '2.179rem',
          },
        ],
        '18': [
          '1.8rem',
          {
            lineHeight: '2.178rem',
          },
        ],
        '21': [
          '2.1rem',
          {
            lineHeight: '2.724rem',
          },
        ],
      },
    },
  },
}
export default config
