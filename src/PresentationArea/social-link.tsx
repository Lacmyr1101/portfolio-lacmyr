import type { Social } from "../models/social";
// import { IonIcon } from '@ionic/react';
// import { logoIonic } from 'ionicons/icons';

function SocialLink(social: Omit<Social, "id">) {
  const colors = (social.colors && social.colors.length && social.colors) || ["#405de6", "#5851db"];
  const gradient = `linear-gradient(135deg, ${colors.join(", ")})`;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm"
      style={{ ['--social-gradient' as any]: gradient }}
    >
      <span className="social-icon">
        {/* <IonIcon icon={logoIonic}></IonIcon> */}
        <img src={social.iconURL} alt={social.name} className="inline-block w-5 h-5 mr-2" />
      </span>
      <span className="social-name">
        {social.name}
      </span>
    </a>
  );
}

export default SocialLink;
