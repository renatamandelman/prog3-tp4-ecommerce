import Image from "next/image";

const ServicesContainer = ({ pageStyle }) => {
  return (
    <div className="text-[#3B413C] py-10 px-6 md:px-20">
      <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-center md:text-left">
        Customized
      </h3>

      {/* SECTION 1 */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:h-[500px] mb-16">
        <div className="flex flex-col justify-start max-w-lg space-y-4 text-center md:text-left">
          <h5 className="text-2xl md:text-3xl font-semibold">Identity Pack #1</h5>
          <p className="text-sm md:text-base">{pageStyle.identityPackParags[0]}</p>
          <h6 className="font-semibold text-lg md:text-xl">What’s included?</h6>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            {pageStyle.identityPackList1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button
            className={`mt-4 px-6 py-2 ${pageStyle.color} text-white rounded-lg shadow-md hover:bg-[#7a4a61] transition`}
          >
            Plan a meeting
          </button>
        </div>

        {/* Imagen */}
        <div className="flex-shrink-0">
          <Image
            src={`/assets/${pageStyle.image1}`}
            width={450}
            height={450}
            className="rounded-lg shadow-[6px_6px_0_rgba(255,115,0,0.7)] object-cover w-full max-w-[350px] md:max-w-[450px]"
            alt={pageStyle.image1}
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:h-[500px]">
        {/* Imagen */}
        <div className="flex-shrink-0">
          <Image
            src={`/assets/${pageStyle.image2}`}
            width={450}
            height={450}
            className="rounded-lg shadow-[6px_6px_0_rgba(174,174,174,0.7)] object-cover w-full max-w-[350px] md:max-w-[450px]"
            alt={pageStyle.image2}
          />
        </div>

        <div className="flex flex-col justify-start max-w-lg space-y-4 text-center md:text-left">
          <h5 className="text-2xl md:text-3xl font-semibold">Identity Pack #2</h5>
          <p className="text-sm md:text-base">{pageStyle.identityPackParags[1]}</p>
          <h6 className="font-semibold text-lg md:text-xl">What’s included?</h6>
          <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
            {pageStyle.identityPackList2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button
            className={`mt-4 px-6 py-2 ${pageStyle.color} text-white rounded-lg shadow-md hover:bg-[#7a4a61] transition`}
          >
            Plan a meeting
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesContainer;
