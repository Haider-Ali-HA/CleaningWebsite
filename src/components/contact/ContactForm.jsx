import React, { useRef } from "react";
import { useAnimations } from "../../context/Animations";
import { useInView, motion } from "framer-motion";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { fadeInDownAnimation } = useAnimations();
  const refAnimation = useRef(null);
  const isInView = useInView(refAnimation, { once: true });

  // THIS FORM IS WORKING FINE WITH THE WEB3FORMS API. YOU NEED TO JUST ADD YOUR ACCESS KEY IN THE FORM DATA TO GET THE FORM DATA IN YOUR EMAIL.

  // Form submission  start
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "310879b3-b061-4c0e-b819-b43fb3a82729");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult("");
      }
  };

  // Form submission end

  return (
    <section className="py-10  sm:py-16 lg:py-24">
      <motion.div
        ref={refAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInDownAnimation}
        className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"
      >
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="mt-6 overflow-hidden  text-black bg-white rounded-xl">
            <div className="px-6 py-12 sm:p-12">
              <h3 className="text-3xl font-semibold text-center ">
                Send us a message
              </h3>
              <form onSubmit={onSubmit} className="mt-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                  <div>
                    <label htmlFor="name" className="text-base font-medium ">
                      {" "}
                      Your name{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your full name"
                        required
                        className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-[#0B1215] border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="text-base font-medium ">
                      {" "}
                      Company name{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        placeholder="Enter your company name"
                        required
                        className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-[#0B1215] border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-base font-medium ">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email address"
                        required
                        className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-[#0B1215] border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-base font-medium ">
                      {" "}
                      Phone number{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone number"
                        required
                        className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-[#0B1215] border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="street" className="text-base font-medium ">
                      {" "}
                      Street address{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="street"
                        id="street"
                        placeholder="Enter your street address"
                        required
                        className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-[#0B1215] border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="address2"
                      className="text-base font-medium "
                    >
                      {" "}
                      Address line 2{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="address2"
                        id="address2"
                        placeholder="Enter your address line 2"
                        required
                        className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-[#0B1215] border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="city" className="text-base font-medium ">
                      {" "}
                      City{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter your city"
                        required
                        className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-[#0B1215] border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="state" className="text-base font-medium ">
                      {" "}
                      State{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="Enter your state"
                        required
                        className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-[#0B1215] border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="zip" className="text-base font-medium ">
                      {" "}
                      Zip code{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <input
                        type="number"
                        name="zip"
                        id="zip"
                        placeholder="Enter your zip code"
                        required
                        className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-[#0B1215] border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="hearAboutUs"
                      className="text-base font-medium "
                    >
                      {" "}
                      How did you hear about us?{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <select
                        name="hearAboutUs"
                        id="hearAboutUs"
                        required
                        className="block w-full px-4 py-4 text-white bg-[#0B1215] border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                      >
                        <option value="" disabled selected>
                          Select
                        </option>
                        <option value="google search">Google search</option>
                        <option value="google ad">Google ad</option>
                        <option value="radio-101.5">Radio-101.5</option>
                        <option value="yard signs">Yard signs</option>
                        <option value="yahoo search">Yahoo search</option>
                        <option value="bing search">Bing search</option>
                        <option value="facebook">Facebook</option>
                        <option value="facebook:moms group">
                          Facebook: Moms group
                        </option>
                        <option value="family / friend referral">
                          Family / friend referral
                        </option>
                        <option value="saw truck">Saw truck</option>
                        <option value="NADCA website">NADCA website</option>
                        <option value="duct buddy website">
                          Duct buddy website
                        </option>
                        <option value="billboards & signs">
                          Billboards & signs
                        </option>
                        <option value="cable tv">Cable TV</option>
                        <option value="streaming tv">Streaming TV</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-base font-medium ">
                      {" "}
                      Message{" "}
                    </label>
                    <div className="mt-2.5 relative">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Enter your questions, inquiries & comments"
                        required
                        className="block w-full px-4 py-4 text-white placeholder-gray-500 transition-all duration-200 bg-[#0B1215] border border-gray-200 rounded-md resize-y focus:outline-none focus:border-primary caret-primary"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <button className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-black transition-all duration-200 bg-primary border border-transparent rounded-md focus:outline-none hover:bg-opacity-80 ">
                      {result ? result : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
