import { ArrowUpRight } from 'lucide-react';
import { FLOOR_PRODUCTS, ProductCard } from './Productcard';

export function Catalog() {
  return (
    <section id="catalog" className="bg-background py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-14 gap-8">
          <div>
            <h2 className="font-['Space Grotesk'] font-semibold text-[42px] leading-[1.08] tracking-[-0.01em] text-foreground mb-3">
              The floor-mounted range.
            </h2>
            <p className="font-['IBM Plex Mono'] text-[12.5px] tracking-[0.12em] uppercase text-muted-foreground max-w-[340px] leading-relaxed">
              Six silhouettes, one control language — every model built around the same illuminated dial.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-['IBM Plex Mono'] text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors shrink-0"
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