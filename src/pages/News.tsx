import React, { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import SurvivalCurve from "@/components/SurvivalCurve";
import { Calendar, MapPin, ChevronLeft, ChevronRight, X } from "lucide-react";

interface NewsItem {
  id: string;
  date: string;
  title: string;
  description: string;
  location: string;
  images: string[];
  type: "activity" | "publication" | "people";
}

const newsItems: NewsItem[] = [
  {
    id: "spring-2026",
    date: "2026.05.21",
    title: "Lab Spring Outing to Qingshan Lake",
    description:
      "The lab visited Qingshan Lake for a spring outing. We enjoyed hiking around the lake, barbecues, and team-building activities. A great day to relax and bond outside the lab!",
    location: "Qingshan Lake",
    type: "activity",
    images: [
      "/images/news/spring-2026/8129eed81b98335e15b52dd9e20217c0.jpg",
      "/images/news/spring-2026/94335971665343cce71a7dd308253bf3.jpg",
      "/images/news/spring-2026/053339d20719753d608ab8a15d86e5c8.jpg",
      "/images/news/spring-2026/c94e18bc7754ae751c2bc1932d234e4e.jpg",
    ],
  },
  {
    id: "autumn-2025",
    date: "2025.12.02",
    title: "Lab Autumn Outing to Jiuxi",
    description:
      "The lab had a wonderful autumn outing at Jiuxi. We hiked through the scenic trails, enjoyed the fall foliage, and spent quality time together as a team.",
    location: "Jiuxi, Hangzhou",
    type: "activity",
    images: [
      "/images/news/autumn-2025/qiuyou1.jpg",
      "/images/news/autumn-2025/qiuyou2.jpg",
      "/images/news/autumn-2025/qiuyou3.jpg",
      "/images/news/autumn-2025/qiuyou4.jpg",
    ],
  },
];

const typeLabels: Record<string, { label: string; color: string }> = {
  activity: { label: "Activity", color: "var(--color-primary)" },
  publication: { label: "Publication", color: "var(--color-secondary)" },
  people: { label: "People", color: "var(--text-muted)" },
};

const ImageGallery: React.FC<{
  images: string[];
  onClose: () => void;
  initialIndex: number;
}> = ({ images, onClose, initialIndex }) => {
  const [current, setCurrent] = useState(initialIndex);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85" />
      <div
        className="relative z-10 flex flex-col items-center max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        <img
          src={images[current]}
          alt={`Gallery image ${current + 1}`}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
        {images.length > 1 && (
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-white/80 text-sm">
              {current + 1} / {images.length}
            </span>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const News: React.FC = () => {
  const [gallery, setGallery] = useState<{
    images: string[];
    index: number;
  } | null>(null);

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
                Updates
              </p>
              <h1
                className="text-3xl sm:text-4xl lg:text-5xl mb-6"
                style={{
                  color: "var(--color-primary)",
                  letterSpacing: "-0.015em",
                }}
              >
                News
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Lab activities, team events, and research updates.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* News List */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {newsItems.map((item, itemIndex) => (
              <FadeInSection key={item.id} delay={itemIndex * 0.1}>
                <article
                  className="rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Header */}
                  <div className="p-6 lg:p-8 pb-4">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          backgroundColor: "var(--color-accent)",
                          color: typeLabels[item.type]?.color || "var(--color-primary)",
                        }}
                      >
                        {typeLabels[item.type]?.label || item.type}
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <Calendar size={12} />
                        {item.date}
                      </span>
                      <span
                        className="flex items-center gap-1 text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        <MapPin size={12} />
                        {item.location}
                      </span>
                    </div>
                    <h2
                      className="text-xl lg:text-2xl mb-3"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Image Grid */}
                  {item.images.length > 0 && (
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <div
                        className={`grid gap-3 ${
                          item.images.length === 1
                            ? "grid-cols-1 max-w-md"
                            : item.images.length === 2
                            ? "grid-cols-2"
                            : item.images.length === 3
                            ? "grid-cols-3"
                            : "grid-cols-2 sm:grid-cols-4"
                        }`}
                      >
                        {item.images.map((img, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() =>
                              setGallery({ images: item.images, index: imgIndex })
                            }
                            className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                            style={{
                              backgroundColor: "var(--bg-primary)",
                            }}
                          >
                            <img
                              src={img}
                              alt={`${item.title} - photo ${imgIndex + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      {gallery && (
        <ImageGallery
          images={gallery.images}
          initialIndex={gallery.index}
          onClose={() => setGallery(null)}
        />
      )}
    </div>
  );
};

export default News;
