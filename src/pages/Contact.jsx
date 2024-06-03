import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactSchema = z.object({
   name: z.string().max(32).optional(),
   email: z.string().email(),
   title: z.string().max(64).optional(),
   message: z
      .string()
      .min(10, 'Message must be atleast 10 characters')
      .max(2000),
})

function Contact() {
   const [success, setSuccess] = useState(false)
   const form = useForm({
      resolver: zodResolver(contactSchema),
   })

   const onSubmit = form.handleSubmit(async data => {
      const res = await fetch(
         'https://haileiyesus-server-b579e5370e03.herokuapp.com/api/inbox',
         {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
         }
      )
      if (res.ok) {
         form.reset()
         const timer = setTimeout(() => {
            setSuccess(false)
         }, 3000)
         setSuccess(true)
         return () => clearTimeout(timer)
      }
   })

   return (
      <section
         id='contact'
         className='flex flex-col justify-center px-2 pt-2 pb-10 min-h-full'
      >
         {success && (
            <div className='right-6 bottom-6 z-50 fixed bg-green-500 shadow-lg px-6 py-2 rounded-sm font-semibold'>
               Message sent successfully!
            </div>
         )}

         <div className='flex flex-col gap-4 bg-white dark:bg-gray-700/40 p-4 md:p-10'>
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
               <form
                  onSubmit={onSubmit}
                  className='flex flex-col gap-4 border-2 dark:border-gray-400/40 shadow-sm px-4 py-6 grow'
               >
                  <div className='flex flex-col justify-between gap-1'>
                     <label htmlFor='name'>Name</label>
                     <input
                        type='text'
                        id='name'
                        {...form.register('name')}
                        className='input'
                        placeholder='e.g, John Doe'
                     />
                  </div>
                  <div className='flex flex-col justify-between gap-1'>
                     <label htmlFor='email'>Email</label>
                     <input
                        type='email'
                        id='email'
                        {...form.register('email')}
                        className='input'
                        placeholder='e.g, johndoe@example.com'
                     />
                     {form.formState.errors.email && (
                        <span className='text-red-500 text-sm'>
                           {form.formState.errors.email.message}
                        </span>
                     )}
                  </div>
                  <div className='flex flex-col justify-between gap-1'>
                     <label htmlFor='title'>Title</label>
                     <input
                        type='text'
                        id='title'
                        {...form.register('title')}
                        className='input'
                        placeholder='e.g, John Doe'
                     />
                  </div>
                  <div className='flex flex-col justify-between gap-1'>
                     <label htmlFor='message'>Message</label>
                     <textarea
                        name='message'
                        id='message'
                        {...form.register('message')}
                        className='w-full h-36 input resize-none'
                        placeholder='Your message here.'
                     />
                     {form.formState.errors.message && (
                        <span className='text-red-500 text-sm'>
                           {form.formState.errors.message.message}
                        </span>
                     )}
                  </div>
                  <button
                     type='submit'
                     className='bg-gray-900 hover:bg-gray-900/80 dark:hover:bg-gray-100/80 dark:bg-gray-100 py-2 rounded-sm text-white dark:text-gray-900 transition'
                  >
                     {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
               </form>
            </div>
         </div>
      </section>
   )
}
export default Contact
