function PresentationArea() {
  return (
    <section className="presentation-area flex flex-col items-center gap-4 p-6 md:flex-row md:items-start md:gap-8">
      {/* Imagen: centrada en móvil, fija y circular en pantallas >= md */}
      <div className="presentation-picture w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
        <img src="" alt="Foto de perfil" className="w-full h-full object-cover" />
      </div>

      {/* Contenido: ocupa el espacio restante en pantallas grandes */}
      <div className="presentation-info w-full md:flex-1 text-center md:text-left">
        <h1 className="name text-2xl md:text-3xl font-bold">LEONARDO A. CORNIELES MAS Y RUBI</h1>
        <h2 className="profession text-lg text-gray-500 mt-1">FRONTEND DEVELOPER</h2>
        <p className="aboutme mt-3 text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
          voluptas ex debitis consequuntur laboriosam incidunt minima facilis,
          in fugit harum sapiente eveniet repellendus quod nobis assumenda nam
          necessitatibus? Rerum, autem!
        </p>

        <div className="social-media flex flex-wrap gap-2 justify-center md:justify-start mt-4">
          <a href="#" className="social-link px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">GitHub</a>
          <a href="#" className="social-link px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">LinkedIn</a>
          <a href="#" className="social-link px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">Instagram</a>
          <a href="#" className="social-link px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm">TikTok</a>
          <a href="#" className="social-link px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default PresentationArea;
