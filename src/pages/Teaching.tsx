import React from "react";
import FadeInSection from "@/components/FadeInSection";
import {
  BookOpen,
  GraduationCap,
  FileText,
  CalendarDays,
  Clock,
  MapPin,
  Globe,
  Users,
  Download,
  ListChecks,
} from "lucide-react";
import { course } from "@/data/course";
import type { DownloadItem, CoursePerson } from "@/data/course";

const SectionHeader: React.FC<{
  icon: React.ReactNode;
  title: string;
}> = ({ icon, title }) => (
  <FadeInSection>
    <div className="flex items-center gap-2.5 mb-8">
      <span style={{ color: "var(--color-secondary)" }}>{icon}</span>
      <h2 className="text-xl">{title}</h2>
    </div>
  </FadeInSection>
);

const MetaRow: React.FC<{
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}> = ({ icon, label, children }) => (
  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2.5">
    <span
      className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider sm:w-36 shrink-0"
      style={{ color: "var(--text-muted)" }}
    >
      {icon}
      {label}
    </span>
    <span className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
      {children}
    </span>
  </div>
);

const PersonList: React.FC<{ people: CoursePerson[] }> = ({ people }) => (
  <div className="space-y-1">
    {people.map((p, i) => (
      <div key={i}>
        <span>{p.name}</span>
        {p.email && (
          <span style={{ color: "var(--text-muted)" }}>
            {" "}
            ({p.email})
          </span>
        )}
        {p.note && (
          <span style={{ color: "var(--text-muted)" }}> — {p.note}</span>
        )}
      </div>
    ))}
  </div>
);

const DownloadRow: React.FC<{ item: DownloadItem }> = ({ item }) => (
  <a
    href={item.file}
    download
    className="group flex items-center justify-between gap-3 py-2.5 no-underline transition-opacity duration-200 hover:opacity-70"
  >
    <span className="flex items-center gap-2 min-w-0">
      <FileText
        size={16}
        className="shrink-0"
        style={{ color: "var(--color-secondary)" }}
      />
      <span
        className="text-base font-medium truncate"
        style={{ color: "var(--text-primary)" }}
      >
        {item.label}
      </span>
    </span>
    <Download
      size={15}
      className="shrink-0"
      style={{ color: "var(--color-secondary)" }}
    />
  </a>
);

const Teaching: React.FC = () => {
  const website = course.website || "TBA";

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
                Education
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl mb-6"
                style={{ letterSpacing: "-0.015em" }}
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

      {/* Course Introduction */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            icon={<GraduationCap size={20} />}
            title="Course Introduction"
          />

          <FadeInSection delay={0.1}>
            <div>
              <h3 className="text-lg mb-1">
                {course.code}: {course.title}
              </h3>

              <div className="mt-6">
                <MetaRow icon={<CalendarDays size={14} />} label="Term">
                  {course.term}
                </MetaRow>
                <MetaRow icon={<Clock size={14} />} label="Time">
                  {course.time}
                </MetaRow>
                <MetaRow icon={<MapPin size={14} />} label="Location">
                  {course.location}
                </MetaRow>
                <MetaRow icon={<Globe size={14} />} label="Website">
                  {website}
                </MetaRow>
                <MetaRow icon={<Users size={14} />} label="Lecturer">
                  <PersonList people={course.lecturers} />
                </MetaRow>
                <MetaRow icon={<GraduationCap size={14} />} label="TAs">
                  <PersonList people={course.tas} />
                </MetaRow>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Course Description
                  </p>
                  {course.description.map((para, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed mb-3 last:mb-0"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Prerequisites
                  </p>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {course.prerequisites}
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Course Outline */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            icon={<FileText size={20} />}
            title="Syllabus"
          />

          <FadeInSection delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {course.outlineFiles.map((item) => (
                <DownloadRow key={item.file} item={item} />
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Course Material */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            icon={<BookOpen size={20} />}
            title="Downloadable materials"
          />

          {/* Downloadable materials */}
          <FadeInSection delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              {course.materials.map((item) => (
                <DownloadRow key={item.file} item={item} />
              ))}
            </div>
          </FadeInSection>

          {/* Lectures */}
          <FadeInSection delay={0.15}>
            <h3 className="text-base mt-10 mb-2">Lecture Notes</h3>
            <div>
              {course.lectures.map((lecture, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3"
                >
                  <span
                    className="text-xs font-semibold uppercase tracking-wider w-20 shrink-0"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Lecture {i + 1}
                  </span>
                  <span
                    className="text-base flex-1 leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {lecture.title}
                  </span>
                  {lecture.file ? (
                    <a
                      href={lecture.file}
                      download
                      className="no-underline hover:opacity-80"
                    >
                      <Download
                        size={15}
                        style={{ color: "var(--color-secondary)" }}
                      />
                    </a>
                  ) : (
                    <span
                      className="text-xs shrink-0"
                      style={{ color: "var(--text-muted)" }}
                    >
                      coming soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Problem Sets (separate, after all lectures) */}
          <FadeInSection delay={0.2}>
            <h3
              className="flex items-center gap-2 text-base mt-10 mb-2"
            >
              <ListChecks size={16} style={{ color: "var(--color-secondary)" }} />
              Problem Sets
            </h3>
            <div>
              {course.problemSets.map((ps, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 py-3"
                >
                  <span
                    className="text-base flex-1 leading-relaxed"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {ps.title}
                  </span>
                  {ps.file ? (
                    <a
                      href={ps.file}
                      download
                      className="no-underline hover:opacity-80"
                    >
                      <Download
                        size={15}
                        style={{ color: "var(--color-secondary)" }}
                      />
                    </a>
                  ) : (
                    <span
                      className="text-xs shrink-0"
                      style={{ color: "var(--text-muted)" }}
                    >
                      coming soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default Teaching;
