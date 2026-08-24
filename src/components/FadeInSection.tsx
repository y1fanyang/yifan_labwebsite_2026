import React, { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  threshold?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(8px)";
      case "down":
        return "translateY(-8px)";
      case "left":
        return "translateX(8px)";
      case "right":
        return "translateX(-8px)";
      default:
        return "translateY(8px)";
    }
  };

  useEffect(() => {
    const el = ref.current;
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
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
