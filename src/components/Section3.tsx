import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bgImg from "../imports/Images/bgpic.png"


export default function Section3() {
  const textRef = useRef<HTMLDivElement>(null);
  const textInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url(${bgImg})`}}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[400px]">

        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: 50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h1 className="font-semibold text-[50px] text-white" >Precision, at the fingertip.</h1>
          <span className="text-white"> A single knurled dial governs wash, seat and flush — ringed in light that tells you, at a glance, exactly what the toilet is doing.
          </span>
        </motion.div>

      </div>
    </section>
  )
}
