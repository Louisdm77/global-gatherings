import React from "react";

const VisionMission = () => {
  return (
    <div className="py-20 px-4 bg-blue-100">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mb-12 relative">
        Our Purpose
        <span className="block w-24 h-1 bg-purple-600 mx-auto mt-3 rounded"></span>
      </h2>

      {/* 2-Column Grid for Vision and Mission */}
      <div className="max-w-5xl mx-auto grid grid-cols-1  gap-8">
        {/* Our Vision */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold">
              V
            </div>
            <h3 className="text-xl font-semibold text-indigo-900">
              Our Vision
            </h3>
          </div>
          <p className="text-gray-700">
            To become the world’s leading travel community, inspiring millions
            to explore diverse cultures and destinations like Santorini, the
            Amazon, and Kyoto, while fostering a deeper understanding of the
            world through meaningful journeys.
          </p>
        </div>

        {/* Our Mission */}
        <div className="text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold">
              M
            </div>
            <h3 className="text-xl font-semibold text-indigo-900">
              Our Mission
            </h3>
          </div>
          <p className="text-gray-700">
            To empower travelers with curated experiences and expert guidance,
            creating unforgettable memories while promoting cultural connection,
            sustainability, and respect for global diversity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
