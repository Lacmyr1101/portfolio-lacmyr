import "./App.css";
import Background from "./components/background";
import PresentationArea from "./components/PresentationArea/presentation";
import { socialLinks } from "./data/social-info";
import ProjectsGrid from "./components/ProjectsArea/projects";
import { projectsList } from "./data/projects";
import StackArea from "./components/StackArea/stack-area";

function App() {
  return (
    <>
      <Background />
      {/* <div className="warning-overlay">
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
      </div> */}
      <PresentationArea social={socialLinks} />
      <ProjectsGrid project={projectsList} />
      <StackArea />
    </>
  );
}

export default App;
