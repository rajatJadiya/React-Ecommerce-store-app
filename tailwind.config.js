/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins' : ['Poppins', 'sans-serif'],
        'josefinSans': ['Josefin Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'robotoMono': ['Roboto Mono', 'monospace']
      },
      colors:{
        'shopBlue': '#2dbef3',
        'shopDarkBlue': '#2563eb',
        'shopRed': '#ef4444'
      },    
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}