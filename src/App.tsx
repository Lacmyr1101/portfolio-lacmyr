import "./App.css";
import "./App.css";
import PresentationArea from "./PresentationArea/presentation";
import ProjectsGrid from "./ProjectsArea/projects";
import { projectsList } from "./data/projects";

function App() {
  return (
    <>
      <PresentationArea />
      <ProjectsGrid project={projectsList} />
    </>
  );
}

export default App;
