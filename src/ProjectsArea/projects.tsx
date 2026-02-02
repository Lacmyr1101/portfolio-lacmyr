import { useState } from "react";
import type { Project } from "../models/project";
import ProjectItem from "./project-item";
import ProjectWindow from "./project-window";

interface Props {
  project: Project[];
}

const ProjectsGrid = ({ project }: Props) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="page-container projects-area">
      <h1 className="title">My Projects</h1>
      <div className="page-content">
        <div className="grid-container projects-panel">
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
    </div>
  );
};

export default ProjectsGrid;
