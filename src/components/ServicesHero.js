const ServicesHero = ({pageStyle}) => {
  const layers = 6;

  return (
    <div className={` px-20 py-[125px] ${pageStyle.color}`}>
        
      <div className="relative mb-10 h-30">
        {/* capas grises primero */}
        {[...Array(layers - 1)].map((_, i) => (
          <h1
            key={i}
            className="absolute text-9xl font-semibold select-none"
            style={{
              color: pageStyle.secColor,
              opacity: 1 - (i + 1) * 0.25, 
              transform: `translateY(${(i + 1) * -10}px)`, 
            }}
          >
            {pageStyle.title}
          </h1>
        ))}

        <h1 className="relative text-9xl font-semibold text-white select-none">
          {pageStyle.title}
        </h1>
      </div>
      <p className="text-lg font-light w-[670px]">
        {pageStyle.parag}
      </p>
    </div>
  );
};

export default ServicesHero;
