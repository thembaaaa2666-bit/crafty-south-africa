import { useState } from "react";
import { ArrowLeft, ArrowRight, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import bath from "@/assets/project-bathroom-bath.jpeg.asset.json";
import shower from "@/assets/project-shower-basin.jpeg.asset.json";
import bathroomTeam from "@/assets/project-bathroom-team.jpeg.asset.json";
import drains from "@/assets/project-drain-installation.jpeg.asset.json";
import company from "@/assets/company-accreditations.jpeg.asset.json";
import services from "@/assets/company-services.jpeg.asset.json";

const items = [
  { src: shower.url, label: "Shower & Basin Installation", description: "Bathroom plumbing with a rainfall shower, wall-mounted basin and matching black fittings." },
  { src: bath.url, label: "Bath & Toilet Installation", description: "Freestanding bath, handheld shower and toilet installation in a tiled bathroom." },
  { src: drains.url, label: "Drain Pipe Installation", description: "Our team installing underground drainage pipework on site." },
  { src: bathroomTeam.url, label: "Bathroom Work in Progress", description: "The Pleasant Solutions team at work on a bathroom installation." },
];
const artwork = [
  { src: services.url, label: "Plumbing, Drains & Gardening", description: "Drain unblocking and cleaning, grass cutting, tree cutting and property maintenance." },
  { src: company.url, label: "Pleasant Solutions (Pty) Ltd", description: "Established in 2024. Pleasant Plumbing is a division of Pleasant Solutions (Pty) Ltd — proudly South African." },
];
const allImages = [...items, ...artwork];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? null : allImages[selected];
  const changeImage = (direction: number) => setSelected((current) => current === null ? null : (current + direction + allImages.length) % allImages.length);
  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-medium tracking-[0.3em] uppercase text-gold mb-4">
            — Our Work
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Workmanship that <span className="gradient-text-gold">speaks for itself</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
             Real projects. Real workmanship. Plumbing, drainage and property
             maintenance by Pleasant Solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <article key={item.label} className="group overflow-hidden rounded-md border border-border bg-card hover:border-gold/50 transition-colors">
              <Button variant="ghost" onClick={() => setSelected(i)} aria-label={`View ${item.label}`} className="relative block h-auto w-full p-0 rounded-none overflow-hidden hover:bg-transparent">
                <img src={item.src} alt={item.label} loading="lazy" width={768} height={1024} className="aspect-[3/4] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" />
                <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-md bg-background/80 text-gold"><Maximize2 className="h-4 w-4" /></span>
              </Button>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold mb-2">{item.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-16 pt-10 border-t border-border">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-8">Artisans at work. <span className="text-gold">Proudly South African.</span></h3>
          <div className="grid md:grid-cols-2 gap-8">
            {artwork.map((item, i) => (
              <figure key={item.label}>
                <Button variant="ghost" onClick={() => setSelected(items.length + i)} aria-label={`View ${item.label}`} className="block h-auto w-full rounded-md p-0 overflow-hidden border border-border hover:border-gold/50">
                  <img src={item.src} alt={item.label} loading="lazy" width={1004} height={591} className="w-full aspect-[1004/591] object-contain" />
                </Button>
                <figcaption className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.description}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="max-w-4xl w-[calc(100%-2rem)] max-h-[92dvh] p-4 sm:p-6 overflow-auto" onKeyDown={(event) => { if (event.key === "ArrowRight") changeImage(1); if (event.key === "ArrowLeft") changeImage(-1); }}>
          {active && <>
            <DialogTitle className="pr-7">{active.label}</DialogTitle>
            <img src={active.src} alt={active.label} className="w-full h-[min(60dvh,650px)] object-contain" />
            <DialogDescription>{active.description}</DialogDescription>
            <div className="flex items-center justify-between">
              <Button variant="outline" size="icon" aria-label="Previous photo" onClick={() => changeImage(-1)}><ArrowLeft /></Button>
              <span className="text-sm text-muted-foreground">{(selected ?? 0) + 1} / {allImages.length}</span>
              <Button variant="outline" size="icon" aria-label="Next photo" onClick={() => changeImage(1)}><ArrowRight /></Button>
            </div>
          </>}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;