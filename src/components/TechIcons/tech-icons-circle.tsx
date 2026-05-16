export const Circle = ({ 
  label, 
  size, 
  tech 
}: { 
  label: string; 
  size: number; 
  tech: string; 
}) => (
  <span
    className="inline-flex items-center justify-center bg-gray-200"
    style={{
      width: size,
      height: size,
      borderRadius: size,
      color: "currentColor",
      fontSize: size * 0.6,
    }}
    title={tech}
    aria-label={tech}
  >
    {label}
  </span>
);