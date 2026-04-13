import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PrimaryWordmark } from "./Logo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-ivory/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <Link to="/" onClick={() => setOpen(false)}>
          <PrimaryWordmark className="w-48 md:w-56" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`font-body text-[11px] uppercase tracking-[2px] transition-colors duration-300 ${
                location.pathname === l.href || (l.href === "/blog" && location.pathname.startsWith("/blog"))
                  ? "text-brand-champagne"
                  : "text-muted-foreground hover:text-brand-onyx"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button className="md:hidden text-brand-onyx" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-ivory border-t border-brand-beige px-6 py-8 flex flex-col gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`font-body text-[12px] uppercase tracking-[2px] transition-colors ${
                location.pathname === l.href ? "text-brand-champagne" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
