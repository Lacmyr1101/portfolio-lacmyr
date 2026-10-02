import { useEffect, useRef, useState, type CSSProperties } from "react";

const hexagonWidth = 216;
const hexagonHeight = 156;

function getGridDimensions() {
  const columns = Math.ceil(window.innerWidth / (hexagonWidth * 0.75)) + 2;
  const rows = Math.ceil(window.innerHeight / hexagonHeight) + 1;

  return { columns, rows };
}

function Background() {
  const [grid, setGrid] = useState(getGridDimensions);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateGrid = () => setGrid(getGridDimensions());
    window.addEventListener("resize", updateGrid);

    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  useEffect(() => {
    const updateGlow = (event: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.top = `${event.clientY}px`;
      glowRef.current.style.left = `${event.clientX}px`;
    };

    window.addEventListener("mousemove", updateGlow);
    return () => window.removeEventListener("mousemove", updateGlow);
  }, []);

  const containerStyle = {
    "--columns": grid.columns,
    "--hexagon-width": `${hexagonWidth}px`,
    "--hexagon-height": `${hexagonHeight}px`,
  } as CSSProperties;

  return (
    <div className="hero">
      <div id="glow" ref={glowRef}></div>
      <div className="triangle-container" style={containerStyle}>
        {Array.from({ length: grid.columns * grid.rows }, (_, index) => {
          const column = index % grid.columns;
          return (
            <div
              className={`hexagon${column % 2 === 1 ? " hexagon--offset" : ""}`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Background;