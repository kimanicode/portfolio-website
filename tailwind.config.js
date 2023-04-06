/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'alabaster': '#ECEBE4',
        'marian':'#324376' ,
        'xan':'#F3B61F',
      }
    },
  },
  plugins: [],
}

