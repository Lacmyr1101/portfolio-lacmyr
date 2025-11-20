import type { Social } from "../models/social";
import SocialLink from "./social-link";

interface Props {
  social: Social[]
}


function PresentationArea({social}: Props) {

  const handleDownload = () => {
    // URL del archivo que quieres descargar
    const fileUrl = './assets/documents/CV_Leonardo_Cornieles.pdf';
    const fileName = 'CV_Leonardo_Cornieles.pdf';

    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <section className="presentation-area w-screen flex flex-col items-center gap-4 p-6 md:flex-row md:items-start md:gap-8">
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


          <button onClick={handleDownload} className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm">Download CV</button>

          {social.map((socialLink) => (
            <SocialLink
              key={socialLink.id}
              name={socialLink.name}
              iconURL={socialLink.iconURL}
              url={socialLink.url}
            />
          ))}      
          
        </div>
      </div>
    </section>
  );
}

export default PresentationArea;
