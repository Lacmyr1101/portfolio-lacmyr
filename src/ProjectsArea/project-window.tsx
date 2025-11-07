function ProjectWindow() {
  return (
    <div className='relative w-full h-full bg-white'>
      {/* botón para cerrar la ventana en la esquina superior derecha */}
      <button className='absolute' aria-label="Cerrar ventana">X</button>

      {/* En pantallas grandes mostrará la imagen a la izquierda y el contenido a la derecha.
          En pantallas pequeñas se apilarán en columna, imagen arriba y contenido abajo. */}
      <div className="main-info">
        <div className="img-container">
          <img src="#" alt="#" />
        </div>
        <div className="main-info-elements">
          <h2 className='text-2xl font-bold'>Project Title</h2>
          <div className="tech-list">
            <span>A</span>
            <span>A</span>
            <span>A</span>
          </div>
          <div className="links">
            <a href="#">Github</a>
            <a href="#">Visit</a>
          </div>
        </div>
      </div>

      {/* Únicamente contendrá la descripción del proyecto */}
      <div className="description-section">
        <p className='description-text'></p>
      </div>
    </div>
  );
}

export default ProjectWindow;
