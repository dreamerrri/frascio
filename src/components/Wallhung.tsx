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