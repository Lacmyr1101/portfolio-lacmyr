export type Tech = {
  name: string;
  // opcional: una clave o id corto si en el futuro se necesita
  id?: string;
};

export const technologiesStack: Tech[] = [
  { id: "react", name: "React" },
  { id: "typescript", name: "TypeScript" },
  { id: "javascript", name: "JavaScript" },
  { id: "tailwind", name: "Tailwind CSS" },
  { id: "python", name: "Python" },
  { id: "php", name: "PHP" },
  { id: "sql", name: "SQL" },
  { id: "sass", name: "Sass CSS" },
  { id: "git", name: "Git" },
];
