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
        <h4 className="subtitle">Technologies:</h4>
        <div className="tech-list" aria-hidden={false}>
          {project.technologies.map((t) => (
            <span key={t} className="tech-item" title={t} style={{marginRight:8, display:'inline-flex', alignItems:'center'}}>
              <TechIcon tech={t} size={18} />
              <span style={{fontSize:12, color:'#666', marginLeft:4}}>{t}</span>
            </span>
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
