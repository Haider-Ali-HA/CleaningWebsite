import { FaShippingFast, FaShieldAlt, FaGem } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why-choose-us py-16 px-8 bg-[#0B1215]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Fast & Free Shipping */}
        <div className="flex flex-col items-center  shadow-[0px_0px_5px_#ffffff] hover:shadow-[0px_0px_10px_#91e012] transition-all duration-500 hover:scale-105 p-6 rounded-lg">
          <div className="icon bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
            <FaShippingFast size={30} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Fast & Free Shipping</h3>
          <p className="text-gray-400 text-center">
            We offer quick and reliable shipping with no hidden charges.
          </p>
        </div>

        {/* Warranty Protection */}
      <div className="flex flex-col items-center  shadow-[0px_0px_5px_#ffffff] hover:shadow-[0px_0px_10px_#91e012] transition-all duration-500 hover:scale-105 p-6 rounded-lg ">
          <div className="icon bg-teal-200 text-teal-600 p-4 rounded-full mb-4">
            <FaShieldAlt size={30} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Warranty Protection</h3>
          <p className="text-gray-400 text-center">
            Rest assured with our comprehensive warranty coverage.
          </p>
        </div>

        {/* Premium Materials */}
        <div className="flex flex-col items-center  shadow-[0px_0px_5px_#ffffff] hover:shadow-[0px_0px_10px_#91e012] transition-all duration-500 hover:scale-105 p-6 rounded-lg">
          <div className="icon bg-blue-100 text-blue-600 p-4 rounded-full mb-4">
            <FaGem size={30} />
          </div>
          <h3 className="text-lg font-semibold mb-2">Premium Materials</h3>
          <p className="text-gray-400 text-center">
            Only the best materials are used in our services and products.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
