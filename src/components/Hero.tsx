import { Button } from "@/components/ui/button"
import heroImg from "../imports/images/hero.png"



export default function Hero() {
  return (

   < section className="bg-background pt-[110px] pb-0 overflow-hidden">
     
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[560px]">
      

      <div className="py-16">
        <span className="font-semibold text-[10px] " style={{color:"#3fbfc7"}}>Frascio Sanitary 2026 collection</span> 
        <h1 className="font-['Space_Grotesk'] font-semibold text-[64px] md:text-[80px] leading-[1.05] tracking-[-0.02em] text-foreground mt-6 mb-7">Comfort is </h1>
         <span className="font-semibold text-[50px]" style={{color:"#3fbfc7"}}>essential luxury.</span> 
        <p>
          Full-dimensional intelligent control <br />
          high-efficiency water-saving flushing, <br />
          and nano-glaze surfaces — <br />
          engineered so every ordinary bathroom moment <br />
          becomes an exquisite ritual.
        </p>
        <Button>Explore the Range</Button>
      </div>


  <div className="relative h-[520px] rounded-xl overflow-hidden bg-muted">


     <img src={heroImg} className="absolute inset-0 w-full h-full object-cover" />

</div>

<div className="flex items-center justify-between px-6 py-4">
<div>
    Self Cleean
</div>

<div>
    Self Cleean
</div>
<div>
    Self Cleean
</div>
<div>
    Self Cleean
</div>
</div>

    </div>
    </section> 
  )
}   