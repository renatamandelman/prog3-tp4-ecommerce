import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col bg-[#ECECAB]">
      <h1 className="text-[#3B413C] text-3xl md:text-4xl lg:text-5xl family-serif pl-4 md:pl-6 lg:pl-7 mt-6 md:mt-8 lg:mt-10">
        Services
      </h1>

      <div className="relative w-full h-[150px] md:h-[450px] lg:h-[500px] mt-4 md:mt-6 lg:mt-8 text-base md:text-lg lg:text-xl">
        <div>
          <Image
            src="/WebDesign.svg"
            width={900}
            height={50}
            alt="orange tab"
            className="w-[800px] md:w-[1600px] lg:w-[2000px]"
          />
        </div>
        <div>
          <Image
            src="/Branding.svg"
            width={1800}
            height={100}
            alt="purple tab"
            className="absolute top-[30px] md:top-[100px] lg:top-[120px] w-[800px] md:w-[1600px] lg:w-[2000px]"
          />
        </div>
        <div>
          <Image
            src="/UXUI.svg"
            width={1800}
            height={100}
            alt="blue tab"
            className="absolute top-[65px] md:top-[160px] lg:top-[220px] w-[700px] md:w-[1400px] lg:w-[1800px]"
          />
        </div>
        <div>
          <Image
            src="/OurProducts.svg"
            width={1600}
            height={100}
            alt="yellow tab"
            className="absolute top-[95px] md:top-[220px] lg:top-[280px] w-[700px] md:w-[1500px] lg:w-[1800px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
