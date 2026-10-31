import { useRef } from "react";
import type { PointerEvent } from "react";
import type { Experience } from "../../models/experience";
import ExperienceCard from "./experience-card";
import "./experience-area.css";

interface Props {
  experiences: Experience[];
}

function ExperienceArea({ experiences }: Props) {
  const cardsRef = useRef<HTMLDivElement>(null);
  const highlightedCardsRef = useRef(new Map<number, HTMLElement>());
  const reversedExperiences = experiences.slice().reverse();

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const cards = cardsRef.current;
    if (!cards) return;

    const bounds = cards.getBoundingClientRect();
    cards.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
    cards.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    cards.style.setProperty("--spotlight-opacity", "1");
  };

  const handlePointerLeave = () => {
    cardsRef.current?.style.setProperty("--spotlight-opacity", "0");
  };

  return (
    <section className="experience-area">
      <h2 className="text-7xl font-bold">Professional Experience</h2>
      <div
        className="experience-cards mt-4"
        ref={cardsRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div className="experience-cards__inner">
          {reversedExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onScroll={(scrollTop) => {
                const highlightedCard = highlightedCardsRef.current.get(
                  experience.id,
                );
                if (highlightedCard) highlightedCard.scrollTop = scrollTop;
              }}
            />
          ))}
          
        </div>
        <div className="experience-cards__spotlight" aria-hidden="true">
          {reversedExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              highlighted
              scrollRef={(element) => {
                if (element) {
                  highlightedCardsRef.current.set(experience.id, element);
                } else {
                  highlightedCardsRef.current.delete(experience.id);
                }
              }}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
}

export default ExperienceArea;
