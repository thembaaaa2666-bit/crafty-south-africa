import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import heroImage from "@/assets/ps-hero.jpg";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional plumber installing chrome pipes"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-gold">
              Mbombela • NHBRC Accredited
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6">
            Professional <br />
            <span className="gradient-text-gold">Plumbing & Drain</span>
            <br />
            Specialists
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Reliable plumbing installations, repairs, and drain solutions for
            homes and businesses across Mbombela and surrounding areas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollTo("contact")}
              className="gradient-gold text-primary-foreground hover:opacity-90 shadow-gold h-14 px-8 text-base group"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-14 px-8 text-base border-gold/40 text-foreground hover:bg-gold/10 hover:text-gold hover:border-gold"
            >
              <a href="tel:+27637052631">
                <Phone className="w-4 h-4" />
                Call Now — 063 705 2631
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-border/50 max-w-2xl">
            {[
              { icon: Clock, label: "24/7 Emergency" },
              { icon: ShieldCheck, label: "Licensed & Insured" },
              { icon: Award, label: "NHBRC Accredited" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-gold shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground/80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
};

export default Hero;
