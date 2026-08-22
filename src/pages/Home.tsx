import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ExternalLink, FlaskConical } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getHighlightPublications, sortPublicationsByYear } from "@/data/publications";
import { usePublications } from "@/hooks/usePublications";
import { sortPeople, people } from "@/data/people";
import { ResearchCycle } from "@/components/ResearchCycle";
import FadeInSection from "@/components/FadeInSection";
import AvatarFallback from "@/components/AvatarFallback";

const Home: React.FC = () => {
  const { publications: dynamicPubs } = usePublications();
  const highlightPubs = getHighlightPublications(
    sortPublicationsByYear(dynamicPubs.length > 0 ? dynamicPubs : [])
  );
  const teamMembers = sortPeople(people);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-2xl">
            <FadeInSection>
              <p
                className="text-sm font-medium uppercase tracking-widest mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {siteConfig.institution}
              </p>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
                style={{ letterSpacing: "-0.015em" }}
              >
                {siteConfig.labName}
              </h1>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p
                className="text-lg sm:text-xl leading-relaxed mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                {siteConfig.tagline}
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <p
                className="text-lg leading-relaxed mb-10 max-w-xl"
                style={{ color: "var(--text-primary)" }}
              >
                {siteConfig.description}
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link
                  to="/research"
                  className="inline-flex items-center gap-1.5 text-sm no-underline transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "var(--color-primary)" }}
                >
                  <FlaskConical size={14} />
                  Our Research
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/publications"
                  className="inline-flex items-center gap-1.5 text-sm no-underline transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "var(--color-primary)" }}
                >
                  <BookOpen size={14} />
                  Publications
                  <ArrowRight size={13} />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* How We Work — compact research cycle preview */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-5xl mx-auto">
              <ResearchCycle variant="compact" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="flex items-center justify-between mb-12">
              <div>
                <p
                  className="text-sm font-medium uppercase tracking-widest mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Featured Work
                </p>
                <h2 className="text-2xl sm:text-3xl">
                  Selected Publications
                </h2>
              </div>
              <Link
                to="/publications"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium no-underline transition-all duration-200 hover:gap-2"
                style={{ color: "var(--color-secondary)" }}
              >
                View all
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInSection>

          <div>
            {highlightPubs.slice(0, 4).map((pub, index) => (
              <FadeInSection key={pub.id} delay={index * 0.08}>
                <article
                  className="py-8 border-b last:border-0"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p
                    className="text-xs mb-2 uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {pub.journal} · {pub.year}
                  </p>
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
                  <p
                    className="text-base mb-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {pub.authors.filter(Boolean).join(", ")}
                  </p>
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
                </article>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="mt-8 text-center sm:hidden">
              <Link
                to="/publications"
                className="inline-flex items-center gap-1 text-sm font-medium no-underline"
                style={{ color: "var(--color-secondary)" }}
              >
                View all publications
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Team Preview */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="flex items-center justify-between mb-12">
              <div>
                <p
                  className="text-sm font-medium uppercase tracking-widest mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  Our Team
                </p>
                <h2 className="text-2xl sm:text-3xl">Meet the Lab</h2>
              </div>
              <Link
                to="/people"
                className="hidden sm:inline-flex items-center gap-1 text-sm font-medium no-underline transition-all duration-200 hover:gap-2"
                style={{ color: "var(--color-secondary)" }}
              >
                View all
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((person, index) => (
              <FadeInSection key={person.id} delay={index * 0.06}>
                <Link
                  to="/people"
                  className="group block text-center no-underline"
                >
                  <AvatarFallback
                    image={person.image}
                    name={person.name}
                    size={80}
                    className="mx-auto mb-3"
                  />
                  <h3
                    className="text-base font-medium mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {person.name}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {person.roleLabel}
                  </p>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl mb-4">
                Interested in Joining?
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                We are always looking for passionate researchers interested in
                systems biology and aging. Reach out to learn more about
                opportunities in our lab.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-sm no-underline transition-opacity duration-200 hover:opacity-70"
                style={{ color: "var(--color-primary)" }}
              >
                Contact Us
                <ArrowRight size={13} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
