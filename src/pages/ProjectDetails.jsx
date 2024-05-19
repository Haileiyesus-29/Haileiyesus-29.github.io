import { Link, useParams } from 'react-router-dom'
import { projectList } from '../DATA'

function ProjectDetails() {
   const { projectId } = useParams()

   const project = projectList[projectId]

   return (
      <div className='relative mx-auto py-4 max-w-[1400px] h-svh overflow-hidden overflow-y-auto'>
         <section
            id='projects'
            className='flex flex-col justify-center px-2 pt-2 pb-10 min-h-full'
         >
            <div className='px-3 py-4'>
               <Link to='/' className='hover:text-primary underline'>
                  &larr; Home
               </Link>
            </div>
            {project.image && (
               <div className='mx-auto max-w-5xl'>
                  <img
                     src={project.image}
                     alt='project image'
                     className='mx-auto'
                  />
               </div>
            )}
            <h2 className='auto-rows-min py-8 text-center section-title'>
               {project.title}
            </h2>
            <p className='text-center text-gray-700 dark:text-gray-200/80'>
               {project.desc}
            </p>
            <div className='flex justify-center gap-2 py-4'>
               {project.live && (
                  <a
                     href={project.live}
                     target='_blank'
                     rel='noreferrer'
                     className='bg-primary hover:bg-primary-dark px-4 py-2 rounded-md text-gray-50'
                  >
                     Live Demo
                  </a>
               )}
               {!!project.code && (
                  <a
                     href={project.code}
                     target='_blank'
                     rel='noreferrer'
                     className='bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-gray-50'
                  >
                     Source Code
                  </a>
               )}
            </div>
         </section>
      </div>
   )
}
export default ProjectDetails
