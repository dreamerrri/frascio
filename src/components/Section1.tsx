
import innovateImg from "../imports/Images/Innovate.png"


export default function Section1() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[700px]">

        <div className="relative h-[400px] rounded-xl overflow-hidden bg-muted">


     <img src={innovateImg} className="absolute inset-0 w-full h-full object-cover" />

</div>



        <div className="flex flex-col gap-4">
                  <span className="font-semibold text-[10px] " style={{color:"#3fbfc7"}}>Innovating Everyday</span> 
 <h1 className="font-semibold text-[50px]" >Every detail, redrawn from first principles.</h1>
         

          With decades of sanitary ware expertise and persistent innovative ingenuity, Frascio stands at the forefront of premium bathroom innovation — crafting sophisticated solutions that redefine daily hygiene, comfort and lifestyle quality.

Our ingenuity is fully embodied in our flagship smart toilets. A built-in boost structure achieves zero water-pressure limitation, delivering stable, strong flushing performance in any household plumbing condition, while an embedded fragrance tablet keeps the air soft, fresh and lingering.

Cutting-edge smart technology, optimised engineering, and premium high-grade materials — balanced to turn ordinary bathroom moments into an exquisite, comfortable ritual.
          
        </div>

      </div>
    </section>
  )
}