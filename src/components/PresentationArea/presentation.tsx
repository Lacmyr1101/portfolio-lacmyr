import type { Social } from "../../models/social";
import { presentationInfo } from "../../data/presentarion-info";
import SocialLink from "./social-link";

interface Props {
  social: Social[];
}

function PresentationArea({ social }: Props) {
  const handleDownload = () => {
    const fileUrl = "./public/documents/CV_Leonardo_Cornieles.pdf";
    const fileName = "CV_Leonardo_Cornieles.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="presentation-area w-screen flex flex-col items-center gap-4 p-6 sm:w-4/5 sm:m-auto md:w-11/12 md:flex-row md:items-start md:gap-8  lg:w-3/4 lg:scale-125 xl:scale-150 xl:w-3/5">
      <div className="presentation-picture w-4/5 h-4/5 sm:w-80 sm:h-80 md:w-64 md:h-64 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
        <img
          src={presentationInfo.imgURL}
          alt="Foto de perfil"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="presentation-info w-full md:flex-1 text-center md:text-left">
        <h1 className="name text-2xl sm:text-3xl md:text-3xl font-semibold">
          {presentationInfo.name}
        </h1>
        <h2 className="profession text-lg text-gray-500 sm:text-2xl mt-1">
          {presentationInfo.profession}
        </h2>
        <p className="aboutme mt-3 text-sm text-gray-700">
          {presentationInfo.aboutMe}
        </p>

        <div className="social-media flex flex-wrap gap-2 justify-center md:justify-start mt-4">
          <button
            onClick={handleDownload}
            className="px-3 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 text-sm w-full md:w-auto"
          >
            Download CV
          </button>

          {social.map((socialLink) => (
            <SocialLink
              key={socialLink.id}
              name={socialLink.name}
              iconURL={socialLink.iconURL}
              url={socialLink.url}
              colors={socialLink.colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PresentationArea;
