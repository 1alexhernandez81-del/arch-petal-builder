import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const eventTypes = [
  "Baby Shower",
  "Birthday",
  "Bridal Shower",
  "Wedding",
  "Proposal",
  "Corporate Event",
  "Brand Activation",
  "Other",
];

const serviceTypes = [
  "Flower Wall",
  "Balloon Arch",
  "Balloon Garland",
  "Backdrop Design",
  "Table Centerpieces",
  "Full Event Styling",
  "Other",
];

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    serviceType: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        event_type: form.eventType,
        event_date: form.eventDate || null,
        message: form.message.trim(),
      });
      if (error) throw error;
      toast({ title: "Inquiry Sent!", description: "Thank you! We'll be in touch within 24 hours." });
      setForm({ name: "", email: "", phone: "", eventType: "", serviceType: "", eventDate: "", message: "" });
    } catch (err) {
      console.error("Submit error:", err);
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-brand-beige font-body font-light text-sm text-brand-onyx placeholder:text-brand-taupe/50 py-3 px-0 focus:outline-none focus:border-brand-champagne transition-colors";

  return (
    <div className="min-h-screen">
      <Toaster />
      <Navbar />

      <section className="bg-brand-warm-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-brand-onyx tracking-[4px]">Contact</h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-8">
              <input type="text" placeholder="Name" required maxLength={100} className={inputClass} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input type="email" placeholder="Email" required maxLength={255} className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input type="tel" placeholder="Phone" maxLength={20} className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <select required className={`${inputClass} appearance-none cursor-pointer`} value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })}>
                <option value="" disabled>Event Type</option>
                {eventTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
              </select>
              <select required className={`${inputClass} appearance-none cursor-pointer`} value={form.serviceType} onChange={(e) => setForm({ ...form, serviceType: e.target.value })}>
                <option value="" disabled>Service Type</option>
                {serviceTypes.map((t) => (<option key={t} value={t}>{t}</option>))}
              </select>
              <input type="date" className={inputClass} value={form.eventDate} onChange={(e) => setForm({ ...form, eventDate: e.target.value })} />
              <textarea placeholder="Tell us about your vision..." required maxLength={1000} rows={4} className={`${inputClass} resize-none`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-brand-onyx tracking-[3px] mb-10">Get in Touch</h2>
              <div className="space-y-6 font-body font-light text-sm text-muted-foreground">
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[3px] text-brand-champagne mb-1">Email</p>
                  <a href="mailto:hello@archandpetal.com" className="hover:text-brand-onyx transition-colors">hello@archandpetal.com</a>
                </div>
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[3px] text-brand-champagne mb-1">Instagram</p>
                  <a href="https://instagram.com/archandpetal" target="_blank" rel="noopener noreferrer" className="hover:text-brand-onyx transition-colors">@archandpetal</a>
                </div>
                <div>
                  <p className="font-body text-[11px] uppercase tracking-[3px] text-brand-champagne mb-1">Service Area</p>
                  <p>Bay Area & Sacramento, CA</p>
                </div>
                <div className="pt-6 border-t border-brand-beige">
                  <p className="italic text-brand-taupe">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
