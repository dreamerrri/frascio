
import bg7Img from "../imports/Images/bg7.png"


export default function Section7() {
  return (
    <section className="w-full bg-center bg-cover bg-no-repeat" style={{backgroundImage:`url(${bg7Img})`}}>
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center min-h-[500px]">

    



        <div className="flex flex-col gap-4">
                         <span className="font-semibold text-[10px] " style={{color:"#3fbfc7"}}>Design Philosophy</span> 
 
 <h1 className="font-semibold text-[50px] text-white" >We look to nature, not machines.</h1>
         
<span className="text-white"> 
With a deep focus on human-centered design, we uncover the technologies that matter to users — then draw visual inspiration from the natural world, pairing beautiful, approachable forms with intuitive, highly personalised features.    </span>
        </div>

      </div>
    </section>
  )
}



