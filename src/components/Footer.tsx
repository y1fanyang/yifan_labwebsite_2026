import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { siteConfig, navItems } from "@/data/site";
import LabLogos from "./LabLogos";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="mt-auto"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        transition: "all 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lab info */}
          <div>
            <h3 className="text-base mb-3">{siteConfig.labName}</h3>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              {siteConfig.institution}
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm no-underline transition-colors hover:opacity-80"
                style={{ color: "var(--text-secondary)" }}
              >
                <Mail size={14} />
                {siteConfig.email}
              </a>
              <div
                className="flex items-center gap-2 text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                <MapPin size={14} />
                {siteConfig.address}
              </div>
            </div>

            <div className="mt-4">
              <LabLogos height={28} />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-base mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm no-underline transition-colors hover:opacity-80"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-1 text-sm no-underline transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Google Scholar
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.westlake.edu.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm no-underline transition-colors hover:opacity-80"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Westlake University
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col items-center gap-4"
          style={{
            borderTop: "1px solid var(--border)",
          }}
        >
          <p
            className="text-xs text-center"
            style={{ color: "var(--text-muted)" }}
          >
            &copy; {currentYear} {siteConfig.labName},{" "}
            {siteConfig.institution}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
