import React from "react";

const Benefits = () => {
  return (
    <div className="py-20 px-4 bg-gray-100">
      {/* Full-Width Image with Overlay */}
      <div className="w-full h-80 md:h-96 relative">
        <img
          src="https://websitedemos.net/galatic-02/wp-content/uploads/sites/1455/2024/03/about-us.jpg"
          alt="Global Gatherings Experience"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
        <div className="absolute inset-0 bg-indigo-900 opacity-10 rounded-xl"></div>
      </div>

      {/* Heading with Underline */}
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 text-center mt-12 mb-10 relative">
        Why Choose Global Gatherings?
        <span className="block w-24 h-1 bg-purple-600 mx-auto mt-3 rounded"></span>
      </h2>

      {/* Benefits List with Icons */}
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Benefit 1 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold">
            1
          </div>
          <div>
            <p className="text-gray-700 font-semibold">
              Expertly curated itineraries that immerse you in local cultures,
              from Kyoto’s traditions to the Amazon’s indigenous communities.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold">
            2
          </div>
          <div>
            <p className="text-gray-700 font-semibold">
              Access to hidden gems, like Santorini’s secret beaches, for a
              truly unique travel experience.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold">
            3
          </div>
          <div>
            <p className="text-gray-700 font-semibold">
              Personalized support from our travel experts to ensure a seamless
              journey, every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;