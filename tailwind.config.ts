import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        dark: {
          DEFAULT: '#333333',
          50: '#111111',
          100: '#171621',
        },
        white: '#fff',
        orange: '#FFA45B',
        green: '#006E7F',
      },
      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '18px',
          },
        ],
        sm: [
          '14px',
          {
            lineHeight: '22px',
          },
        ],
        base: [
          '16px',
          {
            lineHeight: '22px',
          },
        ],
        lg: [
          '18px',
          {
            lineHeight: '24px',
          },
        ],
        xl: [
          '28px',
          {
            lineHeight: '40px',
          },
        ],
      },
    },
  },
}
export default config
