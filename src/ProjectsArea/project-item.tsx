import type { Project } from "../models/project";
import TechIcon from "../tech-icons";

const ProjectItem = ({ project, onOpen }: { project: Project; onOpen?: () => void }) => {
  return (
    <div className="card cursor-pointer" onClick={() => onOpen?.() } role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') onOpen?.(); }}>
      <div className="card-image-container">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="card-content">
        <h3 className="title">{project.title}</h3>
        <div className="tech-list flex justify-center flex-wrap gap-2" aria-hidden={false}>
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
