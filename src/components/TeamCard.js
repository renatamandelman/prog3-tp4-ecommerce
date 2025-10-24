import Image from "next/image";
import React from "react";

const TeamCard = ({ image, color, name, role }) => {
  return (
    <div className="rounded-t-2xl hover:transition hover:shadow-2xl hover:cursor-pointer shadow-black">
      <div
        className={`flex flex-col justify-center items-center text-white ${color} h-[50px] md:h-[55px] lg:h-[60px] rounded-t-2xl px-2 md:px-4`}
      >
        <h5 className="font-semibold text-sm md:text-base lg:text-lg text-center">{name}</h5>
        <p className="font-medium text-xs md:text-sm lg:text-base text-center">{role}</p>
      </div>
      <Image
        className="rounded-b-2xl w-[200px] h-[200px] md:w-[230px] md:h-[230px] lg:w-[250px] lg:h-[250px] object-cover"
        src={image}
        width={250}
        height={250}
        alt={`${name}`}
      />
    </div>
  );
};

export default TeamCard;
