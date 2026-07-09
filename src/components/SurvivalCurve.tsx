import React, { useEffect, useRef, useState } from "react";

interface SurvivalCurveProps {
  className?: string;
  variant?: "hero" | "divider";
}

const SurvivalCurve: React.FC<SurvivalCurveProps> = ({
  className = "",
  variant = "hero",
}) => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path || !isVisible) return;

    const length = path.getTotalLength();

    // Start fully hidden
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    // Trigger the draw animation after a brief delay
    const timer = setTimeout(() => {
      path.style.transition = "stroke-dashoffset 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      path.style.strokeDashoffset = "0";
    }, 200);

    return () => clearTimeout(timer);
  }, [isVisible]);

  // Sigmoid survival curve path:
  // Starts high at top-left (near 1.0 survival),
  // stays flat, then steep drop, then flat near bottom (near 0 survival)
  const heroPathD =
    "M -10,15 C 30,15 70,16 110,20 C 150,25 185,38 215,60 C 245,85 270,120 295,155 C 320,190 350,225 390,250 C 430,270 470,280 510,285";

  const dividerPathD =
    "M 0,25 C 80,25 140,28 200,35 C 260,45 310,65 360,90 C 410,115 450,145 500,165 C 550,185 600,195 650,200 C 700,205 750,208 800,210";

  const pathD = variant === "hero" ? heroPathD : dividerPathD;
  const viewBox = variant === "hero" ? "0 0 520 300" : "0 0 800 240";
  const strokeW = variant === "hero" ? 3 : 2;

  return (
    <svg
      ref={containerRef}
      viewBox={viewBox}
      className={className}
      preserveAspectRatio="none"
      style={{ overflow: "visible" }}
    >
      <defs>
        <linearGradient
          id={`survival-gradient-${variant}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            style={{
              stopColor: "var(--color-primary)",
              stopOpacity: 0.8,
            }}
          />
          <stop
            offset="50%"
            style={{
              stopColor: "var(--color-secondary)",
              stopOpacity: 0.5,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: "var(--color-primary)",
              stopOpacity: 0.15,
            }}
          />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke={`url(#survival-gradient-${variant})`}
        strokeWidth={strokeW}
        className="survival-curve-stroke"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: "drop-shadow(0 0 2px var(--color-primary))" }}
      />
    </svg>
  );
};

export default SurvivalCurve;
