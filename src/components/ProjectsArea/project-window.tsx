import { useEffect, useRef, useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import type { Project } from "../../models/project";
import TechIcon from "../TechIcons/tech-icons";

type Props = {
  project: Project | null;
  onClose: () => void;
};

function ProjectWindow({ project, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) {
      setVisible(false);
      return;
    }

    dialog.showModal();
    const animationFrame = requestAnimationFrame(() => setVisible(true));

    return () => {
      cancelAnimationFrame(animationFrame);
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      if (dialog.open) dialog.close();
    };
  }, [project]);

  if (!project) return null;

  function handleClose() {
    if (closeTimeoutRef.current !== null) return;

    setVisible(false);
    closeTimeoutRef.current = window.setTimeout(() => {
      closeTimeoutRef.current = null;
      dialogRef.current?.close();
      onClose();
    }, 220);
  }

  return (
    <dialog
      ref={dialogRef}
      className={`fixed inset-0 z-50 m-0 flex h-full w-full max-h-none max-w-none items-center justify-center border-0 bg-transparent p-4 text-left text-white opacity-0 transition-opacity duration-200 backdrop:bg-black/20 backdrop:backdrop-blur-sm backdrop:transition-opacity backdrop:duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onCancel={(event) => {
        event.preventDefault();
        handleClose();
      }}
      aria-labelledby="project-window-title"
    >
      <button
        type="button"
        aria-label="Cerrar detalles del proyecto"
        tabIndex={-1}
        onClick={handleClose}
        className="absolute inset-0 z-0 size-full cursor-default border-0 bg-transparent p-0"
      />
      <div
        className={`project-window-container relative z-10 border border-gray-400 rounded-2xl bg-gray-900/40 xl:scale-125 backdrop-blur-sm shadow-[inset_0_0_30px_rgba(200,200,200,0.5)] max-w-4xl w-full max-h-[90vh] overflow-auto transform transition-[opacity,transform] duration-200 ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95"
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar ventana"
          autoFocus
          className="absolute top-3 right-3 rounded-full size-8 flex items-center justify-center ring-1 ring-cyan-200 shadow-[0_0_50px_rgba(6,182,212,0.5)] hover:bg-cyan-100/20 hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.1)] transition-[background-color,transform,box-shadow] duration-300"
        >
          X
        </button>

        <div className="p-6">
          <div className="flex flex-col-reverse md:flex-row gap-6 mb-6">
            <div className="md:w-1/2 w-full">
              <div className="img-container h-auto md:h-60 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.5)] border border-cyan-200">
                {project.videoUrl ? (
                  <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    className="w-full h-64 md:h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                )}
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <h2
                id="project-window-title"
                className="text-2xl sm:text-3xl md:text-left md:text-4xl lg:text-5xl font-semibold text-gray-100"
              >
                {project.title}
              </h2>

              <div className='hidden md:flex md:flex-col md:gap-6 mt-6'>
                <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-mdtext-gray-100/50"
                  >
                    <TechIcon tech={t} size={40} />
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mb-4 justify-start">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-300 text-center rounded-full w-28 py-2 px-4 font-semibold text-blue-300 shadow-[0_0_100px_rgba(6,182,212,0.5)] hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_400px_rgba(6,182,212,1)] transition-[color,border-color,box-shadow] duration-300"
                >
                  Visit
                  <FaGlobe aria-hidden="true" />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-300 text-center rounded-full w-28 py-2 px-4 font-semibold text-blue-300 shadow-[0_0_100px_rgba(6,182,212,0.5)] hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_400px_rgba(6,182,212,1)] transition-[color,border-color,box-shadow] duration-300"
                >
                  GitHub
                  <FaGithub aria-hidden="true" />
                </a>
              </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mb-4 justify-center md:hidden">
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-blue-300 rounded-full w-28 py-2 px-4 font-semibold text-blue-300 shadow-[0_0_100px_rgba(6,182,212,0.5)] hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_400px_rgba(6,182,212,1)] transition-[color,border-color,box-shadow] duration-300"
            >
              Visit
              <FaGlobe aria-hidden="true" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-blue-300 rounded-full w-28 py-2 px-4 font-semibold text-blue-300 shadow-[0_0_100px_rgba(6,182,212,0.5)] hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_400px_rgba(6,182,212,1)] transition-[color,border-color,box-shadow] duration-300"
            >
              GitHub
              <FaGithub aria-hidden="true" />
            </a>
          </div>

          <div className="mt-6 description-section">
            <p className="description-text px-4 text-center text-gray-400">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default ProjectWindow;
