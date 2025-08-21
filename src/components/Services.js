import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
 
      <div className="bg-yellow-800 h-[400px] flex flex-col items-center justify-center ">
        <h1 className="text-4xl">Services</h1>
        <div className="h-[250px] w-[1000px] flex justify-around mt-10 ">
          <ServiceCard image="/dummy/perrito.jpg" />
          <ServiceCard image="/dummy/perrito.jpg" />
          <ServiceCard image="/dummy/perrito.jpg" />
        </div>
      </div>
    
  );
};
export default Services;
