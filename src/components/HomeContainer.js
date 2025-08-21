import React from 'react'
import Hero from './Hero'

const HomeContainer = () => {
  return (
    <Hero />
  )
}

import React from "react";
import Services from "@/components/Team";

import Hero from "./Hero";

const HomeContainer = () => {
  return (
    <div>
      <Hero />
      <Services />
    </div>
  );
};

export default HomeContainer;
