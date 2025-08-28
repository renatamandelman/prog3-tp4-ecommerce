import React from "react";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Work from "@/components/Work";

const HomeContainer = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Team />
      <Work />
    </div>
  );
};

export default HomeContainer;