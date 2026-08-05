import { Button } from "@/components/ui/button"
import heroImg from "../imports/Images/Hero.png"
import { Badge } from "@/components/ui/badge"


export default function Hero() {
  return (

   <section className="bg-background pt-[110px] pb-0 overflow-hidden">
     
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[560px]">
      

      <div className="py-16">
                  <span className="inline-block w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
        <Badge className="ml-2">Frascio Sanitary 2026 collection</Badge> 
         <h1 className="font-['Space_Grotesk'] font-semibold text-[64px] md:text-[80px] leading-[1.05] tracking-[-0.02em] text-foreground mt-6 mb-7">
            Comfort is{" "}
            <span className="text-accent" style={{color:"#3fbfc7"}}>essential luxury.</span>
          </h1>
        
        <p>
          Full-dimensional intelligent control <br />
          high-efficiency water-saving flushing, <br />
          and nano-glaze surfaces — <br />
          engineered so every ordinary bathroom moment <br />
          becomes an exquisite ritual.
        </p>
      
          <a href="#catalog">  <Button> Explore the Range</Button></a>  
          
      </div>


  <div className="relative h-[520px] rounded-xl overflow-hidden bg-muted">


     <img src={heroImg} className="absolute inset-0 w-full h-full object-cover" />

</div>



<div className="grid grid-cols-2 md:grid-cols-4 md:col-span-2 border-t border-border mt-8"> 

<div className="py-7 px-6 border-r border-border text-Left">
  <div className="flex items-center gap-2">
    <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.1em] uppercase text-[#3fbfc7] mb-3">Tech</p>
  </div>
   <p className="font-['Space_Grotesk'] font-semibold text-[18px] text-foreground mb-1">Self Clean</p>
    <p className="font-['Inter'] text-[13px] text-muted-foreground">Sterilize · anti-bacterial water spray</p>
</div>


<div className="py-7 px-6 border-r border-border text-Left">
  <div className="flex items-center gap-2">
    <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.1em] uppercase text-[#3fbfc7] mb-3">Comfort</p>
  </div>
   <p className="font-['Space_Grotesk'] font-semibold text-[18px] text-foreground mb-1">Smart Seating</p>
    <p className="font-['Inter'] text-[13px] text-muted-foreground">Warm seat · soft closing</p>
</div>


<div className="py-7 px-6 border-r border-border text-Left">
  <div className="flex items-center gap-2">
    <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.1em] uppercase text-[#3fbfc7] mb-3">Sensor</p>
  </div>
   <p className="font-['Space_Grotesk'] font-semibold text-[18px] text-foreground mb-1">Foot Trigger</p>
    <p className="font-['Inter'] text-[13px] text-muted-foreground">Automatic open & flush</p>
</div>


<div className="py-7 px-6  border-border text-Left">
  <div className="flex items-center gap-2">
    <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.1em] uppercase mb-3 text-[#3fbfc7]">Design</p>
  </div>
   <p className="font-['Space_Grotesk'] font-semibold text-[18px] text-foreground mb-1">Frascio Sanitary</p>
    <p className="font-['Inter'] text-[13px] text-muted-foreground">Comfort is essential luxury</p>
</div>


</div>

    </div>
    </section> 
  )
}   