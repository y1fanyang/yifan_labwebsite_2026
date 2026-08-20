import { ArrowRight, ArrowLeft, ArrowDown, RotateCw } from "lucide-react";
import { Link } from "react-router-dom";
import { researchApproach } from "@/data/researchApproach";

interface ResearchCycleProps {
  variant?: "compact" | "full";
}

export function ResearchCycle({
  variant = "full",
}: ResearchCycleProps) {
  const { title, summary, steps } = researchApproach;

  if (variant === "compact") {
    return (
      <div>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p
            className="text-sm font-medium uppercase tracking-widest mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            How We Work
          </p>

          <h2
            className="text-2xl sm:text-3xl mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            {title}
          </h2>

          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {summary}
          </p>
        </div>

        {/* items-stretch + nowrap so all chips share equal width AND height */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-3">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="contents"
            >
              <div
                className="flex-1 min-w-0 rounded-lg px-4 py-4 text-center"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="block text-xs font-medium mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.number}
                </span>

                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </span>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="hidden md:block shrink-0 self-center"
                  style={{ color: "var(--color-secondary)" }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/research"
            className="inline-flex items-center gap-2 text-sm font-medium no-underline"
            style={{ color: "var(--color-secondary)" }}
          >
            Explore our research approach
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
        <p
          className="text-sm font-medium uppercase tracking-widest mb-3"
          style={{ color: "var(--text-muted)" }}
        >
          Research Approach
        </p>

        <h2
          className="text-2xl sm:text-3xl lg:text-4xl mb-5"
          style={{ color: "var(--color-primary)" }}
        >
          {title}
        </h2>

        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {summary}
        </p>
      </div>

      {/* Desktop: a row of 5 cards. The last loops back to the first via a
          return bar, and a brighter pulse travels along the arrows
          (-> -> -> -> then <- back) roughly every 3s. */}
      <div className="hidden lg:block">
        <div className="flex items-stretch justify-center gap-3">
          {steps.map((step, i) => (
            <div key={step.id} className="contents">
              <article
                className="flex-1 min-w-0 flex flex-col rounded-xl p-5"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="text-sm font-semibold mb-1"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-lg mb-2 leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
              </article>

              {i < steps.length - 1 && (
                <ArrowRight
                  size={22}
                  aria-hidden="true"
                  className="cycle-arrow shrink-0 self-center"
                  style={{ animationDelay: `${i * 0.9}s` }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Return path: a U-shape (Perturbation -> Data). An arrow glides along
            the bottom line (right -> left) to convey the loop. */}
        <div className="relative mt-3 h-12">
          <div
            className="absolute inset-0"
            style={{
              borderLeft: "2px dashed var(--border)",
              borderRight: "2px dashed var(--border)",
              borderBottom: "2px dashed var(--border)",
            }}
            aria-hidden="true"
          />

          {/* "Cycle repeats" sits just above the bottom line */}
          <span
            className="absolute bottom-1 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-2 text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            <RotateCw size={12} aria-hidden="true" />
            Cycle repeats
          </span>

          {/* Sliding arrow along the bottom line (right -> left) */}
          <ArrowLeft
            size={18}
            aria-hidden="true"
            className="cycle-slide"
            style={{
              position: "absolute",
              bottom: "-9px",
              transform: "translateX(-50%)",
              color: "var(--color-secondary)",
            }}
          />
        </div>
      </div>

      {/* Mobile / tablet: readable vertical sequence with an explicit return note */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-md">
          {steps.map((step, i) => (
            <div key={step.id}>
              <article
                className="rounded-xl p-5"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              >
                <span
                  className="block text-xs font-semibold mb-1"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {step.number}
                </span>
                <h3
                  className="text-base mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
              </article>

              {i < steps.length - 1 && (
                <div className="flex justify-center py-2" aria-hidden="true">
                  <ArrowDown
                    size={18}
                    style={{ color: "var(--text-muted)" }}
                  />
                </div>
              )}
            </div>
          ))}

          <div
            className="mt-4 flex items-center justify-center gap-2 rounded-lg p-3 text-center text-sm font-medium"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-primary)",
            }}
          >
            <RotateCw size={16} aria-hidden="true" />
            <span>
              Perturbation generates new data — the cycle begins again.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
