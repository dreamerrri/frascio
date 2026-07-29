
import bgImg from "../imports/Images/bgpic.png"


export default function Section3() {
  return (
    <section className="w-full bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url(${bgImg})`}}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[400px]">

    



        <div className="flex flex-col gap-4">
                  
 <h1 className="font-semibold text-[50px] text-white" >Precision, at the fingertip.</h1>
         
<span className="text-white"> A single knurled dial governs wash, seat and flush — ringed in light that tells you, at a glance, exactly what the toilet is doing.
    </span>
        </div>

      </div>
    </section>
  )
}



