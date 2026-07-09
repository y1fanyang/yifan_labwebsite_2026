import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { siteConfig, navItems } from "@/data/site";
import MicrofluidicMatrix from "./MicrofluidicMatrix";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative mt-auto"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        transition: "all 0.4s ease",
      }}
    >
      <div className="absolute bottom-0 right-0 opacity-30 pointer-events-none overflow-hidden">
        <MicrofluidicMatrix className="w-48 h-32" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Lab info */}
          <div>
            <h3
              className="text-base font-semibold mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              {siteConfig.labName}
            </h3>
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
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="text-base font-semibold mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Quick Links
            </h3>
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
            <h3
              className="text-base font-semibold mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Resources
            </h3>
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
          className="mt-10 pt-6 text-center text-xs"
          style={{
            color: "var(--text-muted)",
            borderTop: "1px solid var(--border)",
          }}
        >
          &copy; {currentYear} {siteConfig.labName},{" "}
          {siteConfig.institution}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
