/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BgGray: '#f5f5f5',
        BgInput: '#EEEEEE',
        textInput: '#3D3D3D',
        textColor: '#8D8D99',
        textHover: '#202024'
      },

      fontFamily:{
        sans: ["Mulish", 'sans-serif']
      }
    },
  },
  plugins: [],
}
