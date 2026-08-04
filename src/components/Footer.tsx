import { Badge } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 bg-black">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div className="md:col-span-1">
            <div className="flex items-baseline gap-2 mb-auto">
              <div>
                <span className="inline-block w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
               <Badge className="ml-2">Frascio Sanitary — 2026 Collection</Badge>

                <h2 className="font-['Space Grotesk'] font-semibold text-[56px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-background">
                  Comfort is <span className="text-[#3fbfc7]">essential luxury.</span>
                </h2>
              </div>
            </div>
            <p className="font-['Inter'] text-[14px] leading-[1.6] max-w-[320px] text-[#3fbfc7] ">
              Premium smart sanitary ware engineered for comfort, efficiency, and timeless design.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-5">
              <p className="font-['Inter'] text-[15px] leading-[1.65] text-background/60 max-w-[360px] md:text-right">
                Explore the complete 2026 collection — or speak with a Frascio specialist
                about specifying the right model for your space.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-['IBM Plex Mono'] text-[11px] tracking-[0.08em] uppercase bg-background text-foreground px-6 py-3.5 rounded-full hover:opacity-80 transition-opacity"
              >
                Get in touch{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-['Space Grotesk'] font-bold text-[22px] tracking-tight text-foreground leading-none text-white">
                Frascio
              </span>
            <nav className="flex flex-wrap gap-6">
                <a
                  href="#"
                  className="font-['IBM Plex Mono'] text-[10px] tracking-[0.08em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  Insignia
                </a>
                <a
                  href="#"
                  className="font-['IBM Plex Mono'] text-[10px] tracking-[0.08em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  MultiCare
                </a>
                <a
                  href="#"
                  className="font-['IBM Plex Mono'] text-[10px] tracking-[0.08em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  Catalog
                </a>
                <a
                  href="#"
                  className="font-['IBM Plex Mono'] text-[10px] tracking-[0.08em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  Comfort
                </a>
                <a
                  href="#"
                  className="font-['IBM Plex Mono'] text-[10px] tracking-[0.08em] uppercase text-white/40 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </nav>

          <p className="font-['IBM Plex Mono'] text-[10px] tracking-[0.08em] uppercase text-muted-foreground text-gray-600">
            © 2026 Frascio. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-gray-600">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="font-['IBM Plex Mono'] text-[10px] tracking-[0.08em] uppercase text-muted-foreground hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}