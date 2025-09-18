import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col  bg-[#ECECAB]">
      <h1 className=" text-[#3B413C] text-5xl family-serif pl-7 mt-8 ">
        Services
      </h1>

      <div className="relative w-full h-[500px]">
        <div>
          <p className="text-black absolute left-264 top-5 text-2xl">
            Web Design
          </p>
          <Image
            src="/orangeTab.png"
            width={1400}
            height={100}
            alt="orange tab w-[1400px]"
          />
        </div>
        <div>
          <p className="text-white absolute left-132 top-32 text-2xl z-2">
            Branding
          </p>
          <Image
            src="/purpleTab.png"
            width={1400}
            height={100}
            alt="purple tab"
            className="absolute top-25 w-[1400px]"
          />
        </div>
        <div>
          <p className="text-black absolute left-230 top-60 text-2xl z-2">
            UX/UI
          </p>
          <Image
            src="/blueTab.png"
            width={1400}
            height={100}
            alt="blue tab"
            className="absolute top-55 w-[1400px]"
          />
        </div>
        <div>
             <p className="text-black absolute left-68 top-85 text-2xl z-4">
            Our Products
          </p>
        <Image
          src="/yellowTab.png"
          width={1400}
          height={100}
          alt="yellow tab"
          className="absolute top-80 w-[1400px] z-3"
        /></div>
      </div>
    </div>
  );
};

export default Services;
