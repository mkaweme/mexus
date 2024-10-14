import ChooseUs from "./components/ChooseUs";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Services /> */}
      <ChooseUs />
      <Projects />
      <Clients />
    </main>
  );
}
