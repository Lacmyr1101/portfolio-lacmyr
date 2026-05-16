import type { Project } from "../models/project";

export const projectsList: Project[] = [
  {
    id: 1,
    title: "DevSnap - CV Builder",
    description:
      "I designed and developed a CV builder web application that helps developers create professional resumes following industry standards. The app features an user-friendly interface with customizable templates, real-time previews, and easy export options. I implemented the frontend using React and styled it with Sass CSS, ensuring a responsive design that works seamlessly across devices.",
    imageUrl: "../../public/images/projects/devsnap.png",
    projectUrl: "https://devsnap-cvbuilder.netlify.app/",
    githubUrl: 'https://github.com/Lacmyr1101/DevSnap',
    technologies: [
      "React",
      "Sass CSS",
    ],
  },
  {
    id: 2,
    title: "TypeMe - English Version",
    description:
      "I created a gamified web environment to help students improve typing skills with an english keyboard. The app features  an interactive typing exercise, real-time feedback, and engaging challenges to make learning fun. I developed the frontend using JavaScript and styled it with Sass CSS. Only available for desktop.",
    imageUrl: "../../public/images/projects/typeme.png",
    projectUrl: "https://typeme-english-lacmyr.netlify.app/",
    githubUrl: 'https://github.com/Lacmyr1101/TypeMe-English-Version',
    technologies: ["JavaScript", "Sass CSS"] ,
  },
  {
    id: 3,
    title: "TypeMe - Spanish Version",
    description:
      "This is the version of the TypeMe project adapted for Spanish speakers, featuring the same interactive typing environment with a fun challenge designed to improve typing skills using a Spanish keyboard layout. It's optimized for desktop use only.",
    imageUrl: "../../public/images/projects/typeme.png",
    projectUrl: "https://typeme-spanish-lacmyr.netlify.app/",
    githubUrl: 'https://github.com/Lacmyr1101/TypeMe-Spanish-Version',
    technologies: ["JavaScript", "Sass CSS"] ,
  },
  
];
