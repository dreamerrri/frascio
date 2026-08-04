
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import innovateImg from "../imports/Images/Innovate.png"
import { Badge } from "@/components/ui/badge"


export default function Section1() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const textInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-white w-full">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[700px]">

        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[400px] rounded-xl overflow-hidden bg-muted"
        >
     <img src={innovateImg} className="absolute inset-0 w-full h-full object-cover" />
</motion.div>



        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: 50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
                      <Badge className="ml-2">Innovating Everyday</Badge>
                    </div> 
                  <h1 className="font-semibold text-[50px]" >Every detail, redrawn from first principles.</h1>
         

          With decades of sanitary ware expertise and persistent innovative ingenuity, Frascio stands at the forefront of premium bathroom innovation — crafting sophisticated solutions that redefine daily hygiene, comfort and lifestyle quality.

Our ingenuity is fully embodied in our flagship smart toilets. A built-in boost structure achieves zero water-pressure limitation, delivering stable, strong flushing performance in any household plumbing condition, while an embedded fragrance tablet keeps the air soft, fresh and lingering.

Cutting-edge smart technology, optimised engineering, and premium high-grade materials — balanced to turn ordinary bathroom moments into an exquisite, comfortable ritual.

        </motion.div>

      </div>
    </section>
  )
}