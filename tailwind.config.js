/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
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
         backgroundSize: {
            repeated: '22px 22px',
         },
         backgroundImage: {
            lightPattern: 'radial-gradient(#a2a2a2 1.1px, #f3f4f6 1.1px)',
            darkPattern:
               'radial-gradient(#3b3b3b 1.1px, transparent 1.1px), radial-gradient(#3b3b3b 1.1px, #121224 1.1px)',
         },
      },
   },
   plugins: [],
}
