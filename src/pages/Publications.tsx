import React from "react";
import { ExternalLink, RefreshCw, Database, Wifi } from "lucide-react";
import { usePublications } from "@/hooks/usePublications";
import FadeInSection from "@/components/FadeInSection";
import SurvivalCurve from "@/components/SurvivalCurve";
import AlgorithmGrid from "@/components/AlgorithmGrid";

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
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-24 opacity-60">
            <SurvivalCurve variant="divider" className="w-full h-full" />
          </div>
        </div>

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
                style={{
                  color: "var(--color-primary)",
                  letterSpacing: "-0.015em",
                }}
              >
                Our Research Papers
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Dynamically synced from{" "}
                <a
                  href="https://orcid.org/0000-0001-6697-0198"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ORCID
                </a>
                , with author details from Crossref.
              </p>
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
            className="flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 disabled:opacity-50"
            style={{
              color: "var(--color-secondary)",
              backgroundColor: "var(--color-accent)",
              border: "none",
              cursor: "pointer",
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
            <span className="text-xs" style={{ color: "var(--color-primary)" }}>
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
                      className="text-2xl mb-8 pb-3"
                      style={{
                        color: "var(--color-primary)",
                        borderBottom: "2px solid var(--color-primary)",
                        display: "inline-block",
                      }}
                    >
                      {year}
                    </h2>
                  </FadeInSection>

                  <div className="space-y-4">
                    {groupedByYear[year].map((pub, index) => (
                      <FadeInSection key={pub.id} delay={index * 0.05}>
                        <article
                          className="pub-card group relative p-6 rounded-xl transition-all duration-300"
                          style={{
                            backgroundColor: "var(--bg-card)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <div className="relative">
                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                              <div className="flex-1">
                                <h3 className="text-base mb-2 leading-snug">
                                  <a
                                    href={pub.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="no-underline transition-colors duration-200 hover:underline"
                                    style={{ color: "var(--text-primary)" }}
                                  >
                                    {pub.title}
                                  </a>
                                </h3>

                                {pub.authors.filter(Boolean).length > 0 ? (
                                  <p
                                    className="text-sm mb-3"
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

                                <div className="flex flex-wrap items-center gap-3">
                                  <span
                                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                                    style={{
                                      backgroundColor: "var(--color-accent)",
                                      color: "var(--color-primary)",
                                    }}
                                  >
                                    {pub.journal}
                                  </span>
                                  <span
                                    className="text-xs font-mono px-2 py-1 rounded"
                                    style={{
                                      backgroundColor: "var(--bg-primary)",
                                      color: "var(--text-muted)",
                                    }}
                                  >
                                    DOI: {pub.doi}
                                  </span>
                                  {pub.highlight && (
                                    <span
                                      className="text-xs font-medium px-2 py-1 rounded-full"
                                      style={{
                                        backgroundColor: "var(--color-primary)",
                                        color: "var(--bg-primary)",
                                      }}
                                    >
                                      Highlight
                                    </span>
                                  )}
                                </div>
                              </div>

                              <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 p-2 rounded-lg transition-all duration-200 hover:scale-110"
                                style={{
                                  color: "var(--color-secondary)",
                                  backgroundColor: "var(--bg-primary)",
                                }}
                                aria-label="View publication"
                              >
                                <ExternalLink size={18} />
                              </a>
                            </div>
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

        <div className="fixed bottom-8 right-8 pointer-events-none hidden lg:block">
          <AlgorithmGrid size={80} />
        </div>
      </section>
    </div>
  );
};

export default Publications;
