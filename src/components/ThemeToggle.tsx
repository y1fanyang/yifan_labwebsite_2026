import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${className}`}
      style={{
        backgroundColor: "var(--color-accent)",
        border: "none",
        cursor: "pointer",
      }}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-label="Toggle theme"
    >
      <div
        className="transition-transform duration-300"
        style={{
          transform: isDark
            ? "rotate(180deg) scale(1.1)"
            : "rotate(0deg) scale(1)",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {isDark ? (
          <Moon size={16} style={{ color: "var(--color-primary)" }} />
        ) : (
          <Sun size={16} style={{ color: "var(--color-primary)" }} />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
