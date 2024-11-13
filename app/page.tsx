import React from "react";
import ChooseUs from "./components/ChooseUs";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <ChooseUs />
      <Projects />
      <Clients />
    </main>
  );
}
