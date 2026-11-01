import { useState } from "react";
import type { Project } from "../../models/project";
import ProjectItem from "./project-item";
import ProjectWindow from "./project-window";

interface Props {
  project: Project[];
}

const ProjectsGrid = ({ project }: Props) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="projects-area w-5/6 m-auto min-h-screen md:h-screen md:w-11/12 lg:w-[93%] xl:w-[90%]">
      <h1 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl">My Projects</h1>
      <div className="page-content w-full border border-gray-400 rounded-2xl bg-gray-900/20 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(200,200,200,0.5)] md:h-5/6 md:overflow-y-scroll">
        <div className="projects-panel grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {project.map((proj) => (
            <ProjectItem
              key={proj.id}
              project={proj}
              onOpen={() => setSelectedProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectWindow
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsGrid;
