import Records from "./Records/Records";
import Hero from "./Hero/Hero";
import LogoSection from "./LogoSection/LogoSection";

export default function HomePage() {
  return (<>
  <section id="home">
    <Hero />
    <LogoSection />
    <Records />

  </section>
    </>
  );
}