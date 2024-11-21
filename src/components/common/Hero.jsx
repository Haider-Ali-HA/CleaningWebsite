import React from "react";


const Hero = ({title,description,Image}) => {
  return (
    <div className="h-screen   w-full relative   text-white"> {/* Changed h-full to h-screen */}
      <img
        src={Image}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative px-5 text-center z-10 flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
         {title}
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-base text-center leading-relaxed text-gray-200">
    {description}
        </p>
      </div>
    </div>
  );
};

export default Hero;
