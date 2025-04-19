import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center  text-center px-4 py-16 bg-white z-1 relative min-h-screen">
      <h3 className="text-2xl font-extrabold uppercase text-indigo-900">
        Find the World with Global Gatherings
      </h3>
      <div className="h-70 md:h-170 w-full  lg:hidden">
        <img className="h-full w-full" src="https://i.pinimg.com/736x/3a/be/f7/3abef7866249ac207c8b9a52346dc7bd.jpg" alt="" />
      </div>
      <h2 className="mt-8 font-bold text-3xl md:text-4xl my-4 lg:w-[50%]">
        Discover the World's Beauty and Create Lifelong Memories <br /> with
        Global Gatherings
      </h2>
      <p className="text-gray-600 max-w-md mt-10">
        At Global Gatherings, we create unique travel experiences that connect
        you with cultures, adventures, and memories. Join us and explore the
        world like never before!
      </p>
      <button className="mt-10 mb-7 bg-indigo-800 text-white font-bold px-6 py-3 rounded hover:bg-purple-600 transition">
        Start Your Adventure
      </button>
    </div>
  );
};

export default Hero;