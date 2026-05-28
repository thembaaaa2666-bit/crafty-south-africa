import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "why-us", label: "Why Us" },
  { id: "pricing", label: "Pricing" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-md gradient-gold flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
              <Droplets className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <div className="text-left">
              <div className="text-base md:text-lg font-display font-bold tracking-tight leading-none">
                Pleasant <span className="text-gold">Solutions</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                Plumbing & Drain Specialists
              </div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:bottom-[-6px] after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
            <Button asChild className="gradient-gold text-primary-foreground hover:opacity-90 shadow-gold">
              <a href="tel:+27637052631">
                <Phone className="w-4 h-4" />
                063 705 2631
              </a>
            </Button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-6 space-y-1 border-t border-border/50 animate-fade-in bg-background/95 backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium hover:bg-secondary hover:text-gold rounded-md transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-3">
              <Button asChild className="w-full gradient-gold text-primary-foreground">
                <a href="tel:+27637052631">
                  <Phone className="w-4 h-4" />
                  Call 063 705 2631
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
