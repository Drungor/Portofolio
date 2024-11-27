const { label } = require('framer-motion/client');

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
