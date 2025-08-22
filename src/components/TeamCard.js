import Image from "next/image";
import Link from "next/link";
import React from "react";

const TeamCard = ({ image, color, name, role }) => {
  return (
    <div className="hover:transition hover:shadow-2xl shadow-black">
      <div className={`flex flex-col justify-center items-center text-black  bg-${color} h-[60px] rounded-t-2xl`}>
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
