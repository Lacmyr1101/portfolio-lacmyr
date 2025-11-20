import type { Project } from "../models/project";

export const projectsList: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Una plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
    imageUrl: "../../public/images/projects/e-commerce-platform.png",
    projectUrl: "https://example.com/project1",
    githubUrl: 'verga.com/example/project1',
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Stripe",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.",
    imageUrl: "../../public/images/projects/task-management-app.png",
    projectUrl: "https://example.com/project2",
    githubUrl: 'verga.com/example/project2',
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard meteorológico con pronósticos detallados, mapas interactivos y alertas personalizadas.",
    imageUrl: "../../public/images/projects/weather-dashboard.png",
    projectUrl: "https://example.com/project3",
    githubUrl: 'verga.com/example/project3',
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Sass"],
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Herramienta de análisis de redes sociales con métricas en tiempo real y reportes automatizados.",
    imageUrl: "../../public/images/projects/social-media-analytics.png",
    projectUrl: "https://example.com/project4",
    githubUrl: 'verga.com/example/project4',
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
  },
  {
    id: 5,
    title: "Portfolio Builder",
    description:
      "Constructor de portfolios con plantillas personalizables, editor visual y hosting integrado.",
    imageUrl: "../../public/images/projects/portfolio-builder.png",
    projectUrl: "https://example.com/project5",
    githubUrl: 'verga.com/example/project5',
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Aplicación de seguimiento de fitness con planes de entrenamiento, estadísticas y comunidad.",
    imageUrl: "../../public/images/projects/fitness-tracker.png",
    projectUrl: "https://example.com/project6",
    githubUrl: 'verga.com/example/project6',
    technologies: ["React Native", "Expo", "Supabase", "TypeScript"],
  },
];

export default projectsList;
