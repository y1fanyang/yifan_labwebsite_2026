import React from "react";

interface AlgorithmGridProps {
  className?: string;
  size?: number;
}

const AlgorithmGrid: React.FC<AlgorithmGridProps> = ({
  className = "",
  size = 80,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={`pointer-events-none ${className}`}
      style={{ opacity: 0.3 }}
    >
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const x = col * 20;
          const y = row * 20;
          const rotation = ((row + col) % 4) * 90;
          return (
            <polygon
              key={`${row}-${col}`}
              points="10,2 18,18 2,18"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="0.8"
              transform={`rotate(${rotation}, ${x + 10}, ${y + 10})`}
              style={{ transformOrigin: `${x + 10}px ${y + 10}px` }}
            />
          );
        })
      )}
    </svg>
  );
};

export default AlgorithmGrid;
