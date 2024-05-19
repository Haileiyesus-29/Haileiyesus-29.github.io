/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function Project({ project, link }) {
   return (
      <div className='relative flex bg-white dark:bg-gray-950/30 p-4 pb-12 min-h-64 project'>
         <div className='flex flex-col gap-1rem'>
            <h3 className='py-3 font-semibold text-center text-gray-800 text-xl dark:text-gray-50/80'>
               {project.title}
            </h3>
            <p className='text-center text-gray-800/80 dark:text-gray-200/80'>
               {project.about}
            </p>
            <div className='flex justify-end gap-2 mt-auto text-sm'>
               {(project.tags || []).map(tag => {
                  return (
                     <div
                        key={project.title + Math.random()}
                        className='inline-block border-1px border-primary-1 bg-opacity-89 w-7 h-7 text-2xl dark:text-gray-50 overflow-hidden'
                     >
                        {tag}
                     </div>
                  )
               })}
            </div>
         </div>
         <Link
            to={`/project/${link}`}
            className='bottom-2 left-6 absolute font-mono hover:text-primary dark:text-gray-50/70 hover:underline hover:translate-x-2'
         >
            Details &rarr;
         </Link>
      </div>
   )
}

export default Project
