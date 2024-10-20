import Image from "next/image";
import React from "react";
import Services_Section from "./components/Services_Section";
import Projects from "./components/Projects";
import SHE from "./components/SHE";

const Services = () => {
  return (
    <>
      <Services_Section />
      <Projects />
      <SHE />
    </>
  );
}

export default Services;