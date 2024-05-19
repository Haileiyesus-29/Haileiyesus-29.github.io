function Skills() {
   return (
      <section
         id='skills'
         className='flex flex-col justify-center gap-4 px-2 pt-2 pb-10 min-h-full overflow-y-auto'
      >
         <h2 className='grid col-span-full auto-rows-min section-title'>
            #Skills
         </h2>
         <p className='paragraph'>
            I wield a versatile tech arsenal, specializing in React, JavaScript,
            Node.js, and TypeScript. With a solid grasp of full-stack
            development, I seamlessly blend creativity with functionality to
            build sleek and efficient web solutions. My low-level understanding
            of backend development with Node.js adds depth to my technical
            prowess. Eager to tackle challenges and always up for learning
            something new in the ever-evolving tech landscape.
         </p>
         <div className='flex lg:flex-row flex-col gap-2 md:gap-6 p-2 lg:p-4'>
            <div className='gap-2 md:gap-3 lg:gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 basis-2/5'>
               <h3 className='col-span-full font-semibold text-center text-primary text-xl'>
                  Languages and Frameworks
               </h3>
               <span className='skill'>HTML & CSS</span>
               <span className='skill'>UI / UX</span>
               <span className='skill'>React.js</span>
               <span className='skill'>Next.js</span>
               <span className='skill'>Node.js</span>
               <span className='skill'>TypeScript</span>
            </div>
            <div className='flex flex-wrap justify-center items-start gap-2 md:gap-4 md:p-4 basis-3/5 self-start'>
               <p className='py-2 lg:py-4 font-semibold text-center text-primary text-xl basis-full'>
                  Tools and Technologies
               </p>
               <span className='tool'>tailwind-css</span>
               <span className='tool'>SCSS</span>
               <span className='tool'>Vscode</span>
               <span className='tool'>git & Github</span>
               <span className='tool'>Docker</span>
               <span className='tool'>npm</span>
               <span className='tool'>ChatGPT</span>
               <span className='tool'>Linux</span>
               <span className='tool'>Figma</span>
               <span className='tool'>Firebase</span>
               <span className='tool'>Supabase</span>
               <span className='tool'>MongoDB</span>
               <span className='tool'>Socket.io</span>
               <span className='tool'>Mocha</span>
               <span className='tool'>Chai</span>
               <span className='tool'>Supertest</span>
               <span className='tool'>Jest</span>
            </div>
         </div>
      </section>
   )
}
export default Skills
