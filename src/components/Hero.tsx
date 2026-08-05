import { Button } from "@/components/ui/button"
import heroImg from "../imports/Images/Hero.png"
import { Badge } from "@/components/ui/badge"
import { motion, useScroll, useTransform } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const y3 = useTransform(scrollY, [0, 500], [0, 50])
  const y4 = useTransform(scrollY, [0, 500], [0, 75])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  return (

   <section className="bg-background pt-[110px] pb-8 overflow-hidden">
     
      <div className="max-w-[1240px] mx-auto px-6 pb-0 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[560px]">
      

      <motion.div className="py-16" style={{ y: y3 }} variants={containerVariants} initial="hidden" animate="visible">
                  <motion.div className="flex items-center" variants={itemVariants}>
                  <span className="inline-block w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
        <Badge className="ml-2">Frascio Sanitary 2026 collection</Badge>
        </motion.div>
         <motion.h1 className="font-['Space_Grotesk'] font-semibold text-[64px] md:text-[80px] leading-[1.05] tracking-[-0.02em] text-foreground mt-6 mb-7" variants={itemVariants}>
            Comfort is{" "}
            <span className="text-accent" style={{color:"#3fbfc7"}}>essential luxury.</span>
          </h1>
        
        <p className="mb-6">
          </motion.h1>

        <motion.p variants={itemVariants}>
          Full-dimensional intelligent control <br />
          high-efficiency water-saving flushing, <br />
          and nano-glaze surfaces — <br />
          engineered so every ordinary bathroom moment <br />
          becomes an exquisite ritual.
        </p>
  <a href="#catalog">
  <Button className="cursor-pointer">Explore the Range</Button>
</a>
          
          
      </div>
        </motion.p>

          <motion.div variants={itemVariants}>
          <a href="#catalog">  <Button> Explore the Range</Button></a>
          </motion.div>

      </motion.div>


     <div className="absolute bottom-5 left-5">
<span className="inline-flex items-center gap-1.5">
<span className="w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)] text-[#3fbfc7]"></span>
<span className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.15em] uppercase  text-[#3fbfc7]">Foot Trigger — Auto Open &amp; Flush</span>
</span>
     </div>

</div>


     <motion.div 
       style={{ y: y1 }}
       className="absolute inset-0 w-full h-full"
     >
       <img src={heroImg} className="w-full h-full object-cover" />
     </motion.div>
     
     <motion.div 
       style={{ y: y2, opacity }}
       className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"
     />

</div>

	<motion.div className="grid grid-cols-2 md:grid-cols-4 md:col-span-2" style={{ y: y4 }}>
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
</motion.div>

    </div>
    </section> 
  )
}   