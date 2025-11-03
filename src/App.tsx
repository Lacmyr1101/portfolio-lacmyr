import "./App.css";
import { type Project } from "./models/project";
import ProjectsGrid from "./ProjectsArea/projects";

function App() {
  const projectsList: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Una plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
      imageUrl: "/modern-ecommerce-interface.png",
      projectUrl: "https://example.com/project1",
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
      imageUrl: "/task-management-dashboard.png",
      projectUrl: "https://example.com/project2",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Dashboard meteorológico con pronósticos detallados, mapas interactivos y alertas personalizadas.",
      imageUrl: "/weather-dashboard-maps.png",
      projectUrl: "https://example.com/project3",
      technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Sass"],
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description:
        "Herramienta de análisis de redes sociales con métricas en tiempo real y reportes automatizados.",
      imageUrl: "/analytics-dashboard.png",
      projectUrl: "https://example.com/project4",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    },
    {
      id: 5,
      title: "Portfolio Builder",
      description:
        "Constructor de portfolios con plantillas personalizables, editor visual y hosting integrado.",
      imageUrl: "/portfolio-builder-interface.png",
      projectUrl: "https://example.com/project5",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description:
        "Aplicación de seguimiento de fitness con planes de entrenamiento, estadísticas y comunidad.",
      imageUrl: "/fitness-tracking-app.png",
      projectUrl: "https://example.com/project6",
      technologies: ["React Native", "Expo", "Supabase", "TypeScript"],
    },
  ];
  return (
    <>
      <ProjectsGrid project={projectsList} />
    </>
  );
}

export default App;
