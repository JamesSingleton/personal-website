import Project from "./Project";
import projectsData from "@/data/projects.json";

const Projects = () => (
  <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
    {projectsData.map((project) => (
      <Project
        url={project.url}
        title={project.title}
        description={project.description}
        key={project.title}
      />
    ))}
  </div>
);

export default Projects;
