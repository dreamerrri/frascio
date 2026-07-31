import { Badge } from "@/components/ui/badge";
import imgMountainWindow from "../imports/Images/bg7.png";

export function DesignPhilosophy() {
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
      <span className="inline-block w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
          <Badge className="ml-2">Design Philosophy</Badge>
          <h2 className="font-['Space Grotesk'] font-semibold text-[44px] leading-[1.08] tracking-[-0.01em] text-white mt-4 max-w-[560px] mb-4">
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