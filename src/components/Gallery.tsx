import g1 from "@/assets/ps-gallery-1.jpg";
import g2 from "@/assets/ps-gallery-2.jpg";
import g3 from "@/assets/ps-gallery-3.jpg";
import g4 from "@/assets/ps-gallery-4.jpg";
import g5 from "@/assets/ps-gallery-5.jpg";
import g6 from "@/assets/ps-gallery-6.jpg";

const items = [
  { src: g3, label: "Pipe Installation", className: "md:row-span-2 md:col-span-2 h-[400px] md:h-full" },
  { src: g2, label: "Bathroom Plumbing", className: "h-[200px]" },
  { src: g4, label: "Technician at Work", className: "h-[200px]" },
  { src: g1, label: "Modern Equipment", className: "h-[200px]" },
  { src: g5, label: "Tap Installation", className: "h-[200px]" },
  { src: g6, label: "Before & After", className: "md:col-span-2 h-[280px]" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            — Our Work
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Workmanship that <span className="gradient-text-gold">speaks for itself</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A glimpse into the precision, quality and craftsmanship we bring
            to every Pleasant Solutions project.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-md border border-border ${item.className}`}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="text-xs uppercase tracking-[0.2em] text-gold mb-1">
                  Pleasant Solutions
                </div>
                <div className="font-display text-lg font-bold text-foreground">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;