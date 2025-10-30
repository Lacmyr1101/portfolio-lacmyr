import { type Project } from "../models/project";
import ProjectItem from "./project-item";

interface Props {
  project: Project[];
}

const ProjectsGrid =  ({ project }: Props) => {
  return (
    <div className="page-container" >
      <div className="page-content">
        <h1 className="title">My Projects</h1>
        <div className="grid-container">
          {project.map((proj) => (
            <ProjectItem key={proj.id} {...proj}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsGrid;