import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col  bg-[#ECECAB]">
      <h1 className=" text-[#3B413C] text-5xl family-serif pl-7 mt-8 ">
        Services
      </h1>

      <div className="relative w-full h-[500px]">
        <div>
          <p className="text-black absolute left-300 top-5 text-2xl">
            Web Design
          </p>
          <Image
            src="/orangeTabSVG.svg"
            width={1600}
            height={100}
            alt="orange tab"
            className="w-[1800px]"
          />
        </div>
        <div>
          <p className="text-white absolute left-150 top-32 text-2xl z-2">
            Branding
          </p>
          <Image
            src="/purpleTabSVG.svg"
            width={1600}
            height={100}
            alt="orange tab"
            className="absolute top-25 w-[1800px]"
          />
        </div>
        <div>
          <p className="text-black absolute left-260 top-60 text-2xl z-2">
            UX/UI
          </p>
          <Image
            src="/blueTabSVG.svg"
            width={1600}
            height={100}
            alt="orange tab"
            className="absolute top-55 w-[1800px]"
          />
        </div>
        <div>
          <p className="text-black absolute left-77 top-85 text-2xl z-2">
            Our Products
          </p>
          <Image
            src="/yellowTabSVG.svg"
            width={1600}
            height={100}
            alt="orange tab"
            className="absolute top-80 w-[1800px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;