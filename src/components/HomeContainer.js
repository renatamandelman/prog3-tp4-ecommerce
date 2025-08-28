import React from "react";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "./Footer";

const HomeContainer = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Team />
      <Work />
      <Footer />
    </div>
  );
};

export default HomeContainer;