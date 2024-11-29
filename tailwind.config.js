const { label } = require('framer-motion/client');
const { blob } = require('stream/consumers');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      animation: {
        blob: "blob 12s infinite",
      },

      keyframes:{
        blob: {
          "0%" : {transform: "scale(1)"},
          "20%": {transform: "scale(1.1)"},
          "40%": {transform: "scale(1.2)"},
          "60%": {transform: "scale(1.1)"},
          "80%": {transform: "scale(0.9)"},
          "100%": {transform: "scale(1)"}
        },

      },

      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #f7fbfb, #324e64)',
      },
      colors: {
        background: "var(--color-background)",
        primary: "var(--color-primary)",

        lb: "var(  --color-background-light)",
        li: "var(--color-impact-light)",
        li300: "var(--color-impact-light-300)",
        lt: "var(--color-text-light)",


        impact: "var(--color-impact)",
        linear: "var(--color-linear)",
        impactOpa90: "var(--color-impact-opa90)",
        impactOpa50: "var(--color-impact-opa50)",
        impactOpa10: "var(--color-impact-opa10)",
        impact300: "var(--color-impact-300)",
        impact700: "var(--color-impact-700)",
        impact900: "var(--color-impact-900)",

        
      },
    },
  },
  plugins: [],
};
