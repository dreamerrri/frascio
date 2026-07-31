
import section61Img from "../imports/Images/Section6-1.png"
import section62Img from "../imports/Images/Section6-2.png"
import bgImg from "../imports/Images/bgpic.png"




export default function section6() {
  return (

   <section className="bg-white pt-[110px] pb-0 overflow-hidden">
     

      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[560px]">
      
      
        <div className="grid grid-cols-2 gap-3">
    
<div className="col-span-2 rounded-lg overflow-hidden bg-muted h-[320px]">

 <img src={section61Img} className="w-full h-full object-cover" />
</div>
    <div className="rounded-lg overflow-hidden bg-muted h-[200px]">
 <img src={section62Img} className=" w-full h-full object-cover" />
    </div>
     <div className="rounded-lg overflow-hidden bg-muted h-[200px]">
         <img src={bgImg} className=" w-full h-full object-cover" />
    </div>
</div>


      <div className="py-16">
        <span className="font-semibold text-[10px] " style={{color:"#3fbfc7"}}>Multicare -M4</span> 
        <h1 className="font-semibold text-[50px] md:text-[80px] leading-[1.05] tracking-[-0.02em] text-foreground mt-6 mb-7">Today's technology, for everyone.
        </h1>
Frascio MultiCare M4 elevates conventional sanitary ware into a fully immersive smart hygiene system. Streamlined, minimalist styling and built-in IoT interconnection make this fully customisable smart bidet seat a fit for any household.
<br/>
Cutting-edge hydro cleansing and temperature-controlled air-drying technology, an array of human-centric functions, and simplified surface sanitation keep daily comfort — and long-term upkeep — effortless.
      </div>






    </div>
    </section> 
  )
}   