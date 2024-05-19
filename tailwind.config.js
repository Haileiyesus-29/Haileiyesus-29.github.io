/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
   darkMode: 'selector',
   theme: {
      extend: {
         colors: {
            primary: '#7F27FF',
            mate: '#28282B',
         },
         fontFamily: {
            body: ['Geist', 'GeistMono'],
         },
      },
   },
   plugins: [],
}
