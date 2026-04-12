import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Flower Walls", "Arches", "Backdrops", "Events"];

const galleryItems = [
  { id: 1, category: "Flower Walls", color: "#E8C4C4", label: "Blush flower wall" },
  { id: 2, category: "Arches", color: "#B5BFA8", label: "Garden arch installation" },
  { id: 3, category: "Backdrops", color: "#E8DED1", label: "Balloon backdrop" },
  { id: 4, category: "Events", color: "#C9B99A", label: "Full event design" },
  { id: 5, category: "Flower Walls", color: "#C4A4A4", label: "Rose wall installation" },
  { id: 6, category: "Arches", color: "#F5F0EA", label: "Ceremony arch" },
  { id: 7, category: "Backdrops", color: "#B8A99A", label: "Draped backdrop" },
  { id: 8, category: "Events", color: "#E8C4C4", label: "Baby shower styling" },
  { id: 9, category: "Flower Walls", color: "#B5BFA8", label: "White flower wall" },
  { id: 10, category: "Arches", color: "#E8DED1", label: "Boho arch" },
  { id: 11, category: "Backdrops", color: "#C9B99A", label: "Shimmer backdrop" },
  { id: 12, category: "Events", color: "#C4A4A4", label: "Brand activation" },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-brand-warm-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-onyx tracking-[4px] mb-4">Gallery</h1>
            <p className="font-body font-light text-sm text-muted-foreground">A glimpse into our recent work</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-14">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-body text-[11px] uppercase tracking-[2px] px-4 py-2 transition-all duration-300 border ${
                  filter === c
                    ? "border-brand-champagne text-brand-champagne"
                    : "border-transparent text-muted-foreground hover:text-brand-onyx"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <ScrollReveal key={item.id}>
                <div
                  className="relative group cursor-pointer break-inside-avoid overflow-hidden"
                  onClick={() => setLightbox(item.id)}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      backgroundColor: item.color,
                      aspectRatio: item.id % 3 === 0 ? "3/4" : item.id % 3 === 1 ? "4/3" : "1/1",
                    }}
                  >
                    <span className="font-body text-[11px] uppercase tracking-[2px] text-brand-taupe">{item.label}</span>
                  </div>
                  <div className="absolute inset-0 bg-brand-onyx/0 group-hover:bg-brand-onyx/30 transition-all duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                    <span className="font-body text-[10px] uppercase tracking-[3px] text-white">{item.category}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-brand-onyx/80 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const item = galleryItems.find((g) => g.id === lightbox);
              if (!item) return null;
              return (
                <div
                  className="aspect-[4/3] flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <span className="font-body text-[13px] uppercase tracking-[3px] text-brand-taupe">{item.label}</span>
                </div>
              );
            })()}
            <button
              onClick={() => setLightbox(null)}
              className="mt-4 mx-auto block font-body text-[11px] uppercase tracking-[3px] text-white/60 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
