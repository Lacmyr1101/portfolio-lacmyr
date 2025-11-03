import type { Project } from "../models/project";
import TechIcon from "./tech-icons";

const ProjectItem = (project: Omit<Project, "id">) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="card-content">
        <h3 className="title">{project.title}</h3>
        <div className="tech-list flex justify-around align-middle" aria-hidden={false}>
          {project.technologies.map((t) => (
            <TechIcon key={t} tech={t} size={20} />
            
          ))}
        </div>
        <p className="description">{project.description}</p>
      </div>

      <div className="card-overlay">
        <span className="card-overlay-hover">Mas Informacion</span>
      </div>
    </div>
  );
};

export default ProjectItem;
