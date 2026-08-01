import React from "react";
import { researchContent } from "@/data/research";
import FadeInSection from "@/components/FadeInSection";
import SurvivalCurve from "@/components/SurvivalCurve";

import { ResearchCycle } from "@/components/ResearchCycle";

const maturityStyle = (maturity: string): React.CSSProperties => {
  if (maturity === "active") {
    return { backgroundColor: "var(--color-primary)", color: "var(--bg-primary)" };
  }
  if (maturity === "developing") {
    return { backgroundColor: "var(--color-secondary)", color: "var(--bg-primary)" };
  }
  return {
    backgroundColor: "transparent",
    color: "var(--text-muted)",
    border: "1px solid var(--border)",
  };
};

const Research: React.FC = () => {
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
                What We Study
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  color: "var(--color-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                {researchContent.heroTitle}
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {researchContent.heroSubtitle}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Overview */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: "var(--text-primary)",
                  lineHeight: "1.8",
                }}
              >
                {researchContent.overview}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
  	
      {/* Research approach */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <ResearchCycle variant="full" />
          </FadeInSection>
        </div>
      </section>

      {/* Research Areas */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-20 lg:space-y-28">
            {researchContent.areas.map((area, index) => (
              <FadeInSection key={area.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <p
                      className="text-xs font-medium uppercase tracking-widest mb-3"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Research Area {index + 1}
                    </p>
                    <h2
                      className="text-2xl sm:text-3xl font-bold mb-6"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {area.title}
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{
                        color: "var(--text-primary)",
                        lineHeight: "1.8",
                      }}
                    >
                      {area.description}
                    </p>

                    {/* Structured fields — all text comes from research.ts */}
                    {(area.system || area.maturity) && (
                      <div className="mt-6 flex flex-wrap items-center gap-2">
                        {area.system && (
                          <span
                            className="inline-block text-xs font-medium px-2.5 py-1 rounded-full"
                            style={{
                              backgroundColor: "var(--color-accent)",
                              color: "var(--color-primary)",
                            }}
                          >
                            {area.system}
                          </span>
                        )}
                        {area.maturity && (
                          <span
                            className="inline-block text-xs font-medium px-2.5 py-1 rounded-full"
                            style={maturityStyle(area.maturity)}
                          >
                            {area.maturity.charAt(0).toUpperCase() +
                              area.maturity.slice(1)}
                          </span>
                        )}
                      </div>
                    )}

                    {(area.centralQuestion ||
                      area.currentEvidence ||
                      area.openQuestion) && (
                      <dl className="mt-6 space-y-4">
                        {area.centralQuestion && (
                          <div>
                            <dt
                              className="text-xs font-medium uppercase tracking-wide mb-1"
                              style={{ color: "var(--text-muted)" }}
                            >
                              Central question
                            </dt>
                            <dd
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {area.centralQuestion}
                            </dd>
                          </div>
                        )}
                        {area.currentEvidence && (
                          <div>
                            <dt
                              className="text-xs font-medium uppercase tracking-wide mb-1"
                              style={{ color: "var(--text-muted)" }}
                            >
                              Current evidence
                            </dt>
                            <dd
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {area.currentEvidence}
                            </dd>
                          </div>
                        )}
                        {area.openQuestion && (
                          <div>
                            <dt
                              className="text-xs font-medium uppercase tracking-wide mb-1"
                              style={{ color: "var(--text-muted)" }}
                            >
                              Open question
                            </dt>
                            <dd
                              className="text-sm leading-relaxed"
                              style={{ color: "var(--text-secondary)" }}
                            >
                              {area.openQuestion}
                            </dd>
                          </div>
                        )}
                      </dl>
                    )}
                  </div>

                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div
                      className="aspect-[4/3] rounded-xl overflow-hidden"
                      style={{
                        backgroundColor: "var(--bg-primary)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {area.image ? (
                        <img
                          src={area.image}
                          alt={area.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const t = e.target as HTMLImageElement;
                            t.style.display = "none";
                          }}
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        >
                          <span
                            className="text-sm font-medium"
                            style={{ color: "var(--color-primary)" }}
                          >
                            {area.title}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{
                  color: "var(--text-primary)",
                  lineHeight: "1.8",
                }}
              >
                {researchContent.closingText}
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Research;
