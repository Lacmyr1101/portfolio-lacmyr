import "./App.css";
import "./App.css";
import PresentationArea from "./components/PresentationArea/presentation";
import ProjectsGrid from "./components/ProjectsArea/projects";
import StackArea from "./components/StackArea/stack-area";
import { projectsList } from "./data/projects";
import { socialLinks } from "./data/social-info";

function App() {
  return (
    <>
      <div className="warning-overlay">
        <div className="warning-content">
          <h1>¡Atención!</h1>
          <p>
            Este sitio web está en desarrollo y puede contener errores o
            información incompleta. ¡Gracias por tu comprensión!
          </p>
          <button className="close-button" onClick={() => document.querySelector('.warning-overlay')?.remove()}>
            Ta bien
          </button>
        </div>
      </div>
      <PresentationArea social={socialLinks} />
      <ProjectsGrid project={projectsList} />
      <StackArea />
    </>
  );
}

export default App;
