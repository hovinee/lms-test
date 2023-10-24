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
      },

      fontFamily: {
        // 폰트패밀리
        roboto: ['var(--roboto)'], // 다음과 같이 배열 안에 string으로 작성합니다.
        inter: ['var(--inter)'], // 다음과 같이 배열 안에 string으로 작성합니다.
      },
      fontSize: {
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
