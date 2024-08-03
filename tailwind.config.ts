import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        custom1: '#2B1B12',
        custom2: '#DDC7BB',
        custom3: '#4F3527',
        custom4: '#695346',
        custom5: '#FFC71E',
        custom6: '#FBF5F1',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        font1: 'Montserrat',
      },
      height: {
        home: '500px'
      },
      fontSize: {
        prgh: '18px',
        stat: '48px'
      }
    },
  },
  plugins: [],
};
export default config;
