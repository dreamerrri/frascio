import Header from "./components/Header"
import Hero from "./components/Hero"
import Section1 from "./components/Section1"
import { Button } from "@/components/ui/button"
import { SidebarHeader } from "@/components/ui/sidebar"

function Nameko() {
  return (
    <div>
      Renz
    </div>
  )
}

function handleClick() {
  alert("Hello")
}

export default function App() {
  return (

<>
      <Header />

      <main>
        <Hero />
        <Section1 />
        {/* <Features /> */}
        {/* next section component */}

         <Hero />
        <Section1 />
         <Hero />
        <Section1 />
         <Hero />
        <Section1 />
      </main>
    </>
    
  )
}