import React from "react";

const SCHOOL_LOGO =
  "/source_from_cis/交叉科学中心 logo/交叉科学中心 logo/西湖大学VI标志标准组合_中英文左右.png";
const CENTER_LOGO =
  "/source_from_cis/交叉科学中心 logo/交叉科学中心 logo/【04】西湖大学交叉科学中心_英文.png";

const SCHOOL_URL = "https://en.westlake.edu.cn/";
const CENTER_URL = "https://cis.westlake.edu.cn/en/";

interface LabLogosProps {
  height?: number;
  className?: string;
}

/**
 * Westlake University + Centre for Interdisciplinary Science logos.
 * Transparent PNGs, overlaid directly on the page background.
 * Each logo links to its institution's website (new tab).
 */
const LabLogos: React.FC<LabLogosProps> = ({ height = 30, className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <a
        href={SCHOOL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block no-underline transition-opacity hover:opacity-80"
        aria-label="Westlake University (opens in new tab)"
      >
        <img
          src={SCHOOL_LOGO}
          alt="Westlake University"
          style={{ height }}
          className="w-auto object-contain"
        />
      </a>
      <a
        href={CENTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block no-underline transition-opacity hover:opacity-80"
        aria-label="Westlake University Centre for Interdisciplinary Science (opens in new tab)"
      >
        <img
          src={CENTER_LOGO}
          alt="Westlake University Centre for Interdisciplinary Science"
          style={{ height }}
          className="w-auto object-contain"
        />
      </a>
    </div>
  );
};

export default LabLogos;
