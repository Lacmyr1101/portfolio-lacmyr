import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiVuedotjs,
  SiMongodb,
  SiPrisma,
  SiPostgresql,
  SiVercel,
  SiExpo,
  SiSupabase,
  SiD3,
  SiSass,
  SiStripe,
  SiNextdotjs,
  SiChartdotjs,
  SiPython,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { Circle } from "./tech-icons-circle";

export default function TechIcon({ tech, size = 20 }: { tech: string; size?: number }) {
  const key = tech.toLowerCase();

  if (/react/.test(key)) return <FaReact size={size} title={tech} aria-label={tech} />;
  if (/next/.test(key)) return <SiNextdotjs size={size} title={tech} aria-label={tech} />;
  if (/type(script)?/.test(key)) return <SiTypescript size={size} title={tech} aria-label={tech} />;
  if (/tailwind/.test(key)) return <SiTailwindcss size={size} title={tech} aria-label={tech} />;
  if (/stripe/.test(key)) return <SiStripe size={size} title={tech} aria-label={tech} />;
  if (/firebase/.test(key)) return <SiFirebase size={size} title={tech} aria-label={tech} />;
  if (/python/.test(key)) return <SiPython size={size} title={tech} aria-label={tech} />;
  if (/^(javascript|js)$/.test(key) || /javascript/.test(key))
    return <SiJavascript size={size} title={tech} aria-label={tech} />;
  if (/php/.test(key)) return <SiPhp size={size} title={tech} aria-label={tech} />;
  if (/redux/.test(key)) return <SiRedux size={size} title={tech} aria-label={tech} />;
  if (/vue/.test(key)) return <SiVuedotjs size={size} title={tech} aria-label={tech} />;
  if (/node/.test(key)) return <FaNodeJs size={size} title={tech} aria-label={tech} />;
  if (/mongo/.test(key) || /mongodb/.test(key)) return <SiMongodb size={size} title={tech} aria-label={tech} />;
  if (/prisma/.test(key)) return <SiPrisma size={size} title={tech} aria-label={tech} />;
  if (/post(gres)?/.test(key)) return <SiPostgresql size={size} title={tech} aria-label={tech} />;
  if (/mysql/.test(key)) return <SiMysql size={size} title={tech} aria-label={tech} />;
  if (/\bsql\b/.test(key)) return <SiMysql size={size} title={tech} aria-label={tech} />;
  if (/vercel/.test(key)) return <SiVercel size={size} title={tech} aria-label={tech} />;
  if (/expo/.test(key)) return <SiExpo size={size} title={tech} aria-label={tech} />;
  if (/supabase/.test(key)) return <SiSupabase size={size} title={tech} aria-label={tech} />;
  if (/d3/.test(key)) return <SiD3 size={size} title={tech} aria-label={tech} />;
  if (/chart/.test(key)) return <SiChartdotjs size={size} title={tech} aria-label={tech} />;
  if (/sass/.test(key) || /scss/.test(key)) return <SiSass size={size} title={tech} aria-label={tech} />;
  if (/git/.test(key)) return <SiGit size={size} title={tech} aria-label={tech} />;

  // 2. Usamos el componente llamándolo y pasándole las props necesarias
  return (
    <Circle 
      label={(tech[0] || "?").toUpperCase()} 
      size={size} 
      tech={tech} 
    />
  );
}