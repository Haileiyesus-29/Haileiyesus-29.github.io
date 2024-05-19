import { FaGithub, FaTelegram, FaLinkedinIn } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

function Socials() {
   return (
      <ul className='bottom-4 flex gap-2'>
         <a href='mailto://haileiyesus29@gmail.com'>
            <li className='flex justify-center items-center border-2 border-gray-800/90 hover:border-primary dark:border-gray-50 rounded-full w-10 h-10 text-2xl text-gray-800/90 hover:text-primary dark:text-gray-50 cursor-pointer'>
               <IoIosMail />
            </li>
         </a>
         <a href='https://github.com/Haileiyesus-29' target='_blank'>
            <li className='flex justify-center items-center border-2 border-gray-800/90 hover:border-primary dark:border-gray-50 rounded-full w-10 h-10 text-2xl text-gray-800/90 hover:text-primary dark:text-gray-50 cursor-pointer'>
               <FaGithub />
            </li>
         </a>
         <a href='https://t.me/hal29' target='_blank'>
            <li className='flex justify-center items-center border-2 border-gray-800/90 hover:border-primary dark:border-gray-50 rounded-full w-10 h-10 text-2xl text-gray-800/90 hover:text-primary dark:text-gray-50 cursor-pointer'>
               <FaTelegram />
            </li>
         </a>
         <a href='https://linked.in/haileiyesus29' target='_blank'>
            <li className='flex justify-center items-center border-2 border-gray-800/90 hover:border-primary dark:border-gray-50 rounded-full w-10 h-10 text-2xl text-gray-800/90 hover:text-primary dark:text-gray-50 cursor-pointer'>
               <FaLinkedinIn />
            </li>
         </a>
      </ul>
   )
}
export default Socials
