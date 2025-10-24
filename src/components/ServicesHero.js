import Navbar from "@/components/Navbar";

const ServicesHero = ({ pageStyle }) => {
  const layers = 6;

  return (
    <div className="w-full overflow-hidden">
      <Navbar color={"#FFFFFF"} logo={"logoBlanco.png"} />

      <div
        className={`px-6 md:px-20 py-20 md:py-[125px] ${pageStyle.color} text-white`}
      >
        {/* Título con capas */}
        <div className="relative mb-10 h-auto md:h-30 flex justify-center md:justify-start">
          {[...Array(layers - 1)].map((_, i) => (
            <h1
              key={i}
              className="absolute font-semibold select-none text-[2.8rem] sm:text-6xl md:text-8xl lg:text-9xl"
              style={{
                color: pageStyle.secColor,
                opacity: 1 - (i + 1) * 0.25,
                transform: `translateY(${(i + 1) * -8}px)`,
              }}
            >
              {pageStyle.title}
            </h1>
          ))}

          <h1 className="relative font-semibold text-[2.8rem] sm:text-6xl md:text-8xl lg:text-9xl select-none text-white">
            {pageStyle.title}
          </h1>
        </div>

        {/* Párrafo */}
        <p className="text-base sm:text-lg font-light max-w-full sm:max-w-[500px] md:max-w-[670px] mx-auto md:mx-0 text-center md:text-left leading-relaxed">
          {pageStyle.parag}
        </p>
      </div>
    </div>
  );
};

export default ServicesHero;
