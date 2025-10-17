import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col  bg-[#ECECAB]">
      <h1 className=" text-[#3B413C] text-5xl family-serif pl-7 mt-8 ">
        Services
      </h1>

      <div className="relative w-full h-[500px]">
        <div>
          <Image
            src="/WebDesign.svg"
            width={1800}
            height={100}
            alt="orange tab w-[2400px]"
          />
        </div>
        <div>
          <Image
            src="/Branding.svg"
            width={1800}
            height={100}
            alt="purple tab"
            className="absolute top-25 w-[2000px]"
          />
        </div>
        <div>
          <Image
            src="/UXUI.svg"
            width={1800}
            height={100}
            alt="blue tab"
            className="absolute top-55 w-[1800px]"
          />
        </div>
        <div>
          <Image
            src="/OurProducts.svg"
            width={1600}
            height={100}
            alt="yellow tab"
            className="absolute top-80 w-[1800px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
