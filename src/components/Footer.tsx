import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/pleasant-solutions-logo.png";

const Footer = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative bg-card border-t border-border pt-20 pb-8">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Pleasant Solutions logo" className="w-12 h-12 rounded-full object-contain shadow-gold" />
              <div className="font-display text-xl font-bold">
                Pleasant <span className="text-gold">Solutions</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              South Africa's trusted plumbing and drain specialists. Proudly
              serving Mbombela and surrounding areas.
            </p>
            <div className="font-display text-lg italic gradient-text-gold">
              "Big or small, we solve it all."
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "pricing", label: "Pricing" },
                { id: "gallery", label: "Gallery" },
                { id: "contact", label: "Contact" },
              ].map((l) => (
                <li key={l.id}>
                  <button onClick={() => scrollTo(l.id)} className="text-muted-foreground hover:text-gold transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-gold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" /><a href="tel:+27637052631" className="text-muted-foreground hover:text-gold">063 705 2631</a></li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" /><a href="mailto:info@pleasantsolutions.co.za" className="text-muted-foreground hover:text-gold break-all">info@pleasantsolutions.co.za</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" /><span className="text-muted-foreground">Mbombela Municipality</span></li>
            </ul>
            <div className="mt-5 pt-5 border-t border-border">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Hours</div>
              <div className="text-sm text-foreground/80">Mon–Sat 7:00–19:00</div>
              <div className="text-sm text-gold font-medium">24/7 Emergency Service</div>
            </div>
            <div className="flex gap-3 mt-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-md border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-md border border-border hover:border-gold hover:text-gold flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Pleasant Solutions Plumbing & Drain Specialists. All rights reserved.</p>
          <p>Proudly South African 🇿🇦 · NHBRC Accredited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
