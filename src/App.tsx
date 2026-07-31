import Header from "./components/Header"
import Hero from "./components/Hero"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"
import Section8 from "./components/Section8"
import MultiCare from "./components/Multicare"
import { DesignPhilosophy } from "./components/DesignPhilosophy"
import { Catalog } from "./components/Catalog"
import { TechSection } from "./components/Techsection"
import { WallHung } from "./components/Wallhung"
import { MarbleLifestyle } from "./components/Marblelifestyle"
import { Footer } from "./components/Footer"

export default function App() {
  return (

<>
      <Header />

      <main>
        <Hero />
        <Section1 />
        {/* <Features /> */}
        {/* next section component */}
         <Section2 />
        
         <Section3 />
         <Section4 />
         <Section5 />
         <MultiCare />
         <DesignPhilosophy />
         <Catalog />
         <TechSection />
         <WallHung />
         <MarbleLifestyle />
         <Footer />
      </main>
    </>
    
  )
}

