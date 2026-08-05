import { Badge } from "@/components/ui/badge";

import imgSculptedBlack from "../imports/Images/Wallpic1.png";
import imgDarkBathroom from "../imports/Images/Wallpic2.png";
import imgWallHungMountain from "../imports/Images/Wallpic3.png";
import imgWallHungConcrete from "../imports/Images/Wallpic4.png";
import imgWallHungFrame from "../imports/Images/Wallpic5.png";
import imgWallHungRound from "../imports/Images/Wallpic6.png";

export function WallHung() {
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
            <span className="inline-block w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
            <Badge className="ml-2">Wall-Hung Series</Badge>
            <h2 className="font-['Space Grotesk'] font-semibold text-[42px] leading-[1.08] tracking-[-0.01em] text-foreground mt-4">
              Suspended. Considered.
            </h2>
          </div>
          <span
            className="hidden md:flex items-center gap-2 font-['IBM Plex Mono'] text-[10.5px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            Floor-to-ceiling installation flexibility. The same dial. A lighter footprint.

          </span>
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