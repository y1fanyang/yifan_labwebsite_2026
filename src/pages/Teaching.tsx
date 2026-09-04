import React from "react";
import FadeInSection from "@/components/FadeInSection";
import {
  GraduationCap,
  FileText,
  CalendarDays,
  Clock,
  MapPin,
  Globe,
  Users,
  Download,
  ListChecks,
  Presentation,
  NotebookText,
} from "lucide-react";
import { course } from "@/data/course";
import type { DownloadItem, CoursePerson } from "@/data/course";
import { obfuscateEmail } from "@/lib/utils";

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
    <div className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
      {children}
    </div>
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
            ({obfuscateEmail(p.email)})
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
  // Slides submodule shows only lectures that have a file attached.
  const slides = course.lectures
    .filter((lecture) => lecture.file)
    .map((lecture) => ({ label: lecture.title, file: lecture.file as string }));

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
                {course.website && (
                  <MetaRow icon={<Globe size={14} />} label="Website">
                    {course.website}
                  </MetaRow>
                )}
                <MetaRow icon={<Users size={14} />} label="Lecturers">
                  <PersonList people={course.lecturers} />
                </MetaRow>
                <MetaRow icon={<GraduationCap size={14} />} label="TAs">
                  <PersonList people={course.tas} />
                </MetaRow>
              </div>

              <div className="mt-6">
                <MetaRow icon={<Clock size={14} />} label="TA Office hours">
                  {course.officeHours}
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

      {/* Downloadable material */}
      <section
        className="py-16 lg:py-20"
        style={{ backgroundColor: "var(--bg-card)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            icon={<Download size={20} />}
            title="Downloadable material"
          />

          <FadeInSection delay={0.1}>
            <div className="space-y-10">
              {/* Syllabus */}
              <div>
                <h3 className="flex items-center gap-2 text-base mb-3">
                  <FileText size={16} style={{ color: "var(--color-secondary)" }} />
                  Syllabus
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {course.outlineFiles.map((item) => (
                    <DownloadRow key={item.file} item={item} />
                  ))}
                </div>
              </div>

              {/* Slides */}
              <div>
                <h3 className="flex items-center gap-2 text-base mb-3">
                  <Presentation size={16} style={{ color: "var(--color-secondary)" }} />
                  Slides
                </h3>
                {slides.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2">
                    {slides.map((item) => (
                      <DownloadRow key={item.file} item={item} />
                    ))}
                  </div>
                ) : (
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Slides will be posted here after each lecture.
                  </p>
                )}
              </div>

              {/* Problem Sets — shown once files exist */}
              {course.problemSets.some((ps) => ps.file) && (
                <div>
                  <h3 className="flex items-center gap-2 text-base mb-3">
                    <ListChecks size={16} style={{ color: "var(--color-secondary)" }} />
                    Problem Sets
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {course.problemSets
                      .filter((ps) => ps.file)
                      .map((ps) => (
                        <DownloadRow
                          key={ps.title}
                          item={{ label: ps.title, file: ps.file as string }}
                        />
                      ))}
                  </div>
                </div>
              )}

              {/* Lecture Notes — shown once files exist */}
              {course.lectureNotes.some((note) => note.file) && (
                <div>
                  <h3 className="flex items-center gap-2 text-base mb-3">
                    <NotebookText
                      size={16}
                      style={{ color: "var(--color-secondary)" }}
                    />
                    Lecture Notes
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {course.lectureNotes
                      .filter((note) => note.file)
                      .map((note) => (
                        <DownloadRow
                          key={note.title}
                          item={{ label: note.title, file: note.file as string }}
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Course Schedule */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader
            icon={<ListChecks size={20} />}
            title="Course Schedule"
          />

          <FadeInSection delay={0.1}>
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
