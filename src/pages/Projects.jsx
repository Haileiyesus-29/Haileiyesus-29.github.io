import ProjectCard from '../ui/ProjectCard'
import { projectList } from '../DATA'

function Projects() {
   return (
      <section className='flex flex-col justify-center px-2 pt-2 pb-10 min-h-full overflow-y-auto'>
         <h2 className='auto-rows-min pb-8 section-title'>#Latest Projects</h2>
         <div className='gap-4 grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-[repeat(auto,20rem)]'>
            {Object.keys(projectList).map(project => {
               return (
                  <ProjectCard
                     project={projectList[project]}
                     key={project}
                     link={project}
                  />
               )
            })}
         </div>
      </section>
   )
}
export default Projects
