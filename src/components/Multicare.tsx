import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import imgMultiCareM4Wall from "../imports/Images/9752d9d15e03aafad88a8fab2656e825eb6b1893.png";
import imgMultiCareDial from "../imports/Images/50b92c996d0714c96138cb21691c73c7e67b25c3.png";
import imgIlluminatedDial from "../imports/Images/53e675b9b8d4a355c0e1756cc8d2f0cb1909f3c8.png";

export default function MultiCare() {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });
  const textInView = useInView(textRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-card py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-start">
        {/* Image grid */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="col-span-2 rounded-lg overflow-hidden bg-muted h-[320px]">
            <img src={imgMultiCareM4Wall} alt="Frascio MultiCare M4 wall-mounted unit" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden bg-muted h-[200px]">
            <img src={imgMultiCareDial} alt="MultiCare control dial detail" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden bg-muted h-[200px]">
            <img src={imgIlluminatedDial} alt="MultiCare seat detail" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, x: 50 }}
          animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-4"
        >
          <Badge>MultiCare M4</Badge>
          <h2 className="font-['Space_Grotesk'] font-semibold text-[42px] leading-[1.08] tracking-[-0.01em] text-foreground mt-5 mb-6">
            {"Today's technology, for everyone."}
          </h2>
          <div className="space-y-4 font-['Inter'] text-[15px] leading-[1.65] text-muted-foreground">
            <p>
              Frascio MultiCare M4 elevates conventional sanitary ware into a fully immersive smart hygiene system. Streamlined, minimalist styling and built-in IoT interconnection make this fully customisable smart bidet seat a fit for any household.
            </p>
            <p>
              Cutting-edge hydro cleansing and temperature-controlled air-drying technology, an array of human-centric functions, and simplified surface sanitation keep daily comfort — and long-term upkeep — effortless.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
