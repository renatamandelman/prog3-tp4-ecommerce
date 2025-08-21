import React from "react";
import ServiceCard from "./TeamCard";

const Services = () => {
  return (
 
      <div className="bg-yellow-200 text-black h-[600px] flex flex-col items-center justify-start pt-10 ">
        <h1 className="text-4xl mb-2">The Team</h1>
        <p className="text-lg">Conocé a las capas cracks ídolas de nuestras diseñadoras :P</p>
        <div className="h-[250px] w-[1000px] flex justify-around mt-10 ">
          <ServiceCard image="/dummy/perrito.jpg" color="bg-sky-200" name="Renata Mandelman" role="Backend Developer" />
          <ServiceCard image="/dummy/perrito.jpg" color="bg-violet-400" name="Bárbara Carballo" role="UX/UI Designer"/>
          <ServiceCard image="/dummy/perrito.jpg" color="bg-orange-400" name="Micaela Svatzky" role="Frontend Developer"/>
        </div>
      </div>
    
  );
};
export default Services;
