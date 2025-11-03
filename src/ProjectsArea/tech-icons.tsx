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
  SiD3Dotjs,
  SiSass,
  SiStripe,
  SiNextdotjs,
  SiChartdotjs,
} from "react-icons/si";

export default function TechIcon({ tech, size = 20 }: { tech: string; size?: number }) {
  const key = tech.toLowerCase();

  if (/react/.test(key)) return <FaReact size={size} title={tech} aria-label={tech} />;
  if (/next/.test(key)) return <SiNextdotjs size={size} title={tech} aria-label={tech} />;
  if (/type(script)?/.test(key)) return <SiTypescript size={size} title={tech} aria-label={tech} />;
  if (/tailwind/.test(key)) return <SiTailwindcss size={size} title={tech} aria-label={tech} />;
  if (/stripe/.test(key)) return <SiStripe size={size} title={tech} aria-label={tech} />;
  if (/firebase/.test(key)) return <SiFirebase size={size} title={tech} aria-label={tech} />;
  // material / mui: no hay icono específico en 'si' con nombre consistente; usar fallback
  if (/redux/.test(key)) return <SiRedux size={size} title={tech} aria-label={tech} />;
  if (/vue/.test(key)) return <SiVuedotjs size={size} title={tech} aria-label={tech} />;
  if (/node/.test(key)) return <FaNodeJs size={size} title={tech} aria-label={tech} />;
  if (/mongo/.test(key) || /mongodb/.test(key)) return <SiMongodb size={size} title={tech} aria-label={tech} />;
  if (/prisma/.test(key)) return <SiPrisma size={size} title={tech} aria-label={tech} />;
  if (/post(gres)?/.test(key)) return <SiPostgresql size={size} title={tech} aria-label={tech} />;
  if (/vercel/.test(key)) return <SiVercel size={size} title={tech} aria-label={tech} />;
  if (/expo/.test(key)) return <SiExpo size={size} title={tech} aria-label={tech} />;
  if (/supabase/.test(key)) return <SiSupabase size={size} title={tech} aria-label={tech} />;
  if (/d3/.test(key)) return <SiD3Dotjs size={size} title={tech} aria-label={tech} />;
  if (/chart/.test(key)) return <SiChartdotjs size={size} title={tech} aria-label={tech} />;
  if (/sass/.test(key) || /scss/.test(key)) return <SiSass size={size} title={tech} aria-label={tech} />;

  // fallback: letra inicial en un círculo simple (sin dependencia externa)
  const Circle = ({ label }: { label: string }) => (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: size,
        background: "#eee",
        color: "#333",
        fontSize: size * 0.6,
      }}
      title={tech}
      aria-label={tech}
    >
      {label}
    </span>
  );

  return <Circle label={(tech[0] || "?").toUpperCase()} />;
}
