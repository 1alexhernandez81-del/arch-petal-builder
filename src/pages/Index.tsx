import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TaglineWordmark } from "@/components/Logo";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";

const heroImg = "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?w=1920&q=80&fit=crop";

const services = [
  { name: "Flower Walls", desc: "Lush, statement-making flower walls designed to transform any space into a botanical wonderland.", img: "https://images.unsplash.com/photo-1561128290-006dc4827214?w=800&q=80&fit=crop&crop=center" },
  { name: "Floral Arches", desc: "Stunning arched installations that frame your most important moments with natural beauty.", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop&crop=center" },
  { name: "Balloon Backdrops", desc: "Modern, sculptural balloon installations crafted with an elevated aesthetic.", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fit=crop&crop=center" },
  { name: "Draped Backdrops", desc: "Flowing fabric installations that add softness, movement, and romance to any event.", img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80&fit=crop&crop=center" },
  { name: "Custom Event Styling", desc: "Bespoke styling packages tailored to your unique vision and celebration.", img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&fit=crop&crop=center" },
  { name: "Full Event Design", desc: "Comprehensive design direction from concept to installation for a cohesive experience.", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&fit=crop&crop=center" },
];

const testimonials = [
  {
    quote: "I cannot say enough good things about working with Jasmine. We booked the balloon arch and flower wall for my sister's baby shower in Walnut Creek and the setup was absolutely breathtaking. She arrived early, had everything installed in under an hour, and the photos came out unreal. Every single guest was asking for her information.",
    name: "Maria L.",
    event: "Baby Shower, Walnut Creek",
  },
  {
    quote: "We went back and forth between DIY and hiring a professional for our daughter's first birthday. So glad we chose Arch & Petal. The organic balloon garland on the arch with the custom blush and sage color palette was exactly what I had in my head but could never have pulled off myself. Worth every penny.",
    name: "Priya K.",
    event: "Birthday Party, Elk Grove",
  },
  {
    quote: "Jasmine styled our bridal shower at a friend's home in Oakland and made a small backyard feel like a high-end venue. The draped backdrop behind the gift table was stunning. She was responsive, professional, and genuinely cared about making everything perfect. Already planning to hire her for the wedding.",
    name: "Nicole T.",
    event: "Bridal Shower, Oakland",
  },
  {
    quote: "We used Arch & Petal for a product launch event in downtown Sacramento and the flower wall was the star of the show. Every attendee took photos in front of it, which meant our brand was all over social media for days afterward. The ROI on that single backdrop was incredible.",
    name: "Daniel R.",
    event: "Brand Activation, Sacramento",
  },
  {
    quote: "From the first DM to the final breakdown, the entire experience was seamless. I sent Jasmine a Pinterest board with my vision and she came back with a color palette and design plan that was even better than what I imagined. The arch at our proposal spot in Golden Gate Park was magazine-worthy. She genuinely has an eye for this.",
    name: "Amanda C.",
    event: "Proposal, San Francisco",
  },
];

const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  useSEO({
    title: "Arch & Petal Co. | Boutique Event Styling | Bay Area & Sacramento",
    description: "Premium flower walls, floral arches, balloon backdrops, and custom event styling for the Bay Area and Sacramento. Now booking 2026 events.",
  });

  const goTo = useCallback((index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setFade(true);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((currentTestimonial + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentTestimonial, goTo]);

  const t = testimonials[currentTestimonial];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-brand-warm-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <TaglineWordmark className="w-full max-w-md mx-auto mb-12" />
          </ScrollReveal>
          <ScrollReveal>
            <img
              src={heroImg}
              alt="Luxurious white and blush flower wall installation at an elegant event"
              width={1920}
              height={1080}
              className="w-full max-w-3xl mx-auto object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="font-heading text-[13px] md:text-[14px] font-light uppercase tracking-[6px] text-muted-foreground text-center mb-16">
              What We Create
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((s) => (
              <ScrollReveal key={s.name}>
                <div className="group cursor-pointer border border-transparent hover:border-brand-champagne transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl md:text-2xl tracking-[2px] text-brand-onyx mb-2">{s.name}</h3>
                    <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-ivory py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="min-h-[280px] md:min-h-[220px] flex flex-col items-center justify-center">
              <div
                className={`transition-opacity duration-300 ${fade ? "opacity-100" : "opacity-0"}`}
              >
                <p className="font-heading italic text-xl md:text-2xl lg:text-3xl text-brand-onyx leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <p className="font-body font-light text-[11px] uppercase tracking-[3px] text-muted-foreground">
                  — {t.name}, {t.event}
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === currentTestimonial ? "bg-brand-champagne w-6" : "bg-brand-beige hover:bg-brand-taupe"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-warm-white py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-brand-onyx mb-4">
              Let's Create Something Beautiful
            </h2>
            <p className="font-body font-light text-sm md:text-base text-muted-foreground mb-10">
              Now booking for 2026 events in the Bay Area and Sacramento
            </p>
            <Link to="/contact">
              <Button size="lg">Get a Quote</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
