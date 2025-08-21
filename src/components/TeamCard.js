import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ image, color, name, role }) => {
  return (
    <div>
      <div className={`flex flex-col justify-center items-center text-black  ${color} h-[60px] rounded-t-2xl`}>
        <h5 className="font-semibold">{name}</h5>
        <p className="font-medium">{role}</p>
      </div>
      <Image
        className="rounded-b-2xl w-[250px]"
        src={image}
        width={200}
        height={200}
        alt={`${image}`}
      />
    </div>
  );
};

export default TeamCard;
