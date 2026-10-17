import { BadgeCheck, CheckCircle2, CloudRain, Droplets, ShieldCheck, Waves } from "lucide-react";
import nhbrc from "@/assets/accreditation-nhbrc-clean.jpg.asset.json";
import pirb from "@/assets/accreditation-pirb.jpg.asset.json";

const accreditations = [
  { name: "NHBRC", fullName: "National Home Builders Registration Council", logo: nhbrc.url, description: "Protecting housing consumers and promoting standards in South Africa’s home-building industry.", regLabel: "Registration no.", regValue: "4000022320" },
  { name: "PIRB", fullName: "Plumbing Industry Registration Board", logo: pirb.url, description: "Supporting the registration of plumbing practitioners and accountability within the plumbing industry.", regLabel: "Company ID", regValue: "74416" },
];

const certificates = [
  { icon: Droplets, title: "Hot & Cold Water Systems", description: "Potable water supply and distribution pipework." },
  { icon: Waves, title: "Above & Below Ground Drainage", description: "Waste and soil drainage, above and below ground." },
  { icon: CloudRain, title: "Rainwater Systems", description: "Rainwater collection and disposal installations." },
];

const Accreditations = () => (
  <section id="accreditations" className="scroll-mt-24 border-y border-border bg-card py-20 lg:py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4"><ShieldCheck className="h-4 w-4" /> Professional credentials</div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">Our <span className="gradient-text-gold">accreditations</span></h2>
        <p className="text-muted-foreground leading-relaxed">Quality, safety and professional standards are at the heart of Pleasant Solutions’ work.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {accreditations.map((item) => (
          <article key={item.name} className="rounded-md border border-border bg-background overflow-hidden transition-colors hover:border-gold/50">
            <div className="accreditation-logo-surface flex h-52 items-center justify-center p-6">
              <img src={item.logo} alt={`${item.name} — ${item.fullName} logo`} width={200} height={200} className="h-40 w-40 object-contain" loading="lazy" />
            </div>
            <div className="p-6">
              <h3 className="text-gold font-display text-2xl font-bold mb-2">{item.name}</h3>
              <p className="font-medium text-sm min-h-10 mb-3">{item.fullName}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5">
                <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-gold" />
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{item.regLabel}</span>
                <span className="text-sm font-semibold tabular-nums text-gold">{item.regValue}</span>
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-md border border-gold/30 bg-background p-8 lg:p-10 grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-gold">PIRB accredited</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Certificates of <span className="gradient-text-gold">Compliance</span></h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We are accredited by the Plumbing Industry Registration Board to issue Certificates of Compliance for hot and cold water systems, above and below ground drainage systems, and rainwater systems.
          </p>
        </div>
        <ul className="grid gap-4">
          {certificates.map((item) => (
            <li key={item.title} className="flex items-start gap-4 rounded-md border border-border bg-card p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold mb-1">{item.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
              <CheckCircle2 className="h-5 w-5 text-gold/70 ml-auto shrink-0 mt-1" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Accreditations;
