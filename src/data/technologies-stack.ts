export type Tech = {
  name: string;
  id?: string;
  color?: string;
};

export const technologiesStack: Tech[] = [
  { id: "react", name: "React", color: "#61DAFB" },
  { id: "typescript", name: "TypeScript", color: "#3178C6" },
  { id: "node", name: "Node.js", color: "#339933" },
  { id: "postgresql", name: "PostgreSQL", color: "#336791" },
  { id: "sass", name: "Sass CSS", color: "#CC6699" },
  { id: "tailwind", name: "Tailwind CSS", color: "#06B6D4" },
  { id: "git", name: "Git", color: "#F05032" },
  { id: "python", name: "Python", color: "#3776AB" },
  { id: "php", name: "PHP", color: "#777BB4" },  
  { id: "n8n", name: "n8n", color: "#EA4B71" },
];
