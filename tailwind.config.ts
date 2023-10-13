import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        gray: '#666666',
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
