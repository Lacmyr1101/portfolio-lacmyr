import "./App.css";
import "./App.css";
import ProjectsGrid from "./ProjectsArea/projects";
import { projectsList } from "./data/projects";

function App() {
  return (
    <>
      <ProjectsGrid project={projectsList} />
    </>
  );
}

export default App;
