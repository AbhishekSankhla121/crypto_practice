
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
     screens:{
      'sm-small': '320px',
      'sm-medium': '375px',
      'sm-large': '425px',
      md: '768px',
      xl: '1024px',
      '2xl': '1440px',
      '4xl': '2560px',

     },
     fontFamily:{
      "lexend-deca":["'Lexend Deca'","sans-serif"],
      'hk-grotesk': ['"Hk Grotesk"', 'sans-serif'],
      'font-Awsome': ['"font Awsome"', 'sans-serif'],
      "roboto":['"roboto"'],
     }
    },
  },
  plugins: [],
};
export default config;
