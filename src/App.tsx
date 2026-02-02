import "./App.css";
import "./App.css";
// import PresentationArea from "./PresentationArea/presentation";
import ProjectsGrid from "./ProjectsArea/projects";
// import StackArea from "./StackArea/stack-area";
import { projectsList } from "./data/projects";
// import { socialLinks } from "./data/social-info";

function App() {
  return (
    <>
      {/* <PresentationArea social={socialLinks} /> */}
      <ProjectsGrid project={projectsList} />
      {/* <StackArea /> */}
    </>
  );
}

export default App;
