import { useEffect, useState } from "react";
import type { Project } from "../models/project";
import TechIcon from "./tech-icons";

type Props = {
    project: Project | null;
    onClose: () => void;
};

function ProjectWindow({ project, onClose }: Props) {
    const [visible, setVisible] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") handleClose();
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // when mounted with a project, trigger enter animation
        if (project) {
            // small next tick to allow mount then transition
            requestAnimationFrame(() => setVisible(true));
        } else {
            setVisible(false);
        }
    }, [project]);

    if (!project) return null;

    function handleClose() {
        // trigger exit animation then call parent's onClose
        setClosing(true);
        setVisible(false);
        setTimeout(() => {
            setClosing(false);
            onClose();
        }, 220); // match duration of transition
    }

    return (
        // backdrop
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
            aria-hidden={closing}
        >
            {/* modal content - stop propagation so clicks inside don't close */}
                    <div
                        className={`bg-white text-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto relative transform transition-all duration-200 ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-window-title"
            >
                <button
                    onClick={handleClose}
                    aria-label="Cerrar ventana"
                    className="absolute top-3 right-3 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300"
                >
                    ×
                </button>

                <div className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/2 w-full">
                            <div className="img-container rounded-md overflow-hidden">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-64 md:h-auto object-cover"
                                />
                            </div>
                        </div>

                        <div className="md:w-1/2 w-full">
                              <h2 id="project-window-title" className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((t) => (
                                    <span key={t} className="inline-flex items-center px-2 py-1 rounded-md bg-gray-50">
                                        <TechIcon tech={t} size={18} />
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 mb-4">
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Visit
                                </a>
                            </div>

                              <p className="text-gray-700">{project.description}</p>
                              {/* Mostrar texto alternativo como caption si la imagen falla o para accesibilidad visual */}
                              <p className="text-sm text-gray-500 mt-2">{project.title}</p>
                        </div>
                    </div>

                    <div className="mt-6 description-section">
                        <h3 className="text-lg font-semibold mb-2">Description</h3>
                        <p className="description-text text-gray-600">{project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectWindow;