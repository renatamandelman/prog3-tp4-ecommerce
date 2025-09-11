const BrandingProcess = ({ color }) => {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-2 text-[#2F2F2F]">Our Process</h1>
      <h3 className="text-2xl font-semibold mb-4 text-[#925E78]">
        How we build your brand
      </h3>
      <p className="text-base mb-8 text-[#333]">
        We follow a clear and collaborative process to ensure your brand
        identity is{" "}
        <span className="font-semibold">
          authentic, professional, and memorable.
        </span>
      </p>

      <div className={`flex justify-center rounded-lg p-8 text-left  text-white ${color}`}>
        <ol className="space-y-6 list-decimal ">
          <li>
            <p className="font-semibold text-white">Initial Brief</p>
            <p className="text-sm text-white">
              We discuss your brand, values, and goals to understand what you
              want to communicate.
            </p>
          </li>
          <li>
            <p className="font-semibold text-white">Research & Moodboard</p>
            <p className="text-sm text-white">
              We analyze your industry and define a visual direction that
              reflects your brand’s essence.
            </p>
          </li>
          <li>
            <p className="font-semibold text-white">Design & Proposals</p>
            <p className="text-sm text-white">
              We create identity options and refine them together until we reach
              the perfect fit.
            </p>
          </li>
          <li>
            <p className="font-semibold text-white">Final Delivery</p>
            <p className="text-sm text-white">
              You receive all the files, brand guidelines, and resources ready
              to use across every platform.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default BrandingProcess;
