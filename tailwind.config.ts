import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(71deg, #080509, #19213C, #080509)',
        'gradient-card-after': ' linear-gradient(71deg, #0c0a0e, #7b8197, #0c0a0e)',
      },
      width: {
        '74': '74%',
        '63': '63%',
        '100px': '100px',
        '250px':'250px'
      },
      borderRadius:{
        "999px":'999px'
      },
      height: {
        '100px': '100px',
        '250px':'250px'
      },
      backgroundColor: {
        '19213C': '#19213C',
      },
    },
  },
  plugins: [],
}
export default config
