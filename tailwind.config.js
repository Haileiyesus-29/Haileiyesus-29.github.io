/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{html,js}'],
   theme: {
      extend: {
         colors: {
            primary: '#7F27FF',
            mate: '#121224',
         },
         fontFamily: {
            body: ['Geist', 'GeistMono'],
         },
      },
   },
   plugins: [],
}
