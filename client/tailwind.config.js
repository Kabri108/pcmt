/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform',
      },
      colors:{
        main:'#080A1A',
        subMain:'#ff1414',
      }
    },
  },
  variants: {
    extend: {
      translate: ['responsive', 'hover', 'focus'],
    }
  },
  plugins: [],
}