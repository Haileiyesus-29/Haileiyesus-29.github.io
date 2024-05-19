import Socials from '../components/Socials'

function Hero() {
   return (
      <section className='flex lg:flex-row flex-col justify-center items-center gap-4 lg:gap-1 px-3 lg:px-4 pt-4 pb-10 min-h-full'>
         <div className='flex flex-col items-center lg:items-start gap-3 lg:gap-4 2xl:gap-6 basis-3/4'>
            <p className='text-3xl lg:text-4xl xl:text-5xl dark:text-gray-50'>
               Hi 👋, I&apos;m
            </p>
            <h1 className='font-black text-4xl text-center md:text-6xl lg:text-7xl lg:text-left xl:text-8xl dark:text-primary uppercase leading-tight hero-text'>
               Haileiyesus <br /> Mesafint
            </h1>
            <h3 className='font-black text-3xl text-center text-gray-700 md:text-4xl lg:text-left lg:text-5xl 2xl:text-7xl dark:text-gray-50 job-text'>
               A Fullstack Web Developer
            </h3>
            <q className='text-center text-gray-700 md:text-xl lg:text-left dark:text-gray-200/80 italic'>
               Crafting digital dreams into reality. Let's code the future
               together!
            </q>
            <Socials />
         </div>
         <div className='mx-auto max-w-80 basis-1/4 hero-image'>
            <img
               draggable='false'
               src='./src/assets/profile-2.png'
               alt='portrait'
               className='drop-shadow-2xl w-full h-full object-fill'
            />
         </div>
      </section>
   )
}
export default Hero
