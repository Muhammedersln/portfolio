/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      colors: {
        primary: "#0F172A",
        secondary: "#2563EB",
        third: "#475569",
        bodyColor: "#F8FAFC",
        light: "#FFFFFF",
        dark: "#E2E8F0",
        dark2: "#CBD5E1"
      },
      maxWidth:{
        container: "1440px",
        contentContainer : "1140px",
        containerSmall : "1024px",
        containerxs : "768px"
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px",
      },
      borderRadius: {
        'bento': '32px',
      },
      boxShadow : {
        bentoShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        navbarShadow :"0 10px 30px -10px rgba(0,0,0,0.1)",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
