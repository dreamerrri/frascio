import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── Image imports ────────────────────────────────────────────────────────────
// Using placeholder images since original assets are not available
const imgDialDetail = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop";
const imgEngineeringSketch = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop";
const imgS400Arched = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop";
const imgIlluminatedDial = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop";
const imgInsigniaLidRaised = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=800&fit=crop";
const imgEnergySavingGrid = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=800&fit=crop";
const imgMultiCareM4Wall = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop";
const imgMultiCareDial = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=300&fit=crop";
const imgMountainWindow = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop";
const imgNovo = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop";
const imgLumi = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop";
const imgMultiCare = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop";
const imgZenn = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop";
const imgVortex = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop";
const imgPure = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=400&fit=crop";
const imgAirFreshener = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=150&fit=crop";
const imgVortexBowl = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=150&fit=crop";
const imgUvSpray = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=150&fit=crop";
const imgWaterPressure = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=200&h=150&fit=crop";
const imgSculptedBlack = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=500&fit=crop";
const imgDarkBathroom = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=500&fit=crop";
const imgWallHungMountain = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop";
const imgWallHungConcrete = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=500&fit=crop";
const imgWallHungFrame = "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&h=500&fit=crop";
const imgWallHungRound = "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=500&fit=crop";

// ─── Shared primitives ────────────────────────────────────────────────────────
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-sm bg-accent shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
      <span className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.15em] uppercase text-accent">
        {children}
      </span>
    </span>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-t border-border">
      <span className="font-['IBM_Plex_Mono'] text-[11px] text-muted-foreground">{label}</span>
      <span className="font-['IBM_Plex_Mono'] text-[11px] text-foreground">{value}</span>
    </div>
  );
}

function FeatureTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-[3px] bg-secondary text-muted-foreground font-['IBM_Plex_Mono'] text-[9.5px] tracking-[0.04em] uppercase">
      {children}
    </span>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
const NAV_LINKS = ["Insignia", "MultiCare", "Catalog", "Comfort"];

function Nav({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-baseline gap-0.5">
          <span className="font-['Space_Grotesk'] font-bold text-[22px] tracking-tight text-foreground leading-none">
            Frascio
          </span>
          <span className="font-['Space_Grotesk'] text-[9px] text-muted-foreground leading-none mb-0.5">®</span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {l}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#catalog"
            className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.08em] uppercase bg-foreground text-background px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
          >
            View Range
          </a>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.08em] uppercase text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {l}
                </a>
              ))}
              <a
                href="#catalog"
                className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.08em] uppercase bg-foreground text-background px-5 py-3 rounded-full text-center mt-2"
                onClick={() => setOpen(false)}
              >
                View Range
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}



// ─── MultiCare M4 ─────────────────────────────────────────────────────────────
function MultiCareM4() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const textInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-card py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-start">
        {/* Image grid */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="col-span-2 rounded-lg overflow-hidden bg-muted h-[320px]">
            <img src={imgMultiCareM4Wall} alt="Frascio MultiCare M4 wall-mounted unit" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden bg-muted h-[200px]">
            <img src={imgMultiCareDial} alt="MultiCare control dial detail" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden bg-muted h-[200px]">
            <img src={imgIlluminatedDial} alt="MultiCare seat detail" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: 50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-4"
        >
          <Badge>MultiCare M4</Badge>
          <h2 className="font-['Space_Grotesk'] font-semibold text-[42px] leading-[1.08] tracking-[-0.01em] text-foreground mt-5 mb-6">
            {"Today's technology, for everyone."}
          </h2>
          <div className="space-y-4 font-['Inter'] text-[15px] leading-[1.65] text-muted-foreground">
            <p>
              Frascio MultiCare M4 elevates conventional sanitary ware into a fully immersive smart hygiene system. Streamlined, minimalist styling and built-in IoT interconnection make this fully customisable smart bidet seat a fit for any household.
            </p>
            <p>
              Cutting-edge hydro cleansing and temperature-controlled air-drying technology, an array of human-centric functions, and simplified surface sanitation keep daily comfort — and long-term upkeep — effortless.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Design Philosophy Banner ─────────────────────────────────────────────────
function DesignPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="h-[520px] relative">
        <img
          src={imgMountainWindow}
          alt="Frascio smart toilet beside an arched window overlooking mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,17,19,0.7)] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-[1240px] mx-auto px-6 md:px-12 pb-12">
          <Badge>Design Philosophy</Badge>
          <h2 className="font-['Space_Grotesk'] font-semibold text-[44px] leading-[1.08] tracking-[-0.01em] text-white mt-4 max-w-[560px] mb-4">
            We look to nature, not machines.
          </h2>
          <p className="font-['Inter'] text-[14.5px] leading-[1.6] text-white/70 max-w-[460px]">
            With a deep focus on human-centered design, we uncover the technologies that matter to users — then draw visual inspiration from the natural world, pairing beautiful, approachable forms with intuitive, highly personalised features.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Product Catalog ──────────────────────────────────────────────────────────
type ProductSpec = {
  sku: string;
  name: string;
  desc: string;
  img: string;
  specs: { label: string; value: string }[];
  tags: string[];
};

const FLOOR_PRODUCTS: ProductSpec[] = [
  {
    sku: "61.01.001 — NOVO",
    name: "Novo",
    desc: "Smart toilet, floor mounted. Foot-sensor flip and flush, UV sterilisation, dual knob on both sides.",
    img: imgNovo,
    specs: [
      { label: "Overall height", value: "860 mm" },
      { label: "Rough-in", value: "180 · 50–220 mm" },
      { label: "Water pressure", value: "4-level" },
    ],
    tags: ["Voice Control", "Foam Shield", "Auto-Flip", "Seat Heating"],
  },
  {
    sku: "61.01.002 — LUMI",
    name: "Lumi",
    desc: "Sitting down, surrounded by fragrance. Built-in aromatherapy and a full-length ambient light bar.",
    img: imgLumi,
    specs: [
      { label: "Overall height", value: "940 mm" },
      { label: "Rough-in", value: "180 · 50–220 mm" },
      { label: "Water pressure", value: "4-level" },
    ],
    tags: ["Built-in Aromatherapy", "Remote Control", "Night Light", "IPX4"],
  },
  {
    sku: "MultiCare — Bidet Seat",
    name: "MultiCare",
    desc: "Dual-mode anterior & posterior 37°C constant-temperature warm-water lavage for any household.",
    img: imgMultiCare,
    specs: [
      { label: "Wash modes", value: "Front · Rear" },
      { label: "Water temp", value: "Constant 37°C" },
      { label: "Operation", value: "Contactless" },
    ],
    tags: ["UV Sterilization", "AI Voice Control", "Vortex Suction", "Seat Heating"],
  },
  {
    sku: "61.01.003 — ZENN",
    name: "Zenn",
    desc: "Automatic lid opening, built-in foam shield and zero water-pressure limitation, with app control.",
    img: imgZenn,
    specs: [
      { label: "Overall height", value: "940 mm" },
      { label: "Rough-in", value: "180 · 50–220 mm" },
      { label: "Water pressure", value: "No limit" },
    ],
    tags: ["APP Control", "Foam Shield", "Ambient Light", "UV Sterilization"],
  },
  {
    sku: "61.01.004 — VORTEX",
    name: "Vortex",
    desc: "Innovation meets daily comfort. Front-loading bidet, magic seat massage and side buttons for daily use.",
    img: imgVortex,
    specs: [
      { label: "Overall height", value: "1000 mm" },
      { label: "Rough-in", value: "180 · 50–220 mm" },
      { label: "Water pressure", value: "4-level" },
    ],
    tags: ["Magic Seat Massage", "LED Screen", "Foam Container", "Seat Heating"],
  },
  {
    sku: "61.01.201 — PURE",
    name: "Pure",
    desc: "No water-pressure limit. One-click knob, 180° foam layer and built-in night light.",
    img: imgPure,
    specs: [
      { label: "Overall height", value: "830 mm" },
      { label: "Rough-in", value: "180 · Ø100 mm" },
      { label: "Water pressure", value: "No limit" },
    ],
    tags: ["Night Light", "Foam Layer", "One-Click", "Eco Flush"],
  },
];

function ProductCard({ product }: { product: ProductSpec }) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className="h-[260px] overflow-hidden bg-muted">
        <img
          src={product.img}
          alt={`Frascio ${product.name} smart toilet`}
          className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.08em] text-accent mb-1.5">
          {product.sku}
        </p>
        <h3 className="font-['Space_Grotesk'] font-semibold text-[22px] tracking-[-0.01em] text-foreground mb-2">
          {product.name}
        </h3>
        <p className="font-['Inter'] text-[13px] leading-[1.6] text-muted-foreground mb-5 flex-1">
          {product.desc}
        </p>
        <div className="space-y-0.5 mb-5">
          {product.specs.map((s) => (
            <SpecRow key={s.label} label={s.label} value={s.value} />
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((t) => (
            <FeatureTag key={t}>{t}</FeatureTag>
          ))}
        </div>
      </div>
    </div>
  );
}

function Catalog() {
  return (
    <section id="catalog" className="bg-background py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-14 gap-8">
          <div>
            <h2 className="font-['Space_Grotesk'] font-semibold text-[42px] leading-[1.08] tracking-[-0.01em] text-foreground mb-3">
              The floor-mounted range.
            </h2>
            <p className="font-['IBM_Plex_Mono'] text-[12.5px] tracking-[0.12em] uppercase text-muted-foreground max-w-[340px] leading-relaxed">
              Six silhouettes, one control language — every model built around the same illuminated dial.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-['IBM_Plex_Mono'] text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            Full catalog <ArrowUpRight size={12} />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FLOOR_PRODUCTS.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Tech Sections ────────────────────────────────────────────────────────────
function TechSection() {
  const techs = [
    {
      img: imgAirFreshener,
      tag: "Built-in Air Freshener",
      title: "Fragrance, quietly embedded.",
      body: "A sealed fragrance tablet sits within the bowl unit — releasing a continuous, gentle scent without any surface residue or visible hardware.",
    },
    {
      img: imgVortexBowl,
      tag: "Vortex Suction",
      title: "Three-dimensional vortex bowl.",
      body: "The bowl geometry and flush nozzle geometry work in concert to create a rotating water mass — cleaning every surface in a single 4-litre flush.",
    },
    {
      img: imgUvSpray,
      tag: "UV Sterilization",
      title: "UV spray rod sterilization.",
      body: "Ultraviolet light neutralises 99.9% of bacteria on the wand after every use. No chemicals, no residue — invisible hygiene, every cycle.",
    },
    {
      img: imgWaterPressure,
      tag: "Pressure Boost",
      title: "Zero water-pressure limitation.",
      body: "A proprietary booster mechanism ensures consistent, powerful flush performance regardless of incoming water pressure — from any household in any region.",
    },
  ];

  return (
    <section className="bg-card py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="mb-14">
          <Badge>Core Technology</Badge>
          <h2 className="font-['Space_Grotesk'] font-semibold text-[42px] leading-[1.08] tracking-[-0.01em] text-foreground mt-4 max-w-[520px]">
            Built to outlast, engineered to surprise.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {techs.map((t) => (
            <div key={t.title} className="group flex gap-5 p-6 rounded-lg border border-border hover:border-accent/30 transition-colors duration-200">
              <div className="w-[120px] h-[90px] shrink-0 rounded-md overflow-hidden bg-muted">
                <img src={t.img} alt={t.tag} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
              </div>
              <div>
                <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.1em] uppercase text-accent mb-2">
                  {t.tag}
                </p>
                <p className="font-['Space_Grotesk'] font-semibold text-[16px] text-foreground mb-1.5">
                  {t.title}
                </p>
                <p className="font-['Inter'] text-[13px] leading-[1.6] text-muted-foreground">
                  {t.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Wall-Hung Range ──────────────────────────────────────────────────────────
function WallHung() {
  const wallImages = [
    { src: imgSculptedBlack, alt: "Sculpted black Frascio smart toilet" },
    { src: imgDarkBathroom, alt: "Frascio smart toilet in dark styled bathroom" },
    { src: imgWallHungMountain, alt: "Wall-hung Frascio smart toilet against a mountain view" },
    { src: imgWallHungConcrete, alt: "Frascio wall-hung toilet in a light concrete bathroom" },
    { src: imgWallHungFrame, alt: "Frascio wall-hung toilet with exposed steel mounting frame" },
    { src: imgWallHungRound, alt: "Frascio wall-hung toilet beside a round window" },
  ];

  return (
    <section className="bg-background py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12 gap-8">
          <div>
            <Badge>Wall-Hung Series</Badge>
            <h2 className="font-['Space_Grotesk'] font-semibold text-[42px] leading-[1.08] tracking-[-0.01em] text-foreground mt-4">
              Floating elegance.
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-['IBM_Plex_Mono'] text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            View collection <ArrowUpRight size={12} />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {wallImages.map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden bg-muted aspect-[4/5]">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-baseline gap-0.5 mb-4">
              <span className="font-['Space_Grotesk'] font-bold text-[22px] tracking-tight text-foreground leading-none">
                Frascio
              </span>
              <span className="font-['Space_Grotesk'] text-[9px] text-muted-foreground leading-none mb-0.5">®</span>
            </div>
            <p className="font-['Inter'] text-[14px] leading-[1.6] text-muted-foreground max-w-[320px]">
              Premium smart sanitary ware engineered for comfort, efficiency, and timeless design.
            </p>
          </div>
          <div>
            <h4 className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.08em] uppercase text-foreground mb-4">
              Products
            </h4>
            <ul className="space-y-2">
              {["Insignia", "MultiCare", "S400 Series", "Wall-Hung"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-['Inter'] text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.08em] uppercase text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {["About", "Technology", "Support", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-['Inter'] text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.08em] uppercase text-muted-foreground">
            © 2026 Frascio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main App ────────────────────────────────────────────────────────────────
function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Nav scrolled={scrolled} />
      <main>
        {/* <Hero />
        <BrandStory />
        <S400 />
        <DialBanner />
        <Insignia />
        <EnergySaving /> */}
        
        <MultiCareM4 />
        <DesignPhilosophy />
        <Catalog />
        <TechSection />
        <WallHung />
      </main>
      <Footer />
    </div>
  );
}

export default App;
