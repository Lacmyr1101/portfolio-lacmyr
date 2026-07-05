import type { Social } from "../../models/social";

function SocialLink(social: Omit<Social, "id">) {
  const colors = (social.colors && social.colors.length && social.colors) || [
    "#405de6",
    "#5851db",
  ];
  const gradient = `linear-gradient(135deg, ${colors.join(", ")})`;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 text-sm"
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={{ ["--social-gradient" as any]: gradient }}
    >
      <span className="social-icon">
        <img
          src={social.iconURL}
          alt={social.name}
          className="inline-block size-5 mr-2"
        />
      </span>
      <span className="social-name">{social.name}</span>
    </a>
  );
}

export default SocialLink;
