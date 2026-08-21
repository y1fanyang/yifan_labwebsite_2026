import React from "react";
import { researchContent } from "@/data/research";
import FadeInSection from "@/components/FadeInSection";

import { ResearchCycle } from "@/components/ResearchCycle";

const Research: React.FC = () => {
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
                What We Study
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl mb-6"
                style={{ letterSpacing: "-0.015em" }}
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
                className="text-lg sm:text-xl leading-relaxed"
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
                    <h2 className="text-2xl sm:text-3xl mb-6">
                      {area.title}
                    </h2>
                    <p
                      className="text-lg leading-relaxed"
                      style={{
                        color: "var(--text-primary)",
                        lineHeight: "1.8",
                      }}
                    >
                      {area.description}
                    </p>

                    {/* Structured fields — all text comes from research.ts */}
                    {area.system && (
                      <p className="mt-6 text-base" style={{ color: "var(--text-secondary)" }}>
                        <span
                          className="text-xs font-medium uppercase tracking-wider"
                          style={{ color: "var(--text-muted)" }}
                        >
                          System
                        </span>
                        {" — "}
                        {area.system}
                      </p>
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
                              className="text-base leading-relaxed"
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
                              className="text-base leading-relaxed"
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
                              className="text-base leading-relaxed"
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
                    <div className="aspect-[4/3] overflow-hidden">
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
                className="text-lg sm:text-xl leading-relaxed"
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
