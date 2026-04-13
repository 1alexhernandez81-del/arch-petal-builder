import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/use-seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const aLaCarteItems = [
  { name: "Arch Rental (Bare)", desc: "Structure only. Perfect for clients adding their own florals or decor.", price: "From $250" },
  { name: "Arch with Draping", desc: "Elegant sheer or fabric draping on your choice of arch. Multiple color options.", price: "From $450" },
  { name: "Arch with Balloon Garland", desc: "Custom color palette balloon garland styled on arch. Organic or structured.", price: "From $550" },
  { name: "Arch with Silk Florals", desc: "Premium silk floral arrangements styled on arch. Reusable and photo-perfect.", price: "From $650" },
  { name: "Flower Wall Backdrop", desc: "8x8 silk flower wall. Stunning photo backdrop for any event.", price: "From $500" },
  { name: "Balloon Backdrop", desc: "Custom balloon installation as standalone backdrop. Great for dessert tables.", price: "From $400" },
];

const packages = [
  {
    name: "Petite",
    price: "$600",
    popular: false,
    features: [
      "1 styled arch (draping, balloons, or silk florals)",
      "Custom color palette consultation",
      "Delivery and professional setup",
      "Day-of breakdown and pickup",
      "Ideal for intimate gatherings",
    ],
  },
  {
    name: "Classic",
    price: "$1,000",
    popular: true,
    features: [
      "1 fully styled arch",
      "1 accent piece (balloon garland, small backdrop, or table styling)",
      "Custom color palette consultation",
      "Design preview before your event",
      "Delivery, professional setup, and breakdown",
      "Perfect for baby showers, birthdays, and bridal showers",
    ],
  },
  {
    name: "Luxe",
    price: "$2,000",
    popular: false,
    features: [
      "2 styled arches or 1 arch plus full backdrop",
      "Additional accent pieces and table styling",
      "Full design consultation with mood board",
      "Design preview and revisions",
      "Delivery, professional setup, and breakdown",
      "Ideal for weddings, proposals, and brand activations",
    ],
  },
];

const addOns = [
  { name: "Custom neon sign rental", price: "From $150" },
  { name: "Balloon garland accent (6-10 ft)", price: "From $250" },
  { name: "Table styling (dessert or gift table)", price: "From $200" },
  { name: "Additional arch styling", price: "From $350" },
  { name: "Custom signage (welcome sign, seating chart)", price: "From $100" },
  { name: "Extended rental (multi-day)", price: "From $150" },
];

const steps = [
  { num: "01", title: "Inquire", desc: "Fill out our contact form or DM us on Instagram with your event date, type, and vision." },
  { num: "02", title: "Design", desc: "We create a custom proposal with a color palette and styling plan tailored to your event." },
  { num: "03", title: "Confirm", desc: "Review your design preview, finalize details, and secure your date with a 50% deposit." },
  { num: "04", title: "Celebrate", desc: "We handle delivery, setup, and breakdown. You just show up and enjoy." },
];

const faqs = [
  { q: "How far in advance should I book?", a: "We recommend booking 4 to 6 weeks before your event, especially during peak season (April through October). Last-minute bookings may be available depending on our schedule." },
  { q: "What areas do you serve?", a: "We serve the San Francisco Bay Area and Greater Sacramento region. Delivery fees vary by distance. Travel beyond our standard service area may be available for an additional fee." },
  { q: "How does payment work?", a: "A 50% deposit is required to secure your date. The remaining balance is due 7 days before your event. We accept all major credit cards and Zelle." },
  { q: "Can I customize my package?", a: "Absolutely. Every package is fully customizable. We will work with you on colors, styles, and arrangements to match your vision." },
  { q: "Do you provide real flowers?", a: "We specialize in premium silk florals and balloon styling. Silk florals look stunning in photos, are weather-proof, and allow us to offer consistent quality at every event. Fresh floral partnerships are available upon request." },
  { q: "What if I need to cancel or reschedule?", a: "Reschedules are welcome with at least 14 days notice at no extra charge. Cancellations made 14 or more days before the event receive a 50% deposit refund. Cancellations within 14 days are non-refundable." },
  { q: "Do you handle setup and breakdown?", a: "Yes. Every booking includes delivery, full professional setup, and breakdown after your event. You do not need to do anything." },
];

const PricingPage = () => {
  useSEO({
    title: "Pricing & Packages | Arch & Petal Co.",
    description: "Event styling packages starting at $600. Includes delivery, setup, and breakdown. Flower walls, arches, and balloon backdrops for Bay Area and Sacramento events.",
  });

  return (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="bg-brand-warm-white pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-[11px] uppercase tracking-[4px] text-brand-champagne mb-4">Services & Pricing</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-onyx tracking-[4px] mb-4">Styled for Every Celebration</h1>
          <p className="font-body font-light text-sm text-muted-foreground max-w-xl mx-auto">
            Beautiful backdrops, floral arches, and custom event styling for the Bay Area and Sacramento. Every package includes delivery, professional setup, and breakdown.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* A La Carte */}
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-[13px] uppercase tracking-[6px] text-muted-foreground text-center mb-2">A La Carte</h2>
          <p className="font-body font-light text-sm text-muted-foreground text-center mb-14">Individual items for clients who want to mix and match.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aLaCarteItems.map((item) => (
            <ScrollReveal key={item.name}>
              <div className="bg-brand-warm-white p-8">
                <h3 className="font-heading text-lg tracking-[2px] text-brand-onyx mb-2">{item.name}</h3>
                <p className="font-body font-light text-sm text-muted-foreground mb-4">{item.desc}</p>
                <p className="font-body text-[11px] uppercase tracking-[3px] text-brand-champagne">{item.price}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Packages */}
    <section className="bg-brand-ivory py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-[13px] uppercase tracking-[6px] text-muted-foreground text-center mb-2">Packages</h2>
          <p className="font-body font-light text-sm text-muted-foreground text-center mb-14">Our most popular option. Choose a package and customize to match your event.</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <ScrollReveal key={pkg.name}>
              <div className={`bg-white shadow-sm p-10 text-center relative ${pkg.popular ? "border border-brand-champagne" : ""}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-champagne text-white text-[10px] uppercase tracking-[2px] py-1 px-4">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl uppercase tracking-[3px] text-brand-onyx mb-2">{pkg.name}</h3>
                <div className="w-10 h-px bg-brand-champagne mx-auto my-4" />
                <p className="font-body text-[11px] uppercase tracking-[2px] text-muted-foreground mb-1">Starting at</p>
                <p className="font-heading text-4xl text-brand-onyx mb-8">{pkg.price}</p>
                <ul className="space-y-3 mb-10 text-left">
                  {pkg.features.map((f) => (
                    <li key={f} className="font-body font-light text-sm text-muted-foreground flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-champagne mt-1.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant={pkg.popular ? "default" : "outline"} size="sm" className="w-full">Get a Quote</Button>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Add-Ons */}
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-[13px] uppercase tracking-[6px] text-muted-foreground text-center mb-14">Add-Ons</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {addOns.map((a) => (
            <ScrollReveal key={a.name}>
              <div>
                <p className="font-heading text-base tracking-[1px] text-brand-onyx mb-1">{a.name}</p>
                <p className="font-body text-sm text-brand-champagne">{a.price}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="bg-brand-ivory py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-[13px] uppercase tracking-[6px] text-muted-foreground text-center mb-14">How It Works</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((s) => (
            <ScrollReveal key={s.num}>
              <div className="text-center">
                <p className="font-heading text-4xl text-brand-champagne mb-3">{s.num}</p>
                <p className="font-heading text-lg tracking-[2px] text-brand-onyx mb-2">{s.title}</p>
                <p className="font-body font-light text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-white py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="font-heading text-[13px] uppercase tracking-[6px] text-muted-foreground text-center mb-14">Common Questions</h2>
        </ScrollReveal>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-brand-beige">
              <AccordionTrigger className="font-heading text-base tracking-[1px] text-brand-onyx hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body font-light text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-brand-warm-white py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-brand-onyx mb-4">Ready to Style Your Event?</h2>
          <p className="font-body font-light text-sm text-muted-foreground mb-10">Now booking for 2026 events in the Bay Area and Sacramento.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Get a Quote</Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" size="lg">View Gallery</Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default PricingPage;
