import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, FlaskConical } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getHighlightPublications, sortPublicationsByYear } from "@/data/publications";
import { usePublications } from "@/hooks/usePublications";
import { sortPeople, people } from "@/data/people";
import SurvivalCurve from "@/components/SurvivalCurve";
import MicrofluidicMatrix from "@/components/MicrofluidicMatrix";
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
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Microfluidic matrix - right side, subtle background texture */}
          <div className="absolute top-[15%] right-[3%] w-[35vw] h-[55vh] hidden lg:block">
            <MicrofluidicMatrix />
          </div>
          {/* Survival curve - left 1/3, S-curve from top-left to button area */}
          <div className="absolute top-[12%] left-0 w-[35vw] h-[70vh] hidden lg:block">
            <SurvivalCurve variant="hero" className="w-full h-full" />
          </div>
        </div>

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
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{
                  color: "var(--color-primary)",
                  letterSpacing: "-0.02em",
                }}
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
                className="text-base leading-relaxed mb-10 max-w-xl"
                style={{ color: "var(--text-primary)" }}
              >
                {siteConfig.description}
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/research"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium no-underline transition-all duration-250 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    color: "var(--bg-primary)",
                  }}
                >
                  <FlaskConical size={16} />
                  Our Research
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/publications"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium no-underline transition-all duration-250"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  <BookOpen size={16} />
                  Publications
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p
                className="text-sm font-medium uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Research Overview
              </p>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6"
                style={{ color: "var(--color-primary)" }}
              >
                Understanding Homeostasis Through Aging
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Biological systems such as tissues and cells, despite being made
                from noisy and error-prone components, are strikingly robust due
                to intricate networks of control circuits collectively known as
                homeostasis.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FlaskConical size={24} />,
                title: "Aging Dynamics",
                description:
                  "We discover design principles of homeostasis through its unraveling in aging and stress, using quantitative measurements and mathematical modeling.",
                link: "/research",
              },
              {
                icon: <BookOpen size={24} />,
                title: "Publications",
                description:
                  "Our work has been published in leading journals including Nature Communications, Science Advances, and mBio.",
                link: "/publications",
              },
              {
                icon: <Users size={24} />,
                title: "Our Team",
                description:
                  "A diverse group of researchers passionate about systems biology, quantitative methods, and understanding the fundamental principles of life.",
                link: "/people",
              },
            ].map((item, index) => (
              <FadeInSection key={item.title} delay={index * 0.1}>
                <Link
                  to={item.link}
                  className="group block p-6 lg:p-8 rounded-xl no-underline transition-all duration-300 h-full"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="mb-4 transition-colors duration-200"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                  <div
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 group-hover:gap-2"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    Learn more
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
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
                <h2
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
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

          <div className="space-y-6">
            {highlightPubs.slice(0, 4).map((pub, index) => (
              <FadeInSection key={pub.id} delay={index * 0.08}>
                <article
                  className="group p-6 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-1">
                      <h3
                        className="text-base font-semibold mb-2 leading-snug"
                        style={{ color: "var(--text-primary)" }}
                      >
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
                        className="text-sm mb-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {pub.authors.filter(Boolean).join(", ")}
                      </p>
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
                          className="text-xs"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {pub.year}
                        </span>
                      </div>
                    </div>
                  </div>
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
                <h2
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  Meet the Lab
                </h2>
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
                  <AvatarFallback image={person.image} name={person.name} size={80} />
                  <h3
                    className="text-sm font-medium mb-0.5"
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
            <div
              className="max-w-2xl mx-auto text-center p-10 lg:p-14 rounded-2xl"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              <h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Interested in Joining?
              </h2>
              <p
                className="text-base mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                We are always looking for passionate researchers interested in
                systems biology and aging. Reach out to learn more about
                opportunities in our lab.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg text-sm font-medium no-underline transition-all duration-250 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--bg-primary)",
                }}
              >
                Contact Us
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
