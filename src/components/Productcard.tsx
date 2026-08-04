import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import imgNovo from "../imports/Images/Catpic1.png";
import imgLumi from "../imports/Images/Catpic2.png";
import imgMultiCare from "../imports/Images/Catpic3.png";
import imgZenn from "../imports/Images/Multipic1.png";
import imgVortex from "../imports/Images/Catpic5.png";
import imgPure from "../imports/Images/Catpic4.png";

type ProductSpec = {
  sku: string;
  name: string;
  desc: string;
  images: string[];
  specs: { label: string; value: string }[];
  tags: string[];
};

export const FLOOR_PRODUCTS: ProductSpec[] = [
  {
    sku: "61.01.001 — NOVO",
    name: "Novo",
    desc: "Smart toilet, floor mounted. Foot-sensor flip and flush, UV sterilisation, dual knob on both sides.",
    images: [imgNovo, imgLumi, imgZenn],
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
    images: [imgLumi, imgNovo, imgPure],
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
    images: [imgMultiCare, imgZenn, imgVortex],
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
    images: [imgZenn, imgMultiCare, imgNovo],
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
    images: [imgVortex, imgPure, imgLumi],
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
    images: [imgPure, imgVortex, imgZenn],
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
    <Link to={`/product/${product.name.toLowerCase()}`} className="group">
      <div className="bg-card border border-border rounded-lg overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200 cursor-pointer">
        <div className="h-[260px] overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={`Frascio ${product.name} smart toilet`}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <p className="font-['IBM Plex Mono'] text-[10px] tracking-[0.08em] text-black mb-1.5">
            {product.sku}
          </p>
          <h3 className="font-['Space Grotesk'] font-semibold text-[22px] tracking-[-0.01em] text-foreground mb-2 group-hover:text-[#3fbfc7] transition-colors">
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
    </Link>
  );
}