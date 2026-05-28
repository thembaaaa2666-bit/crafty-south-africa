import { BadgeCheck } from "lucide-react";
import aboutImage from "@/assets/ps-gallery-1.jpg";

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "24/7", label: "Emergency Response" },
  { value: "100%", label: "Workmanship Guaranteed" },
  { value: "NHBRC", label: "Accredited Specialists" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-gold/60" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gold/60" />
            <img
              src={aboutImage}
              alt="Precision plumbing equipment and chrome pipes"
              className="relative w-full h-[500px] object-cover rounded-md shadow-elegant"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute -bottom-8 left-8 right-8 bg-card border border-gold/30 rounded-md p-6 shadow-gold hidden md:block">
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <div className="font-display text-lg font-bold">Qualified Artisans</div>
                  <div className="text-xs text-muted-foreground">Owned and operated by certified professionals</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
              — About Pleasant Solutions
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              South Africa's trusted <span className="gradient-text-gold">plumbing experts</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">
              Pleasant Solutions is a proudly South African plumbing and drain
              specialist company serving Mbombela and surrounding areas. We
              combine quality workmanship with modern equipment to deliver
              reliable, affordable, and professional service — every time.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              From emergency drain unblocking to full bathroom and kitchen
              installations, our skilled technicians arrive on time, work clean,
              and leave your space better than we found it. Big or small, we
              solve it all.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-gold pl-4">
                  <div className="font-display text-3xl md:text-4xl font-bold text-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
