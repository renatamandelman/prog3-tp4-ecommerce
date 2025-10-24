import React from "react";
import TeamCard from "@/components/TeamCard";

const Team = () => {
  return (
    <div className="bg-[var(--amarillo)] text-[#3B413C] min-h-[600px] md:min-h-[600px] lg:min-h-[700px] flex flex-col items-center justify-start pt-8 pb-8 md:pt-10 lg:pt-12 px-4">
      <h1 className="text-5xl md:text-[60px] lg:text-[80px] mb-3 family-serif text-center">
        The Team
      </h1>
      <p className="text-base md:text-lg lg:text-xl text-center max-w-[600px]">
        Conocé a las capas, cracks e ídolas de nuestras diseñadoras :P
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center md:justify-around w-full md:w-[90%] lg:w-[1000px] gap-6 md:gap-8 mt-8 md:mt-10">
        <TeamCard
          image="/assets/rena.jpeg"
          color="bg-[#9DB5B2]"
          name="Renata Mandelman"
          role="Backend Developer"
        />
        <TeamCard
          image="/assets/barby.jpeg"
          color="bg-[#925E78]"
          name="Bárbara Carballo"
          role="UX/UI Designer"
        />
        <TeamCard
          image="/assets/mica.jpeg"
          color="bg-[#F19A3E]"
          name="Micaela Svatzky"
          role="Frontend Developer"
        />
      </div>
    </div>
  );
};

export default Team;
