import React from "react";
import TeamCard from "@/components/TeamCard";

const Team = () => {
  return (
 
      <div className="bg-[var(--amarillo)] text-black h-[600px] flex flex-col items-center justify-start pt-10 ">
        <h1 className="text-4xl mb-2">The Team</h1>
        <p className="text-lg">Conocé a las capas cracks ídolas de nuestras diseñadoras :P</p>
        <div className="h-[250px] w-[1000px] flex justify-around mt-10 ">
          <TeamCard image="/dummy/perrito.jpg" color="[var(--celeste)]" name="Renata Mandelman" role="Backend Developer" />
          <TeamCard image="/dummy/perrito.jpg" color="[var(--violeta)]" name="Bárbara Carballo" role="UX/UI Designer"/>
          <TeamCard image="/dummy/perrito.jpg" color="[var(--naranja)]" name="Micaela Svatzky" role="Frontend Developer"/>
        </div>
      </div>
    
  );
};

export default Team;
