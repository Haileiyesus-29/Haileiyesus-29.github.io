function Contact() {
   return (
      <section
         id='contact'
         className='flex flex-col justify-center px-2 pt-2 pb-10 min-h-full'
      >
         <div className='flex flex-col gap-4 bg-white dark:bg-gray-950/20 p-4 md:p-10'>
            <h2 className='font-semibold text-center text-xl md:text-3xl dark:text-gray-100'>
               Contact Me.
            </h2>

            <div className='flex sm:flex-row flex-col gap-4'>
               <div className='flex flex-col justify-center gap-4 basis-2/3'>
                  <h3 className='font-semibold text-lg text-primary'>
                     Have something in mind?
                  </h3>
                  <p className='paragraph'>
                     Seeking to collaborate on exciting projects? Contact me
                     exclusively for work inquiries using the form below or via
                     email. Let's discuss how we can create innovative solutions
                     together. Looking forward to discussing potential
                     opportunities!
                  </p>
               </div>
               <form className='flex flex-col gap-4 border-2 dark:border-gray-800 shadow-sm px-4 py-6 grow'>
                  <div className='flex flex-col justify-between gap-1'>
                     <label htmlFor='name'>Name</label>
                     <input
                        type='text'
                        id='name'
                        className='input'
                        placeholder='e.g, John Doe'
                     />
                  </div>
                  <div className='flex flex-col justify-between gap-1'>
                     <label htmlFor='email'>Email</label>
                     <input
                        type='email'
                        id='email'
                        className='input'
                        placeholder='e.g, johndoe@example.com'
                     />
                  </div>
                  <div className='flex flex-col justify-between gap-1'>
                     <label htmlFor='message'>Message</label>
                     <textarea
                        name='message'
                        id='message'
                        className='w-full h-36 input resize-none'
                        placeholder='Your message here.'
                     ></textarea>
                  </div>
                  <button
                     type='submit'
                     className='bg-gray-900 hover:bg-gray-900/80 dark:hover:bg-gray-100/80 dark:bg-gray-100 py-2 rounded-sm text-white dark:text-gray-900 transition'
                  >
                     Send
                  </button>
               </form>
            </div>
         </div>
      </section>
   )
}
export default Contact
