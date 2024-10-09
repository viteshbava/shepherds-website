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
        primary_green_light: '#367780',
        red_important: '#B81F1F',
        red_bright: '#DE5F5F',
      },
    },
  },
  plugins: [],
};
export default config;
