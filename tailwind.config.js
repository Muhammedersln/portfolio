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
        primary: "#E2E8F0",
        secondary: "#60A5FA",
        third: "#94A3B8",
        bodyColor: "#0F172A",
        light: "#F1F5F9",
        dark: "#1E293B",
        dark2: "#1E293B"
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
      boxShadow : {
        navbarShadow :"0 10px 30px -10px rgba(2,12,27,0.7)",
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
