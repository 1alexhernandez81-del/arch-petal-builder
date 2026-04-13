import { CircleMonogram } from "./Logo";

const Footer = () => (
  <footer className="bg-brand-onyx py-20 px-6">
    <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
      <CircleMonogram className="w-16 h-16" fill="#FFFFFF" />
      <p className="font-heading text-white text-lg tracking-[6px] uppercase">ARCH & PETAL CO.</p>
      <div className="w-16 h-px bg-white/20 mx-auto" />
      <div className="flex flex-col gap-2 text-white/60 font-body text-[12px] tracking-[1px]">
        <a href="mailto:hello@archandpetal.com" className="hover:text-white/80 transition-colors">hello@archandpetal.com</a>
        <a href="https://instagram.com/archandpetal" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors">@archandpetal</a>
      </div>
      <div className="mt-4 flex flex-col gap-1 text-white/40 font-body text-[10px] tracking-[2px] uppercase">
        <span>Bay Area & Sacramento</span>
        <span>© 2026 Arch & Petal Co. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
