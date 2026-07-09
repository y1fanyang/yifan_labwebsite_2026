import React, { useMemo } from "react";

interface MicrofluidicMatrixProps {
  className?: string;
}

const MicrofluidicMatrix: React.FC<MicrofluidicMatrixProps> = ({
  className = "",
}) => {
  const rows = 8;
  const cols = 12;

  const dots = useMemo(() => {
    const result: { id: string; row: number; col: number; delay: number }[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        result.push({
          id: `dot-${r}-${c}`,
          row: r,
          col: c,
          delay: (r + c) * 0.6,
        });
      }
    }
    return result;
  }, []);

  return (
    <div
      className={`microfluidic-matrix pointer-events-none ${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gap: "28px",
      }}
    >
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="microfluidic-dot"
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            backgroundColor: "var(--color-secondary)",
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default MicrofluidicMatrix;
