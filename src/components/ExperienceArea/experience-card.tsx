import type { CSSProperties } from "react";
import type { Experience } from "../../models/experience";

interface Props {
  experience: Experience;
  highlighted?: boolean;
}

type ExperienceCardStyle = CSSProperties & {
  "--experience-color": string;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(date: Date) {
  return dateFormatter.format(date);
}

function ExperienceCard({ experience, highlighted = false }: Props) {
  const cardStyle: ExperienceCardStyle = {
    "--experience-color": experience.color,
  };

  return (
    <article
      className={`experience-card${highlighted ? " experience-card--highlight" : ""}`}
      style={cardStyle}
    >
      <h3 className="experience-card__company">{experience.company}</h3>
      <p className="experience-card__position">{experience.position}</p>
      <span className="experience-card__period">
        {formatDate(experience.startDate)} — {formatDate(experience.endDate)}
      </span>
      <ul className="experience-card__description">
        {experience.description.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      
    </article>
  );
}

export default ExperienceCard;
