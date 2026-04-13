import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";

const services = [
  {
    name: "Flower Walls",
    desc: "Our signature flower walls are meticulously crafted to create a breathtaking focal point for any event. From lush romantic blooms to modern minimalist arrangements, each wall is designed to complement your event's aesthetic perfectly. We work with premium silk and preserved florals to ensure every petal looks flawless throughout your celebration.",
    img: "https://images.unsplash.com/photo-1561128290-006dc4827214?w=800&q=80&fit=crop",
    price: "$500",
  },
  {
    name: "Floral Arches",
    desc: "Frame your most meaningful moments with one of our stunning floral arch installations. Whether it's a wedding ceremony, proposal backdrop, or event entrance, our arches combine structural elegance with botanical artistry. Available in half-moon, circular, triangular, and custom shapes to match your vision.",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop",
    price: "$450",
  },
  {
    name: "Balloon Backdrops",
    desc: "Elevated balloon artistry that goes far beyond the ordinary. Our sculptural balloon installations feature organic compositions, color-matched palettes, and modern design sensibility. Perfect for birthdays, baby showers, brand activations, and milestone celebrations that deserve a showstopping backdrop.",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&fit=crop",
    price: "$400",
  },
  {
    name: "Draped Backdrops",
    desc: "Flowing fabric installations that add romance, depth, and movement to any space. Our draped backdrops use premium fabrics in custom colors, layered with greenery, florals, or lighting to create an ethereal atmosphere. Ideal for ceremonies, sweetheart tables, and photo opportunities.",
    img: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80&fit=crop",
    price: "$450",
  },
  {
    name: "Custom Event Styling",
    desc: "Every celebration is unique, and our custom styling packages are designed to bring your personal vision to life. From concept development to on-site installation, we handle every detail — centerpieces, signage, welcome areas, dessert displays, and more — ensuring a cohesive and elevated look throughout.",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&fit=crop",
    price: "$1,000",
  },
  {
    name: "Full Event Design",
    desc: "Our comprehensive event design service covers everything from the initial creative direction to full day-of installation and styling. We collaborate closely with you and your vendors to create a seamless, magazine-worthy experience that reflects your story and style from first glance to last dance.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&fit=crop",
    price: "$2,000",
  },
];

const ServicesPage = () => {
  useSEO({
    title: "Event Styling Services | Arch & Petal Co.",
    description: "Flower walls, floral arches, balloon backdrops, draped installations, and full event design. Custom event styling starting at $400 in the Bay Area and Sacramento.",
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="bg-brand-warm-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-onyx tracking-[4px] mb-4">Our Services</h1>
            <p className="font-body font-light text-sm text-muted-foreground">Crafted with intention. Designed to inspire.</p>
          </ScrollReveal>
        </div>
      </section>

      {services.map((s, i) => (
        <section key={s.name} className={`${i % 2 === 0 ? "bg-white" : "bg-brand-ivory"} py-20 md:py-28 px-6`}>
          <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 !== 0 ? "md:[direction:rtl]" : ""}`}>
            <ScrollReveal className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
              <div className="aspect-[3/4] overflow-hidden">
                <img src={s.img} alt={`${s.name} installation`} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal className={i % 2 !== 0 ? "md:[direction:ltr]" : ""}>
              <div>
                <h2 className="font-heading text-2xl md:text-3xl text-brand-onyx tracking-[3px] mb-6">{s.name}</h2>
                <p className="font-body font-light text-sm text-muted-foreground leading-[1.8] mb-8">{s.desc}</p>
                <p className="font-body text-[11px] uppercase tracking-[3px] text-brand-champagne mb-8">Starting at {s.price}</p>
                <Link to="/contact">
                  <Button variant="outline" size="sm">Inquire</Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      <section className="bg-brand-warm-white py-20 md:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-brand-onyx mb-4">Ready to Get Started?</h2>
            <p className="font-body font-light text-sm text-muted-foreground mb-10">Let's design something unforgettable together.</p>
            <Link to="/contact">
              <Button size="lg">Book a Consultation</Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
