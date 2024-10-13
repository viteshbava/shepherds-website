import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        shepherds_black: '#130A0B',
        shepherds_white: '#E5FCFF',
        green_dim: '#367780',
        green_bright: '#6ADEEE',
        red_important: '#B81F1F',
        red_bright: '#DE5F5F',
        red_dim: '#803636',
      },
    },
  },
  plugins: [],
};
export default config;
