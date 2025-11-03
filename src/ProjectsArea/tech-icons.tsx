import React from "react";

// Devuelve un JSX con un "icono" para la tecnología dada.
// Usamos emojis para evitar depender de librerías externas. Puedes cambiar a SVGs o react-icons más adelante.
export default function TechIcon({ tech, size = 16 }: { tech: string; size?: number }) {
  const commonStyle: React.CSSProperties = { fontSize: size, display: "inline-block", marginRight: 6 };

  const key = tech.toLowerCase();
  switch (true) {
    case /react/.test(key):
      return <span style={commonStyle} title={tech}>⚛️</span>;
    case /next/.test(key):
      return <span style={commonStyle} title={tech}>⧉</span>;
    case /type(script)?/.test(key):
      return <span style={commonStyle} title={tech}>🔷</span>;
    case /stripe/.test(key):
      return <span style={commonStyle} title={tech}>💳</span>;
    case /tailwind/.test(key):
      return <span style={commonStyle} title={tech}>🌬️</span>;
    case /firebase/.test(key):
      return <span style={commonStyle} title={tech}>🔥</span>;
    case /material/.test(key) || /mui/.test(key):
      return <span style={commonStyle} title={tech}>🧩</span>;
    case /redux/.test(key):
      return <span style={commonStyle} title={tech}>🔁</span>;
    case /vue/.test(key):
      return <span style={commonStyle} title={tech}>🟩</span>;
    case /node/.test(key):
      return <span style={commonStyle} title={tech}>🟢</span>;
    case /mongo/.test(key) || /mongodb/.test(key):
      return <span style={commonStyle} title={tech}>🍃</span>;
    case /prisma/.test(key):
      return <span style={commonStyle} title={tech}>🔷</span>;
    case /postgres/.test(key) || /postgresql/.test(key):
      return <span style={commonStyle} title={tech}>🐘</span>;
    case /vercel/.test(key):
      return <span style={commonStyle} title={tech}>⬛</span>;
    case /expo/.test(key):
      return <span style={commonStyle} title={tech}>📱</span>;
    case /supabase/.test(key):
      return <span style={commonStyle} title={tech}>🟦</span>;
    case /d3/.test(key):
    case /chart/.test(key):
      return <span style={commonStyle} title={tech}>📊</span>;
    case /sass/.test(key) || /scss/.test(key):
      return <span style={commonStyle} title={tech}>🎨</span>;
    default:
      // Si no está mapeada, mostrar la primera letra en un círculo simple
      return (
        <span
          style={{
            ...commonStyle,
            width: size,
            height: size,
            lineHeight: `${size}px`,
            textAlign: "center",
            borderRadius: size,
            background: "#eee",
            color: "#333",
            fontSize: size * 0.7,
            display: "inline-block",
          }}
          title={tech}
        >
          {tech[0]?.toUpperCase() || "?"}
        </span>
      );
  }
}
