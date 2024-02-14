import About from "@/components/About";
import Featured from "@/components/Featured";
import Find from "@/components/Find";


import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recommendation from "@/components/Recommendation";
import Testinomials from "@/components/Testinomials";
import Trusted from "@/components/Trusted";


export default function Home() {
  return (
    <main>
     <Header/>
      <Hero/>
      <Featured/>
      <About/>
    <Recommendation/>
    <Find/>
    <Trusted/>
    <Testinomials/>
    </main>
  );
}
