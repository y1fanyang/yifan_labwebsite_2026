import { ArrowRight, RotateCcw } from "lucide-react";
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
            className="text-2xl sm:text-3xl font-bold mb-4"
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

        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-stretch md:items-center justify-center gap-3">
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
                  className="hidden md:block shrink-0"
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
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {steps.map((step, index) => (
          <article
            key={step.id}
            className="relative rounded-xl p-6"
            style={{
              backgroundColor: "var(--bg-primary)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--color-secondary)" }}
              >
                {step.number}
              </span>

              {index < steps.length - 1 && (
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="hidden lg:block"
                  style={{ color: "var(--text-muted)" }}
                />
              )}
            </div>

            <h3
              className="text-lg font-semibold mb-3"
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
        ))}
      </div>

      <div
        className="mt-8 flex items-center justify-center gap-3 text-sm font-medium"
        style={{ color: "var(--color-secondary)" }}
      >
        <RotateCcw size={17} aria-hidden="true" />
        <span>Perturbation generates new data, beginning the cycle again.</span>
      </div>
    </div>
  );
}