import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Hire from "../components/Hire";
import Testimonials from "../components/Testimonials";

const home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Hire />
      <Testimonials />
    </div>
  );
};

export default home;
