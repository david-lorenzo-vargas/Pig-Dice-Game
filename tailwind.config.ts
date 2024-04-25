import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#0000e1',
        acceptGreen: '#2cb519',
        lightGray: '#d9d9d9',
        cancelRed: '#FF5733',
        white: '#FFF',
        veryDarkBlue: '#091a31',
      },
      spacing: {
        "25P": '25%',
        "50P": '50%',
        "85P": '85%',
        "5": '5px',
        "10": '10px',
        "20": '20px',
        "40": '40px',
        "100": '100px',
        "120": '120px',
        "300": '300px',
      },
    },
  },
  plugins: [],
};
export default config;
