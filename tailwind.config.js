/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  publicRuntimeConfig:{
    static:"/data"
  },
  theme: {
    extend: {
      fontFamily:{
        inter:[ 'Inter', 'sans-serif']
      },
      colors:{
        "primary-orange":"#ff5722"
      }
    },
  },
  plugins: [require("daisyui")],
}
