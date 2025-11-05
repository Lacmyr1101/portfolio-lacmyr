import { useEffect } from "react";
import type { Project } from "../models/project";

type Props = {
    project: Project | null;
    onClose: () => void;
};

function ProjectWindow({ project, onClose }: Props) {
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    if (!project) return null;

    return (
        // backdrop
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            {/* modal content - stop propagation so clicks inside don't close */}
            <div
                className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
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
                            <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((t) => (
                                    <span
                                        key={t}
                                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm"
                                    >
                                        {t}
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