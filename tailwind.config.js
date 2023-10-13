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
        primary: "#BCA37F",
        secondary: "#EAD7BB",
        third:"#FFF2D8",
        bodyColor: "#113946",
        
      },
      maxWidth:{
        container: "1440px",
        contentContainer : "1140px",
        containerSmall : "1024px",
        containerxs : "768px"
      },
      screens:{


      },
      boxShadow : {
        navbarShadow :"0 10px 30px -10px rgba(2,12,27,0.7)",
      }
    },
  },
  plugins: [],
}
