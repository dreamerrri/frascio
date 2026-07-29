import { Button } from "@/components/ui/button"
import innovateImg from "../imports/Images/Innovate.png"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Section1() {
  return (
    <section className="bg-white w-full">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[560px]">

        <div className="relative h-[520px] w-[520px] rounded-lg">
          <AspectRatio ratio={4 / 3}>
            <img src={innovateImg} className="w-full h-full object-cover rounded-lg" />
          </AspectRatio>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Comfort is essential luxury.</h1>
          <p>
            Full-dimensional intelligent control <br />
            high-efficiency water-saving flushing, <br />
            and nano-glaze surfaces — <br />
            engineered so every ordinary bathroom moment <br />
            becomes an exquisite ritual.
          </p>
          <Button>Explore the Range</Button>
        </div>

      </div>
    </section>
  )
}