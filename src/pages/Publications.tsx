import React from "react";
import { ExternalLink, RefreshCw, Database, Wifi } from "lucide-react";
import { usePublications } from "@/hooks/usePublications";
import FadeInSection from "@/components/FadeInSection";

const Publications: React.FC = () => {
  const {
    publications,
    loading,
    error,
    isRefreshing,
    lastUpdated,
    refresh,
    source,
  } = usePublications();

  // Group by year
  const groupedByYear = publications.reduce<
    Record<number, typeof publications>
  >((acc, pub) => {
    if (!acc[pub.year]) acc[pub.year] = [];
    acc[pub.year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const sourceLabels: Record<string, { label: string; icon: React.ReactNode }> =
    {
      api: { label: "Live from ORCID", icon: <Wifi size={12} /> },
      cache: { label: "Cached", icon: <Database size={12} /> },
      seed: { label: "Seed data", icon: <Database size={12} /> },
    };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl">
              <p
                className="text-sm font-medium uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Publications
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl mb-6"
                style={{ letterSpacing: "-0.015em" }}
              >
                Our Research Papers
              </h1>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Status bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-4">
        <div className="flex flex-wrap items-center gap-4">
          <div
            className="flex items-center gap-1.5 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            {sourceLabels[source]?.icon}
            <span>{sourceLabels[source]?.label || source}</span>
            {lastUpdated && (
              <span>
                {" "}
                · Updated {lastUpdated.toLocaleDateString()}
              </span>
            )}
          </div>
          <button
            onClick={refresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 text-xs font-medium transition-opacity duration-200 hover:opacity-70 disabled:opacity-50"
            style={{
              color: "var(--color-primary)",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            title="Refresh from ORCID"
          >
            <RefreshCw
              size={12}
              className={isRefreshing ? "animate-spin" : ""}
            />
            {isRefreshing ? "Syncing..." : "Refresh"}
          </button>
          {error && (
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {error} (showing seed data)
            </span>
          )}
        </div>
      </div>

      {/* Publications list */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {loading ? (
            <div className="py-20 text-center">
              <div
                className="inline-block w-6 h-6 border-2 border-t-transparent rounded-full animate-spin mb-3"
                style={{ borderColor: "var(--color-primary)", borderTopColor: "transparent" }}
              />
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                Loading publications from ORCID...
              </p>
            </div>
          ) : (
            <>
              {years.map((year) => (
                <div key={year} className="mb-16 last:mb-0">
                  <FadeInSection>
                    <h2
                      className="text-2xl mb-8 pb-4 border-b"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {year}
                    </h2>
                  </FadeInSection>

                  <div>
                    {groupedByYear[year].map((pub, index) => (
                      <FadeInSection key={pub.id} delay={index * 0.05}>
                        <article
                          className="py-8 border-b last:border-0"
                          style={{ borderColor: "var(--border)" }}
                        >
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-2">
                            <span
                              className="text-xs uppercase tracking-wider"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {pub.journal}
                            </span>
                            <span
                              className="text-xs"
                              style={{ color: "var(--text-muted)" }}
                            >
                              · {pub.year}
                            </span>
                          </div>

                          <h3 className="text-lg mb-2 leading-snug">
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="no-underline hover:underline"
                              style={{ color: "inherit" }}
                            >
                              {pub.title}
                            </a>
                          </h3>

                          {pub.authors.filter(Boolean).length > 0 ? (
                            <p
                              className="text-base mb-3"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {pub.authors.join(", ")}
                            </p>
                          ) : (
                            <p
                              className="text-sm mb-3 italic"
                              style={{ color: "var(--text-muted)" }}
                            >
                              Authors loading...
                            </p>
                          )}

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm no-underline transition-opacity duration-200 hover:opacity-70"
                              style={{ color: "var(--color-primary)" }}
                            >
                              <ExternalLink size={13} />
                              Journal
                            </a>
                            <span
                              className="text-xs font-mono"
                              style={{ color: "var(--text-muted)" }}
                            >
                              DOI: {pub.doi}
                            </span>
                            {pub.highlight && (
                              <span
                                className="text-xs"
                                style={{ color: "var(--text-muted)" }}
                              >
                                ★ Highlight
                              </span>
                            )}
                          </div>
                        </article>
                      </FadeInSection>
                    ))}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Publications;
