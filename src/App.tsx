import Header from "./components/Header"
import Hero from "./components/Hero"
import Section1 from "./components/Section1"



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