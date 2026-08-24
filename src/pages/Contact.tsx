import React from "react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import FadeInSection from "@/components/FadeInSection";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <p
                className="text-sm font-medium uppercase tracking-widest mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                Get in Touch
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl mb-6"
                style={{ letterSpacing: "-0.015em" }}
              >
                Contact Us
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                We welcome inquiries about research collaborations, joining the
                lab, or learning more about our work.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection>
              <div className="h-full">
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={16} style={{ color: "var(--color-secondary)" }} />
                  <h3 className="text-lg">Email</h3>
                </div>
                <p
                  className="text-base mb-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  For general inquiries and collaboration opportunities:
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg font-medium no-underline transition-opacity duration-200 hover:opacity-70"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {siteConfig.email}
                </a>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="h-full">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} style={{ color: "var(--color-secondary)" }} />
                  <h3 className="text-lg">Location</h3>
                </div>
                <p
                  className="text-base mb-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Visit us at:
                </p>
                <p
                  className="text-lg font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {siteConfig.address}
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section
        className="py-20 lg:py-28"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl mb-4">
                Join the Lab
              </h2>
              <p
                className="text-lg leading-relaxed max-w-2xl mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                We are always looking for motivated researchers at all levels —
                from undergraduate students to postdoctoral fellows — who are
                passionate about systems biology, quantitative methods, and
                understanding the fundamental principles of aging.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
              {[
                {
                  title: "PhD Positions",
                  description:
                    "We recruit through the Westlake University Systems Biology program. Contact us to discuss potential projects.",
                },
                {
                  title: "Postdocs",
                  description:
                    "We welcome postdocs with backgrounds in physics, mathematics, engineering, or biology. Send your CV and research statement.",
                },
                {
                  title: "Research Assistants",
                  description:
                    "We occasionally have openings for research assistants. Check back or send an open application.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3
                    className="text-base mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div className="mt-12 text-center">
              <a
                href={`mailto:${siteConfig.email}?subject=Lab Position Inquiry`}
                className="inline-flex items-center gap-1.5 text-sm font-medium no-underline transition-opacity duration-200 hover:opacity-70"
                style={{ color: "var(--color-primary)" }}
              >
                Send Inquiry
                <ArrowRight size={13} />
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
