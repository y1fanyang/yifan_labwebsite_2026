import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navItems, siteConfig } from "@/data/site";

const Navigation: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border)",
        transition: "background-color 0.4s ease, border-color 0.4s ease",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold no-underline"
            style={{ color: "var(--color-primary)" }}
          >
            <span>{siteConfig.labName}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link relative px-3 py-2 text-sm font-medium no-underline transition-colors duration-200"
                style={{
                  color: isActive(item.path)
                    ? "var(--color-primary)"
                    : "var(--text-secondary)",
                }}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-3 right-3 h-px origin-left transition-transform duration-300"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    transform: isActive(item.path) ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
              </Link>
            ))}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg"
              style={{ color: "var(--text-primary)" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "var(--bg-primary)",
            borderColor: "var(--border)",
          }}
        >
          <div className="px-6 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium rounded-lg no-underline transition-colors"
                style={{
                  color: isActive(item.path)
                    ? "var(--color-primary)"
                    : "var(--text-secondary)",
                  backgroundColor: isActive(item.path)
                    ? "var(--color-accent)"
                    : "transparent",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
