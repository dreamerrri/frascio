
import section91Img from "../imports/Images/section91.png"
import section92Img from "../imports/Images/section92.png"
import section93Img from "../imports/Images/section93.png"

export default function section9() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">

        <div className="py-16">
          <span className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
            Multicare -M4
          </span>
          <h1 className="font-semibold md:text-[30px] leading-[1.05] tracking-[-0.02em] text-foreground mt-6 mb-7">
            Built to outlast, engineered to surprise.
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group flex gap-5 p-6 rounded-lg border border-border hover:border-accent/30 transition-colors duration-200">
            <div className="w-[120px] h-[90px] shrink-0 rounded-md overflow-hidden bg-muted">
              <img src={section91Img} className="w-full h-full object-cover" />
              
            </div>
            <div>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               
              </div>
          </div>


           <div className="group flex gap-5 p-6 rounded-lg border border-border hover:border-accent/30 transition-colors duration-200">
            <div className="w-[120px] h-[90px] shrink-0 rounded-md overflow-hidden bg-muted">
              <img src={section91Img} className="w-full h-full object-cover" />
              
            </div>
            <div>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               
              </div>
          </div>



           <div className="group flex gap-5 p-6 rounded-lg border border-border hover:border-accent/30 transition-colors duration-200">
            <div className="w-[120px] h-[90px] shrink-0 rounded-md overflow-hidden bg-muted">
              <img src={section92Img} className="w-full h-full object-cover" />
              
            </div>
            <div>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               
              </div>
          </div>



           <div className="group flex gap-5 p-6 rounded-lg border border-border hover:border-accent/30 transition-colors duration-200">
            <div className="w-[120px] h-[90px] shrink-0 rounded-md overflow-hidden bg-muted">
              <img src={section93Img} className="w-full h-full object-cover" />
              
            </div>
            <div>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               <p className="font-semibold text-[10px]" style={{ color: "#3fbfc7" }}>
                HELL
               </p>
               
              </div>
          </div>
        </div>

      </div>
    </section>
  )
}