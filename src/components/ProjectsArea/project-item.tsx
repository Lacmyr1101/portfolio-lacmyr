import { useLayoutEffect, useRef, useState } from "react";
import type { Project } from "../../models/project";
import TechIcon from "../TechIcons/tech-icons";

const ProjectItem = ({
  project,
  onOpen,
}: {
  project: Project;
  onOpen?: () => void;
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLButtonElement>(null);
  const [titleWraps, setTitleWraps] = useState(false);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const card = cardRef.current;
    if (!title || !card) return;

    const updateTitleWrap = () => {
      const originalWidth = title.style.width;
      title.style.width = `${card.clientWidth - 48}px`;

      const styles = window.getComputedStyle(title);
      const lineHeight = Number.parseFloat(styles.lineHeight);
      const fontSize = Number.parseFloat(styles.fontSize);
      const effectiveLineHeight = Number.isNaN(lineHeight)
        ? fontSize * 1.2
        : lineHeight;
      const wraps = title.getBoundingClientRect().height > effectiveLineHeight * 1.5;

      title.style.width = originalWidth;
      setTitleWraps(wraps);
    };

    updateTitleWrap();
    const observer = new ResizeObserver(updateTitleWrap);
    observer.observe(card);

    return () => observer.disconnect();
  }, [project.title]);

  return (
    <button
      type="button"
      ref={cardRef}
      className="relative h-96 w-full overflow-hidden transition-[transform,border-color] duration-300 hover:scale-105 cursor-pointer border border-gray-300 rounded-2xl bg-gray-900/20 backdrop-blur-sm text-left hover:border-gray-200"
      onClick={() => onOpen?.()}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="size-full object-cover object-center"
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(to_right,rgba(0,0,0,1),rgba(255,255,255,1),rgba(0,0,0,1))]" />
      </div>

      <div className={titleWraps ? "p-3" : "p-6"}>
        <h3 ref={titleRef} className="text-white font-bold mb-4 text-xl text-center">
          {project.title}
        </h3>
        <div
          className="tech-list flex justify-center flex-wrap gap-2"
          aria-hidden={false}
        >
          {project.technologies.map((t) => (
            <TechIcon key={t} tech={t} size={25} />
          ))}
        </div>
        <p className="description text-gray-400 mt-4">
          {project.description}
        </p>
      </div>

      <div className="absolute inset-0 bg-cyan-900 bg-opacity-30 flex flex-col justify-center items-center opacity-0 hover:opacity-100 backdrop-blur-md transition-opacity duration-300">
        <span className="text-white text-3xl font-semibold">More info</span>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_rgba(200,200,200,0.5)] hover:shadow-[inset_0_0_30px_rgba(243, 243, 243, 0.5)]  transition-shadow duration-300" />
    </button>
  );
};

export default ProjectItem;
