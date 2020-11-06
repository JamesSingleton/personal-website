import Project from './Project'
import projectsData from '@/data/projects.json';

const Projects = () => (
  <div className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
      {projectsData.map(project => (
        <Project 
          url={project.url}
          title={project.title}
          description={project.description}
          key={project.title}
        />
      ))}
    </div>
  </div>
)

export default Projects