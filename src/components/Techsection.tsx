import { Badge } from "@/components/ui/badge";
import imgAirFreshener from "../imports/Images/9752d9d15e03aafad88a8fab2656e825eb6b1893.png";
import imgVortexBowl from "../imports/Images/a5d1a19d4b6c09bf33461f6f74b9e905b92d6e5b.png";
import imgUvSpray from "../imports/Images/a8f8be2af4ec664aff0c6d4b0246d1677ca59ed1.png";
import imgWaterPressure from "../imports/Images/c2ac40490afa9bdc94b9fa46d2236e1c3b4181e0.png";

export function TechSection() {
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
                <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.1em] uppercase text-black mb-2">
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