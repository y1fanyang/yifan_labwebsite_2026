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

          <h2 className="text-2xl sm:text-3xl mb-4">{title}</h2>

          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {summary}
          </p>
        </div>

        {/* Number + label + arrow flow, no boxes */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-3 md:gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="contents">
              <div className="flex-1 min-w-0 text-center">
                <span
                  className="block text-xs font-medium mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.number}
                </span>

                <span
                  className="text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  {step.title}
                </span>
              </div>

              {index < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="hidden md:block shrink-0 self-center"
                  style={{ color: "var(--color-secondary)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* U-shaped return: risers from under the outer edges of the 1st/5th
            step text down to a bottom rail that spans exactly between them,
            a single static arrow back (5 -> 1) */}
        <div
          className="relative mt-4 h-10 hidden md:block"
          aria-hidden="true"
        >
          <div
            className="absolute right-[4%] top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <div
            className="absolute left-[4%] right-[4%] bottom-0 h-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <div
            className="absolute left-[4%] top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }}
          />
          <ArrowLeft
            size={16}
            style={{
              position: "absolute",
              left: "50%",
              bottom: "-8px",
              transform: "translateX(-50%)",
              color: "var(--color-secondary)",
            }}
          />
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/research"
            className="inline-flex items-center gap-1.5 text-sm font-medium no-underline transition-opacity duration-200 hover:opacity-70"
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

        <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-5">{title}</h2>

        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {summary}
        </p>
      </div>

      {/* Desktop: a row of 5 steps connected by static arrows. The last
          loops back to the first through a U-shaped polyline (right riser
          down, bottom rail back left, left riser up); a single static
          ArrowLeft marker on the rail shows the return direction. */}
      <div className="hidden lg:block">
        <div className="flex items-stretch justify-center gap-3 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.id} className="contents">
              <article className="flex-1 min-w-0 flex flex-col">
                <span
                  className="text-xs font-medium mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.number}
                </span>
                <h3 className="text-lg mb-2 leading-snug">{step.title}</h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
              </article>

              {i < steps.length - 1 && (
                <ArrowRight
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 self-center"
                  style={{ color: "var(--color-secondary)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* U-shaped return path (5 -> 1): risers aligned to the outer edges
            of the first/last column text, rail spanning exactly between them */}
        <div className="relative mt-6 h-12">
          <div
            className="absolute right-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-px"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden="true"
          />
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{ backgroundColor: "var(--border)" }}
            aria-hidden="true"
          />

          {/* "Cycle repeats" sits just above the return rail */}
          <span
            className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-2 text-xs font-medium uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            <RotateCw size={12} aria-hidden="true" />
            Cycle repeats
          </span>

          {/* Single static arrow centered on the return rail (pointing back to 1) */}
          <ArrowLeft
            size={20}
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "50%",
              bottom: "-10px",
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
              <article>
                <span
                  className="block text-xs font-medium mb-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {step.number}
                </span>
                <h3 className="text-base mb-2">{step.title}</h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
              </article>

              {i < steps.length - 1 && (
                <div className="flex justify-center py-3" aria-hidden="true">
                  <ArrowDown
                    size={18}
                    style={{ color: "var(--text-muted)" }}
                  />
                </div>
              )}
            </div>
          ))}

          <p
            className="mt-6 flex items-center justify-center gap-2 text-center text-base"
            style={{ color: "var(--text-muted)" }}
          >
            <RotateCw size={14} aria-hidden="true" />
            <span>
              Perturbation generates new data — the cycle begins again.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
