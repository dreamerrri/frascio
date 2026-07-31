
import section5Img from "../imports/Images/section5.png"
import { Badge } from "@/components/ui/badge"

export default function Section5() {
  return (
    <section className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[700px]">

        <div className="relative h-[500px] rounded-xl overflow-hidden bg-muted">


     <img src={section5Img} className="absolute inset-0 w-full h-full object-cover" />

</div>



        <div className="flex flex-col gap-4">
               <div className="flex items-center">
                 <span className="inline-block w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
                 <Badge className="ml-2">Energy-Saving Comfort</Badge>
               </div> 
 <h1 className="font-semibold text-[50px]" >Intelligent efficiency, whisper-quiet performance.</h1>
         

Light drifts through windows, weaving dynamic shadows over walls, flooring and Frascio sanitaryware. The subtle balance of light and shadow shapes a calm, unadorned elegant retreat — meticulous craftsmanship fusing architecture, tiles and bath products into one unified artistic space.

All-round intelligent operation, eco water-saving flushing, zero water-pressure restriction, and built-in fragrance tablets for enduring fresh scent — the S400 Series translates spatial art into your everyday bathroom.
        </div>

      </div>
    </section>
  )
}