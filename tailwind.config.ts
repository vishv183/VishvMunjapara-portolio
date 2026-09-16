import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '22': '5.5rem',
      },
      width: {
        '12/12': '100%',
        '11/12': '91.666667%',
        '10/12': '83.333333%',
        '9/12': '75%',
      },
    },
  },
  plugins: [],
};

export default config;
