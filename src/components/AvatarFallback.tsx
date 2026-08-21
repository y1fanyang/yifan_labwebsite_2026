import React, { useState } from "react";

interface AvatarFallbackProps {
  image: string;
  name: string;
  size?: number;
  className?: string;
}

const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  image,
  name,
  size = 80,
  className = "",
}) => {
  const [failed, setFailed] = useState(false);
  const initial = name.charAt(0).toUpperCase();

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center overflow-hidden ${className}`}
        style={{
          width: size,
          height: size,
          backgroundColor: "var(--color-accent)",
          color: "var(--color-primary)",
          fontSize: `${size * 0.4}px`,
          fontWeight: 600,
        }}
      >
        {initial}
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
      }}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
};

export default AvatarFallback;
