import React from "react";
import FadeInSection from "@/components/FadeInSection";
import SurvivalCurve from "@/components/SurvivalCurve";
import { BookOpen, GraduationCap } from "lucide-react";

const Teaching: React.FC = () => {
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
                Education
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  color: "var(--color-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Teaching
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Courses and educational resources from our lab.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Course Material Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-primary)",
                }}
              >
                <BookOpen size={20} />
              </div>
              <h2
                className="text-xl font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                Course Material
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div
              className="p-8 lg:p-12 rounded-xl min-h-[200px] flex items-center justify-center"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-sm text-center"
                style={{ color: "var(--text-muted)" }}
              >
                Course materials will be posted here soon.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 课程介绍 Section */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-primary)",
                }}
              >
                <GraduationCap size={20} />
              </div>
              <h2
                className="text-xl font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                Course Introduction
              </h2>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div
              className="p-8 lg:p-12 rounded-xl min-h-[200px] flex items-center justify-center"
              style={{
                backgroundColor: "var(--bg-primary)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-sm text-center"
                style={{ color: "var(--text-muted)" }}
              >
                Course introduction will be posted here soon.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Teaching;
