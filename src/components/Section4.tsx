import { Button } from "@/components/ui/button"
import section4Img from "../imports/Images/section4.png"



export default function section4() {
  return (

   <section className="bg-white pt-[110px] pb-0 overflow-hidden">
     
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[560px]">
      

      <div className="py-16">
        <span className="font-semibold text-[10px] " style={{color:"#3fbfc7"}}>Flagship — Insignia</span> 
        <h1 className="font-semibold text-[50px] md:text-[80px] leading-[1.05] tracking-[-0.02em] text-foreground mt-6 mb-7">The ultimate smart toilet.
        </h1>
    Frascio Insignia is engineered to deliver a peerless sanctuary experience within the bathroom space — tailored for connoisseurs chasing the apex of technological refinement.

Industry-leading hydro-wash and thermostatic air-drying systems meet a proprietary integrated tank structure and full-scene interconnection via the Frascio Connect ecosystem. Every module, from core hardware to nano-glaze surface treatment, undergoes rigorous refinement.
       
      </div>


  <div className="relative h-[520px] w-[400px] rounded-xl overflow-hidden bg-muted">


     <img src={section4Img} className="absolute inset-0 w-full h-full object-cover" />

</div>



    </div>
    </section> 
  )
}   