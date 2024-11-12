/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "var(--color-primary-500)",
        impact: "var(--color-impact)",
        linear: "var(--color-linear)",
      },
    },
  },
  plugins: [],
};
