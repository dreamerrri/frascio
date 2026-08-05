import section4Img from "../imports/Images/section4.png"
import { Badge } from "@/components/ui/badge"

export default function section4() {
  return (
    <section className="bg-white bg-card py-28">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_420px] gap-16 items-center">

        <div>
          <span className="inline-block w-2 h-2 rounded-sm bg-[#3fbfc7] shadow-[0_0_6px_rgba(63,191,199,0.7)]" />
          <Badge className="ml-2">Flagship — Insignia</Badge>

          <h2 className="font-['Space_Grotesk'] font-semibold text-[52px] leading-[1.06] tracking-[-0.01em] text-foreground mt-5 mb-6">
            The ultimate smart toilet
          </h2>

          <div className="space-y-4 font-['Inter'] text-[15px] leading-[1.65] text-muted-foreground mb-8">
            <p>
              Frascio Insignia is engineered to deliver a peerless sanctuary experience within the bathroom space — tailored for connoisseurs chasing the apex of technological refinement.
            </p>
            <p>
              Industry-leading hydro-wash and thermostatic air-drying systems meet a proprietary integrated tank structure and full-scene interconnection via the Frascio Connect ecosystem. Every module, from core hardware to nano-glaze surface treatment, undergoes rigorous refinement.
            </p>
          </div>
        </div>

        <div className="relative h-[520px] w-[400px] rounded-xl overflow-hidden bg-muted">
          <img src={section4Img} className="absolute inset-0 w-full h-full object-cover" />
        </div>

      </div>
    </section>
  )
}