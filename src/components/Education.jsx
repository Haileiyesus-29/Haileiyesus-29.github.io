import { FaGraduationCap } from 'react-icons/fa'

function Education() {
   return (
      <div className='flex flex-col gap-2'>
         <h3 className='font-semibold text-primary text-xl'>Education</h3>{' '}
         <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
               {/* <span className='text-2xl'></span> */}
               <span className='min-w-36 text-gray-800'>
                  <FaGraduationCap /> BSc in Software Engineering
               </span>
            </div>
            <h4 className='text-gray-800 underline'>
               Addis Ababa Science and Technology University (AASTU)
            </h4>
            <time className='text-gray-800'>2023 - Present</time>
            <p className='leading-normal paragraph'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
               rerum, quam consequatur numquam, debitis deserunt consectetur
               eligendi quasi cum earum assumenda laudantium? Esse perferendis
               pariatur molestias ipsam asperiores facere eligendi.
            </p>
         </div>
      </div>
   )
}
export default Education
