import { FaDatabase, FaGit, FaGithub, FaNode, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiSass, SiSocketdotio } from 'react-icons/si'

export const projectList = {
   'forkify-app': {
      image: 'forkify.png',
      title: 'Forkify App',
      about: 'Forkify is a recipe search app where you can search for any recipe and get the ingredients and instructions on how to prepare it',
      desc: 'This app is build with html, a css pre-processor SCSS and vanilla JavaScript. I used a forkify-api api to fech data and render accordingly onto the screen. I built the app with a very simple MVC architecture to differentiate parts of the app. I used a hash link to navigate through the app.',
      live: 'https://forkify-haileiyesus.netlify.app',
      code: 'https://github.com/Haileiyesus-29/Forkify',
      tags: [
         <IoLogoJavascript key={Math.random()} />,
         <FaGithub key={Math.random()} />,
         <SiSass key={Math.random()} />,
      ],
   },
   'gebeya-ecommerce': {
      image: 'emarket.png',
      title: 'Gebeya Ecommerce',
      about: 'Gebeya Ecommerce is an online shooping web app to find and buy products with authentication and authorization',
      desc: "The web is build with react on the frontend, express for backend and mongodb to store application and user data. I've used serveral dependencies both for react app and the backend. on the frontend Redux toolkit is used for managing application state with redux thunk to interact with the server. tailwinds css with daisy ui for the styling. on the backend I've used mongoose to interact with the database, jsonwebtoken as an http only cookie for authentication and authorization, bcrypt for hashing passwords and stripe to process payments.",
      live: 'https://emarket-8vzx.onrender.com/',
      code: 'https://github.com/Haileiyesus-29/GebeyaWebApp',
      tags: [
         <FaNode key={Math.random()} />,
         <FaReact key={Math.random()} />,
         <FaDatabase key={Math.random()} />,
         <FaGithub key={Math.random()} />,
      ],
   },
   'chat-app': {
      image: 'chatapp.png',
      title: 'Chat App',
      about: 'ChatApp is an online realtime chat application that allows sending direct messages and group chats with authentication and authorization',
      desc: 'The web app is build with reactjs as a frontend and expressjs nodejs typescript as a backend with prisma postgres orm. I used several libraries on my app such as, zustand for state management, tailwind css to style elements and react hook form for with zod for form handling. on backend I used prisma for database interaction, socket-io for realtime data communication, jsonwebtoken with http only cookies and serveral other libraries',
      live: 'https://chatapp-jchs.onrender.com/',
      code: 'https://github.com/Haileiyesus-29/chatapp',
      tags: [
         <SiSocketdotio key={Math.random()} />,
         <FaNode key={Math.random()} />,
         <FaReact key={Math.random()} />,
         <FaDatabase key={Math.random()} />,
         <FaGithub key={Math.random()} />,
      ],
   },
   'tena-app': {
      image: null,
      title: 'Tena Web App',
      about: 'Tena web app is online hospital appointment web app that allows to make appointment with registered hospitals and also chat with doctors',
      desc: "In this app we've used react for fronend and express api for backend and mongoose for database as object data mapper. I used redux for managing state on the fronted and daisy ui with tailwind css for styling pages. on the backend I used json web token for authentication and authorization, multer to manage file uploads and several other libraries.",
      live: null,
      code: 'https://github.com/Haileiyesus-29/Tena/tree/backend-hl2',
      tags: [
         <FaNode key={Math.random()} />,
         <FaReact key={Math.random()} />,
         <FaDatabase key={Math.random()} />,
         <FaGithub key={Math.random()} />,
      ],
   },
}
