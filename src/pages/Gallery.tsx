import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const categories = ["All", "Flower Walls", "Arches", "Backdrops", "Events"];

const galleryItems = [
  { id: 1, category: "Flower Walls", img: "https://images.unsplash.com/photo-1561128290-006dc4827214?w=800&q=80&fit=crop", label: "Blush & White Rose Wall" },
  { id: 2, category: "Flower Walls", img: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=800&q=80&fit=crop", label: "Romantic Flower Wall Installation" },
  { id: 3, category: "Flower Walls", img: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80&fit=crop", label: "Garden Rose Backdrop" },
  { id: 4, category: "Flower Walls", img: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=800&q=80&fit=crop", label: "Ivory Floral Wall" },
  { id: 5, category: "Flower Walls", img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80&fit=crop", label: "Peony Wall Close-Up" },
  { id: 6, category: "Arches", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop", label: "Classic Ceremony Arch" },
  { id: 7, category: "Arches", img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&fit=crop", label: "Garden Arch with Greenery" },
  { id: 8, category: "Arches", img: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=800&q=80&fit=crop", label: "Sunset Floral Arch" },
  { id: 9, category: "Arches", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80&fit=crop", label: "Draped Ceremony Arch" },
  { id: 10, category: "Backdrops", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fit=crop", label: "Organic Balloon Installation" },
  { id: 11, category: "Backdrops", img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80&fit=crop", label: "Sheer Draped Backdrop" },
  { id: 12, category: "Backdrops", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80&fit=crop", label: "Celebration Backdrop" },
  { id: 13, category: "Backdrops", img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80&fit=crop", label: "Dessert Table Backdrop" },
  { id: 14, category: "Events", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&fit=crop", label: "Styled Baby Shower" },
  { id: 15, category: "Events", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&fit=crop", label: "Grand Reception Design" },
  { id: 16, category: "Events", img: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80&fit=crop", label: "Intimate Bridal Celebration" },
  { id: 17, category: "Events", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop", label: "Wedding Table Styling" },
  { id: 18, category: "Events", img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80&fit=crop", label: "Birthday Party Setup" },
];

const aspectRatios = ["3/4", "4/3", "1/1", "4/5", "3/4", "1/1", "4/3", "3/4", "1/1", "4/5", "3/4", "4/3", "1/1", "3/4", "4/3", "4/5", "1/1", "3/4"];

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

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <ScrollReveal key={item.id}>
                <div
                  className="relative group cursor-pointer break-inside-avoid overflow-hidden"
                  onClick={() => setLightbox(item.id)}
                >
                  <div
                    className="overflow-hidden"
                    style={{ aspectRatio: aspectRatios[(item.id - 1) % aspectRatios.length] }}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
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
                <img src={item.img} alt={item.label} className="w-full object-contain max-h-[80vh]" />
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
