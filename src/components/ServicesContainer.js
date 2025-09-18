import Image from "next/image";

const ServicesContainer = ({ pageStyle }) => {
  return (
    <div className=" text-[#3B413C] py-10 px-20">
      <h3 className="text-4xl font-semibold mb-6">Customized</h3>

      <section className="flex flex-row items-center justify-between gap-10 h-[500px] mb-10">
        {/* Texto */}
        <div className="flex flex-col justify-start max-w-lg space-y-4">
          <h5 className="text-3xl font-semibold">Identity Pack #1</h5>
          <p>{pageStyle.identityPackParags[0]}</p>
          <h6 className="font-semibold">What’s included?</h6>
          <ul className="list-disc list-inside space-y-1">
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

        <div className="flex-shrink-0">
          <Image
            src="/dummy/perrito.jpg"
            width={450}
            height={450}
            className="rounded-lg shadow-[6px_6px_0_rgba(255,115,0,0.7)] object-cover"
            alt="perrito"
          />
        </div>
      </section>

      <section className="flex flex-row items-center justify-between gap-10 h-[500px]">
        <div className="flex-shrink-0">
          <Image
            src="/dummy/perrito.jpg"
            width={450}
            height={450}
            className="rounded-lg shadow-[6px_6px_0_rgba(174,174,174,0.7)]"
            alt="perrito"
          />
        </div>
        <div className="flex flex-col justify-start max-w-lg space-y-4">
          <h5 className="text-3xl font-semibold">Identity Pack #2</h5>
          <p>{pageStyle.identityPackParags[1]}</p>
          <h6 className="font-semibold">What’s included?</h6>
          <ul className="list-disc list-inside space-y-1">
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
