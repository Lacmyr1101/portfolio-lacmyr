import type { Project } from "../models/project";

const ProjectItem = (project: Omit<Project, "id">) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="card-overlay">
            <span className="card-overlay-hover">Mas Informacion</span>
        </div>
      </div>

      <div className="card-content">
        <h3 className="title">{project.title}</h3>
        <h4 className="subtitle">
          Technologies: {project.technologies.join(", ")}
        </h4>
        <p className="description">{project.description}</p>
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
