import { technologiesStack } from "../../data/technologies-stack";
import TechIcon from "../TechIcons/tech-icons";


function StackGroup() {

  return (
    <div className="group">
      {technologiesStack.map((tech) => (
        <div
          key={tech.name}
          className="stack-icon"
          aria-label={tech.name}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          style={{ ['--tech-color' as any]: tech.color }}
        >
          <TechIcon tech={tech.name} size={120} />
          <span className="sr-only">{tech.name}</span>
        </div>
      ))}
    </div>
  );
}

export default StackGroup;
