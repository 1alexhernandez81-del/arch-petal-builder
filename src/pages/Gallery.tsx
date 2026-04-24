import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useSEO } from "@/hooks/use-seo";
import flowerWallImg from "@/assets/flower-wall.jpg";
import floralArchImg from "@/assets/floral-arch.jpg";
import balloonImg from "@/assets/balloon-backdrop.jpg";
import drapedImg from "@/assets/draped-backdrop.jpg";
import stylingImg from "@/assets/event-styling.jpg";
import fullDesignImg from "@/assets/full-design.jpg";
import gFlower1 from "@/assets/gallery-flower-1.jpg";
import gFlower2 from "@/assets/gallery-flower-2.jpg";
import gFlower3 from "@/assets/gallery-flower-3.jpg";
import gArch1 from "@/assets/gallery-arch-1.jpg";
import gArch2 from "@/assets/gallery-arch-2.jpg";
import gArch3 from "@/assets/gallery-arch-3.jpg";
import gBackdrop1 from "@/assets/gallery-backdrop-1.jpg";
import gBackdrop2 from "@/assets/gallery-backdrop-2.jpg";
import gBackdrop3 from "@/assets/gallery-backdrop-3.jpg";
import gEvent1 from "@/assets/gallery-event-1.jpg";
import gEvent2 from "@/assets/gallery-event-2.jpg";
import gEvent3 from "@/assets/gallery-event-3.jpg";

const categories = ["All", "Flower Walls", "Arches", "Backdrops", "Events"];

const galleryItems = [
  { id: 1, category: "Flower Walls", img: flowerWallImg, label: "Blush & White Rose Wall" },
  { id: 2, category: "Flower Walls", img: gFlower1, label: "Ivory Peony Close-Up" },
  { id: 3, category: "Flower Walls", img: gFlower2, label: "Garden Rose Backdrop" },
  { id: 4, category: "Flower Walls", img: gFlower3, label: "Sweetheart Rose Wall" },
  { id: 5, category: "Arches", img: floralArchImg, label: "Classic Ceremony Arch" },
  { id: 6, category: "Arches", img: gArch1, label: "Modern Triangular Arch" },
  { id: 7, category: "Arches", img: gArch2, label: "Sunset Floral Arch" },
  { id: 8, category: "Arches", img: gArch3, label: "Draped Garden Arch" },
  { id: 9, category: "Backdrops", img: balloonImg, label: "Blush Balloon Installation" },
  { id: 10, category: "Backdrops", img: gBackdrop1, label: "Nude & Chrome Balloon Wall" },
  { id: 11, category: "Backdrops", img: gBackdrop2, label: "Pastel Welcome Backdrop" },
  { id: 12, category: "Backdrops", img: drapedImg, label: "Sheer Draped Backdrop" },
  { id: 13, category: "Backdrops", img: gBackdrop3, label: "Dessert Table Backdrop" },
  { id: 14, category: "Events", img: stylingImg, label: "Styled Baby Shower" },
  { id: 15, category: "Events", img: fullDesignImg, label: "Grand Reception Design" },
  { id: 16, category: "Events", img: gEvent1, label: "Intimate Bridal Celebration" },
  { id: 17, category: "Events", img: gEvent2, label: "First Birthday Setup" },
  { id: 18, category: "Events", img: gEvent3, label: "Brand Activation Wall" },
];

const aspectRatios = ["3/4", "4/3", "1/1", "4/5", "3/4", "1/1", "4/3", "3/4", "1/1", "4/5", "3/4", "4/3", "1/1", "3/4", "4/3", "4/5", "1/1", "3/4"];

const GalleryPage = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  useSEO({
    title: "Gallery | Arch & Petal Co.",
    description: "Browse our portfolio of flower walls, floral arches, balloon backdrops, and styled events across the San Francisco Bay Area and Sacramento.",
  });

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
