import { Button } from "@/components/ui/button"
import section2 from "../imports/Images/section2.png"


export default function Section2() {
  return (
    <section className="w-full">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[700px]">

        <div className="relative h-[400px] rounded-xl overflow-hidden bg-muted">


     <img src={section2} className="absolute inset-0 w-full h-full object-cover" />

</div>



        <div className="flex flex-col gap-4">
                  <span className="font-semibold text-[10px] " style={{color:"#3fbfc7"}}>Innovating Everyday</span> 
 <h1 className="font-semibold text-[50px]" >Soft light, drawn through the room.</h1>
         

Light drifts through windows, weaving dynamic shadows over walls, flooring and Frascio sanitaryware. The subtle balance of light and shadow shapes a calm, unadorned elegant retreat — meticulous craftsmanship fusing architecture, tiles and bath products into one unified artistic space.

All-round intelligent operation, eco water-saving flushing, zero water-pressure restriction, and built-in fragrance tablets for enduring fresh scent — the S400 Series translates spatial art into your everyday bathroom.
        </div>

      </div>
    </section>
  )
}