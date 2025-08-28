import React from "react";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="w-full min-h-screen bg-[#E6D6C6] text-[#3B413C] px-8 py-12 flex flex-col items-center">
      <h1 className="text-[80px] family-serif mb-8 self-start text-left ">
        Our Work
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        <WorkCard
          title="2025 - Streaming web design"
          image="/dummy/webDesign.jpg"
          color="#ECECAB"
        />
        <WorkCard
          title="2024 - Party Flyers"
          image="/dummy/partyFlyer.png"
          color="#F19A3E"
        />
        <WorkCard
          title="2025 - Branding Les Matcha!"
          image="/dummy/lesMatcha.png"
          color="#9DB5B2"
        />
        <WorkCard
          title="2024- Branding Loopies"
          image="/dummy/loopies.png"
          color="#925E78"
        />
      </div>
    </div>
  );
};

export default Work;
