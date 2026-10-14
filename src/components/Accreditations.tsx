import { ShieldCheck } from "lucide-react";
import nhbrc from "@/assets/accreditation-nhbrc.jpg.asset.json";
import iopsa from "@/assets/accreditation-iopsa.jpg.asset.json";
import pirb from "@/assets/accreditation-pirb.jpg.asset.json";

const accreditations = [
  { name: "NHBRC", fullName: "National Home Builders Registration Council", logo: nhbrc.url, description: "Protecting housing consumers and promoting standards in South Africa’s home-building industry." },
  { name: "IOPSA", fullName: "Institute of Plumbing South Africa", logo: iopsa.url, description: "Promoting professional plumbing, quality workmanship and industry best practice." },
  { name: "PIRB", fullName: "Plumbing Industry Registration Board", logo: pirb.url, description: "Supporting the registration of plumbing practitioners and accountability within the plumbing industry." },
];

const Accreditations = () => (
  <section id="accreditations" className="scroll-mt-24 border-y border-border bg-card py-20 lg:py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4"><ShieldCheck className="h-4 w-4" /> Professional credentials</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">Our <span className="gradient-text-gold">accreditations</span></h2>
        <p className="text-muted-foreground leading-relaxed">Quality, safety and professional standards are at the heart of Pleasant Solutions’ work.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {accreditations.map((item) => (
          <article key={item.name} className="rounded-md border border-border bg-background overflow-hidden transition-colors hover:border-gold/50">
            <div className="accreditation-logo-surface flex h-52 items-center justify-center p-6">
              <img src={item.logo} alt={`${item.name} — ${item.fullName} logo`} width={200} height={200} className="h-40 w-40 object-contain" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="text-gold font-display text-2xl font-bold mb-2">{item.name}</h3>
              <p className="font-medium text-sm min-h-10 mb-3">{item.fullName}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Accreditations;