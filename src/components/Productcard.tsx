import { Badge } from "@/components/ui/badge";
import imgNovo from "../imports/Images/6296324342396eb5facb81c95e30038a9fc8f5ea.png";
import imgLumi from "../imports/Images/6a031618f9f7b8194f00db4ef0c91d19894cd855.png";
import imgMultiCare from "../imports/Images/6af35d251c356ee05d4766d8b19bef1aae6981ac.png";
import imgZenn from "../imports/Images/703a1a3517e2967e57e491f14ef8a0616137b67a.png";
import imgVortex from "../imports/Images/50b92c996d0714c96138cb21691c73c7e67b25c3.png";
import imgPure from "../imports/Images/9296b9c5daf3b00f9ff39e45ff052303c8443691.png";

type ProductSpec = {
  sku: string;
  name: string;
  desc: string;
  img: string;
  specs: { label: string; value: string }[];
  tags: string[];
};

export const FLOOR_PRODUCTS: ProductSpec[] = [
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


function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}

export function ProductCard({ product }: { product: ProductSpec }) {
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
        <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.08em] text-black mb-1.5">
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
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}