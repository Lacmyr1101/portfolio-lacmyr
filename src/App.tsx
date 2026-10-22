import "./App.css";
import Background from "./components/background";
import PresentationArea from "./components/PresentationArea/presentation";
import { socialLinks } from "./data/social-info";
import ProjectsGrid from "./components/ProjectsArea/projects";
import { projectsList } from "./data/projects";
import StackArea from "./components/StackArea/stack-area";
import ExperienceArea from "./components/ExperienceArea/experience-area";
import { experienceList } from "./data/experience";

function App() {
  return (
    <>
      <Background />
      <PresentationArea social={socialLinks} />
      <ExperienceArea experiences={experienceList} />
      <ProjectsGrid project={projectsList} />
      <StackArea />
    </>
  );
}

export default App;
