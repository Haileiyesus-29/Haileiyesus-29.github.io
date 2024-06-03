import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import Button from '../ui/Button'
import { useNavigate } from 'react-router-dom'

function About() {
   const navigate = useNavigate()

   return (
      <section
         id='about'
         className='flex flex-col gap-2 md:gap-4 justify-center px-2 pt-2 pb-10 overflow-y-auto  min-h-full'
      >
         <h2 className='py-3 section-title  '>#About Me</h2>
         <div className='flex gap-4 flex-col md:flex-row'>
            <div className='basis-1/3 illustration hidden md:block'>
               <img src='.coder.svg' alt='coder illustration' className='' />
            </div>
            <div className='flex flex-col basis-2/3 '>
               <div className='flex flex-col justify-center gap-2 '>
                  <h3 className='font-semibold text-primary  text-lg'>
                     Who is Haileiyesus?
                  </h3>
                  <p className='paragraph '>
                     Hi, I'm Haileiyesus, a passionate full stack web developer
                     & Software Engineering student at Addis Ababa Science and
                     Technology University. With a knack for crafting dynamic
                     and responsive web applications, I work extensively with
                     JavaScript, Typescript, Node.js, Next.js and React. I'm on
                     the lookout for new opportunities, whether it's a full-time
                     position or a freelancing gig. In my free time, you can
                     find me watching football or getting lost in a good movie.
                     Let's build something amazing together!
                  </p>
               </div>
               <ul className='p-2 md:p-4 inline-flex flex-col md:items-start gap-3 md:gap-1 max-w-3xl'>
                  <li className='flex md:flex-row flex-col md:gap-2 md:text-lg dark:text-gray-100 '>
                     <span className='min-w-32 flex gap-2 items-center'>
                        <span className='text-lg md:text-2xl'>
                           <MdMail />
                        </span>
                        <span>Email</span>
                     </span>
                     <a
                        className='font-mono underline hover:text-primary dark:text-gray-100/90 pl-7'
                        href='mailto:haileiyesus29@gmail.com'
                     >
                        Haileiyesus29@gmail.com
                     </a>
                  </li>

                  <li className='flex md:flex-row flex-col md:gap-2 md:text-lg dark:text-gray-100 '>
                     <span className='min-w-32 flex gap-2 items-center'>
                        <span className='text-lg md:text-2xl'>
                           <FaGithub />
                        </span>
                        <span>Github</span>
                     </span>
                     <a
                        className='font-mono underline hover:text-primary dark:text-gray-100/90 pl-7'
                        href='https://github.com/haileiyesus-29'
                        target='_blank'
                     >
                        github.com/haileiyesus-29
                     </a>
                  </li>

                  <li className='flex md:flex-row flex-col md:gap-2 md:text-lg dark:text-gray-100 '>
                     <span className='min-w-32 flex gap-2 items-center'>
                        <span className='text-lg md:text-2xl'>
                           <FaLinkedin />
                        </span>
                        <span>LinkedIn</span>
                     </span>
                     <a
                        className='font-mono underline hover:text-primary dark:text-gray-100/90 pl-7'
                        href='https://linked.in/haileiyesus29'
                        target='_blank'
                     >
                        linked.in/haileiyesus29
                     </a>
                  </li>

                  <li className='flex md:flex-row flex-col md:gap-2 md:text-lg dark:text-gray-100 '>
                     <span className='min-w-32 flex gap-2 items-center'>
                        <span className='text-lg md:text-2xl'>
                           <FaTelegram />
                        </span>
                        <span>Telegram</span>
                     </span>

                     <a
                        className='font-mono underline hover:text-primary dark:text-gray-100/90 pl-7'
                        href='http://t.me/hal29'
                        target='_blank'
                     >
                        t.me/hal29
                     </a>
                  </li>

                  <li className='flex md:flex-row flex-col md:gap-2 md:text-lg dark:text-gray-100 '>
                     <span className='min-w-32 flex gap-2 items-center'>
                        <span className='text-lg md:text-2xl'>
                           <FaLocationPin />
                        </span>
                        <span>Address</span>
                     </span>
                     <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.05952778003!2d38.69574377936671!3d8.963337303448139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1710880020421!5m2!1sen!2set'
                        className='border-none'
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                     ></iframe>
                  </li>
               </ul>
               <div className='p-2 '>
                  <Button
                     size='lg'
                     label={'Contact Me.'}
                     onClick={() => navigate('/contact')}
                  />
               </div>
            </div>
         </div>
      </section>
   )
}
export default About
