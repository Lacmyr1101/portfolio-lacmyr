import type { Project } from "../models/project";

export const projectsList: Project[] = [
  {
    id: 1,
    title: "DevSnap - CV Builder",
    description:
      "DevSnap is an application developed to help the developer community create resumes tailored to the hiring processes of tech companies. The project was created with the goal of simplifying the preparation of resumes focused on professional opportunities within the sector, providing an accessible tool for those who wish to present their profile in a way that is better aligned with the needs of the tech industry.",
    imageUrl: `${import.meta.env.BASE_URL}images/projects/devsnap.png`,
    projectUrl: "https://devsnap-cvbuilder.netlify.app/",
    githubUrl: 'https://github.com/Lacmyr1101/DevSnap',
    technologies: ["React","Sass CSS"],
    videoUrl: `${import.meta.env.BASE_URL}videos/projects/devsnap.mp4`
  },
  {
    id: 2,
    title: "TypeMe - English Version",
    description:
      "TypeMe is a gamified web application designed to help users improve their typing skills through a more dynamic practice experience. The project is available in both Spanish and English, extending its utility to users of both languages.",
    imageUrl: `${import.meta.env.BASE_URL}images/projects/typeme.png`,
    projectUrl: "https://typeme-english-lacmyr.netlify.app/",
    githubUrl: 'https://github.com/Lacmyr1101/TypeMe-English-Version',
    technologies: ["JavaScript", "Sass CSS"],
    videoUrl: `${import.meta.env.BASE_URL}videos/projects/typeme.mp4`
  },
  {
    id: 3,
    title: "TypeMe - Spanish Version",
    description:
      "TypeMe is a gamified web application designed to help users improve their typing skills through a more dynamic practice experience. The project is available in both Spanish and English, extending its utility to users of both languages.",
    imageUrl: `${import.meta.env.BASE_URL}images/projects/typeme-es.png`,
    projectUrl: "https://typeme-spanish-lacmyr.netlify.app/",
    githubUrl: 'https://github.com/Lacmyr1101/TypeMe-Spanish-Version',
    technologies: ["JavaScript", "Sass CSS"],
    videoUrl: `${import.meta.env.BASE_URL}videos/projects/typeme-es.mp4`
  },
  
];
