export type Tech = {
  name: string;
  // opcional: una clave o id corto si en el futuro se necesita
  id?: string;
  color?: string;
};

export const technologiesStack: Tech[] = [
  { id: "react", name: "React", color: "#61DAFB" },
  { id: "typescript", name: "TypeScript", color: "#3178C6" },
  { id: "javascript", name: "JavaScript", color: "#F7DF1E" },
  { id: "tailwind", name: "Tailwind CSS", color: "#06B6D4" },
  { id: "python", name: "Python", color: "#3776AB" },
  { id: "php", name: "PHP", color: "#777BB4" },
  { id: "sql", name: "SQL", color: "#00758F" },
  { id: "sass", name: "Sass CSS", color: "#CC6699" },
  { id: "git", name: "Git", color: "#F05032" },
];
