function MarbleLifestyle() {
  return (
    <section className="bg-card py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_520px] gap-16 items-center">
        <div>
          <Badge>Craftsmanship</Badge>
          <h2 className="font-['Space_Grotesk'] font-semibold text-[44px] leading-[1.08] tracking-[-0.01em] text-foreground mt-5 mb-6">
            Where material and form converge.
          </h2>
          <div className="space-y-4 font-['Inter'] text-[15px] leading-[1.65] text-muted-foreground mb-8">
            <p>
              Frascio surfaces are treated with a proprietary nano-glaze — an ultra-thin hydrophilic coating that bonds to the ceramic at a molecular level. The result is a surface that resists mineral scale, soap residue, and bacterial adhesion with no cleaning agents required.
            </p>
            <p>
              Paired with the Frascio Connect ecosystem, every model supports voice, app, and remote control — ensuring your bathroom hardware evolves with you rather than against you.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { img: imgDialWindow, alt: "Frascio control dial detail against a window" },
              { img: imgInternalTank, alt: "Internal water tank cutaway" },
            ].map((item) => (
              <div key={item.alt} className="rounded-lg overflow-hidden bg-muted h-[180px]">
                <img src={item.img} alt={item.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg overflow-hidden bg-muted h-[580px]">
          <img
            src={imgMarbleBathroom}
            alt="Frascio smart toilet in marble bathroom"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}