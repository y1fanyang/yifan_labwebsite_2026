import React from "react";
import { Mail } from "lucide-react";
import { people, sortPeople, roleOrder } from "@/data/people";
import FadeInSection from "@/components/FadeInSection";
import SurvivalCurve from "@/components/SurvivalCurve";
import AvatarFallback from "@/components/AvatarFallback";

const People: React.FC = () => {
  const sortedPeople = sortPeople(people);

  const groupedByRole = sortedPeople.reduce<
    Record<string, typeof sortedPeople>
  >((acc, person) => {
    if (!acc[person.role]) acc[person.role] = [];
    acc[person.role].push(person);
    return acc;
  }, {});

  const roleLabels: Record<string, string> = {
    pi: "Principal Investigator",
    phd: "PhD Students",
    postdoc: "Postdoctoral Researchers",
    staff: "Staff",
    visitor: "Visitors",
    alumni: "Alumni",
  };

  const activeRoles = roleOrder.filter(
    (role) => groupedByRole[role]?.length > 0
  );

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
                Team
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
                style={{
                  color: "var(--color-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                People
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Meet the researchers and staff who make our work possible.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* People by role */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {activeRoles.map((role) => (
            <div key={role} className="mb-16 last:mb-0">
              <FadeInSection>
                <h2
                  className="text-xl font-semibold mb-8 pb-2"
                  style={{
                    color: "var(--color-primary)",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {roleLabels[role] || role}
                </h2>
              </FadeInSection>

              <div
                className={`grid gap-8 ${
                  role === "pi"
                    ? "grid-cols-1 max-w-xl"
                    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {groupedByRole[role].map((person, index) => (
                  <FadeInSection key={person.id} delay={index * 0.08}>
                    <div
                      className="group flex gap-5 p-5 rounded-xl transition-all duration-300 hover:shadow-md"
                      style={{
                        backgroundColor: "var(--bg-card)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      <div className="flex-shrink-0">
                        <AvatarFallback
                          image={person.image}
                          name={person.name}
                          size={80}
                          rounded="lg"
                          className="transition-all duration-300 group-hover:scale-105"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-base font-semibold mb-0.5"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {person.name}
                          {person.nameCn && (
                            <span
                              className="ml-1 text-sm font-normal"
                              style={{ color: "var(--text-muted)" }}
                            >
                              {person.nameCn}
                            </span>
                          )}
                        </h3>
                        <p
                          className="text-xs font-medium uppercase tracking-wide mb-2"
                          style={{ color: "var(--color-secondary)" }}
                        >
                          {person.roleLabel}
                        </p>
                        <p
                          className="text-sm leading-relaxed mb-3 line-clamp-3"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {person.bio}
                        </p>
                        <a
                          href={`mailto:${person.email}`}
                          className="inline-flex items-center gap-1.5 text-xs no-underline transition-colors duration-200 hover:opacity-80"
                          style={{ color: "var(--color-secondary)" }}
                        >
                          <Mail size={12} />
                          {person.email}
                        </a>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default People;
