import { FaUser } from 'react-icons/fa'
import { FaHouse } from 'react-icons/fa6'
import { GiSkills } from 'react-icons/gi'
import { GrServices } from 'react-icons/gr'
import { IoCall } from 'react-icons/io5'
import { BsBricks } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

function NavBar() {
   const setClassName = ({ isActive }) => {
      return `px-2 font-mono flex  gap-1 items-end leading-none hover:text-primary capitalize transition-all  dark:text-gray-50 cursor-pointer ${
         isActive && 'text-primary font-semibold dark:text-primary'
      }`
   }

   return (
      <nav className='bottom-2 left-0 z-10 fixed flex justify-center w-full overflow-x-auto'>
         <section className='inline-flex relative justify-center items-center gap-1 shadow-2xl backdrop-blur-sm backdrop-brightness-75 px-4 py-2 rounded-full'>
            <NavLink to={'/'} className={setClassName}>
               <span className='text-xl'>
                  <FaHouse />
               </span>
               <span className='md:block hidden'>Home</span>
            </NavLink>
            <NavLink to={'/about'} className={setClassName}>
               <span className='text-xl'>
                  <FaUser />
               </span>
               <span className='md:block hidden'>About</span>
            </NavLink>
            <NavLink to={'/skills'} className={setClassName}>
               <span className='text-xl'>
                  <GiSkills />
               </span>
               <span className='md:block hidden'>Skills</span>
            </NavLink>
            <NavLink to={'/services'} className={setClassName}>
               <span className='text-xl'>
                  <GrServices />
               </span>
               <span className='md:block hidden'>Services</span>
            </NavLink>
            <NavLink to={'/projects'} className={setClassName}>
               <span className='text-xl'>
                  <BsBricks />
               </span>
               <span className='md:block hidden'>Projects</span>
            </NavLink>
            <NavLink to={'/contact'} className={setClassName}>
               <span className='text-xl'>
                  <IoCall />
               </span>
               <span className='md:block hidden'>Contact</span>
            </NavLink>
         </section>
      </nav>
   )
}
export default NavBar
