import type { Social } from "../../models/social";
import { presentationInfo } from "../../data/presentarion-info";
import SocialLink from "./social-link";

interface Props {
  social: Social[];
}

function PresentationArea({ social }: Props) {
  const handleDownload = () => {
    const fileUrl = `${import.meta.env.BASE_URL}documents/CV_Leonardo_Cornieles.pdf`;
    const fileName = "CV_Leonardo_Cornieles.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="presentation-area flex flex-col items-center gap-4 p-6 w-5/6 m-auto md:w-11/12 md:flex-row md:items-start md:gap-8 md:mb-4 md:border md:border-gray-400 md:rounded-2xl md:bg-gray-900/20 md:backdrop-blur-sm lg:mt-8 lg:w-3/4 lg:scale-125 lg:mb-16 xl:mt-28 xl:scale-150 xl:w-3/5 xl:mb-24 md:shadow-[inset_0_0_30px_rgba(200,200,200,0.5)]">
      <div
        className="presentation-picture ring-1 ring-cyan-200 shadow-[0_0_50px_rgba(6,182,212,0.5)] size-4/5 sm:size-80 md:size-64 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0"
      >
        <img
          src={presentationInfo.imgURL}
          alt="Foto de perfil"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="size-full object-cover"
        />
      </div>

      <div className="presentation-info w-full md:flex-1 text-center md:text-left">
        <h1 className="name text-2xl sm:text-3xl md:text-3xl font-semibold">
          {presentationInfo.name}
        </h1>
        <h2 className="profession text-lg text-gray-400 sm:text-2xl mt-1">
          {presentationInfo.profession}
        </h2>
        <p className="aboutme mt-3 text-sm text-gray-300">
          {presentationInfo.aboutMe}
        </p>

        <div className="social-media flex flex-wrap gap-2 justify-center md:justify-start mt-4">
          <button
            onClick={handleDownload}
            className="px-3 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-400 text-sm w-full md:w-auto transition-colors duration-300"
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
