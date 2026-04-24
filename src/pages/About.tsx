import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useSEO } from "@/hooks/use-seo";

import founderImg from "@/assets/founder.jpg";

const values = [
  { title: "Elevated Design", desc: "Every detail is intentionally curated to create an experience that feels luxurious, polished, and uniquely yours." },
  { title: "Personal Touch", desc: "We believe in building genuine relationships with our clients and treating every event as our own." },
  { title: "Unforgettable Moments", desc: "We design spaces that make people pause, take a breath, and remember the beauty of the moment." },
];

const AboutPage = () => {
  useSEO({
    title: "About | Arch & Petal Co.",
    description: "Meet Jasmine Hernandez, founder of Arch & Petal Co. Boutique event styling with a personal touch for the Bay Area and Sacramento.",
  });

  return (
  <div className="min-h-screen">
    <Navbar />

    <section className="bg-brand-warm-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-onyx tracking-[4px]">About</h1>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <ScrollReveal>
          <div className="aspect-[3/4] overflow-hidden">
            <img src={founderImg} alt="Jasmine Hernandez, Founder & Creative Director" className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div>
            <h2 className="font-heading text-[13px] uppercase tracking-[6px] text-muted-foreground mb-4">Meet the Founder</h2>
            <p className="font-heading text-3xl md:text-4xl text-brand-onyx tracking-[2px] mb-2">Jasmine Hernandez</p>
            <p className="font-body font-light text-[11px] uppercase tracking-[3px] text-brand-champagne mb-8">Founder & Creative Director</p>
            <div className="space-y-4 font-body font-light text-sm text-muted-foreground leading-[1.8]">
              <p>Arch & Petal Co. was born from a lifelong passion for design, beauty, and the power of celebration. Growing up in the Bay Area, Jasmine was surrounded by the region's incredible blend of natural beauty and creative energy — a combination that deeply shaped her aesthetic vision.</p>
              <p>After years of styling events for friends and family, Jasmine turned her passion into a business with one clear mission: to elevate every event into an unforgettable experience. She believes that the right backdrop doesn't just decorate a space — it transforms the entire feeling of a celebration.</p>
              <p>Today, Arch & Petal Co. serves clients across the Bay Area and Sacramento, bringing a boutique, hands-on approach to every project. From intimate baby showers to large-scale brand activations, Jasmine and her team pour creativity and care into every detail.</p>
              <p>When she's not designing installations, you can find Jasmine exploring local flower markets, experimenting with new color palettes, or dreaming up the next big design.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-brand-ivory py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-[13px] uppercase tracking-[6px] text-muted-foreground text-center mb-16">Our Values</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v) => (
            <ScrollReveal key={v.title}>
              <div className="text-center">
                <h3 className="font-heading text-xl tracking-[2px] text-brand-onyx mb-4">{v.title}</h3>
                <p className="font-body font-light text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default AboutPage;
