import Records from "./Records/Records";
import Hero from "./Hero/Hero";
import LogoSection from "./LogoSection/LogoSection";
import Feedback from "./Feedback/Feedback";

export default function HomePage() {
  return (<>
  <section id="home">
    <Hero />
    <LogoSection />
    <Records />
    <Feedback/>

  </section>
    </>
  );
}