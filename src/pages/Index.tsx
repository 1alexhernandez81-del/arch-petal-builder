import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TaglineWordmark } from "@/components/Logo";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-flower-wall.jpg";
import flowerWallImg from "@/assets/service-flower-wall.jpg";
import floralArchImg from "@/assets/service-floral-arch.jpg";
import balloonImg from "@/assets/service-balloon.jpg";
import drapedImg from "@/assets/service-draped.jpg";
import customStylingImg from "@/assets/service-custom-styling.jpg";
import fullDesignImg from "@/assets/service-full-design.jpg";

const services = [
  { name: "Flower Walls", desc: "Lush, statement-making flower walls designed to transform any space into a botanical wonderland.", img: flowerWallImg },
  { name: "Floral Arches", desc: "Stunning arched installations that frame your most important moments with natural beauty.", img: floralArchImg },
  { name: "Balloon Backdrops", desc: "Modern, sculptural balloon installations crafted with an elevated aesthetic.", img: balloonImg },
  { name: "Draped Backdrops", desc: "Flowing fabric installations that add softness, movement, and romance to any event.", img: drapedImg },
  { name: "Custom Event Styling", desc: "Bespoke styling packages tailored to your unique vision and celebration.", img: customStylingImg },
  { name: "Full Event Design", desc: "Comprehensive design direction from concept to installation for a cohesive experience.", img: fullDesignImg },
];

const Index = () => (
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

    {/* Testimonial */}
    <section className="bg-brand-ivory py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="font-heading italic text-xl md:text-2xl lg:text-3xl text-brand-onyx leading-relaxed mb-6">
            "This is where a client testimonial will go. Arch & Petal made our event absolutely magical."
          </p>
          <p className="font-body font-light text-[11px] uppercase tracking-[3px] text-muted-foreground">
            — Client Name, Event Type
          </p>
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

export default Index;
