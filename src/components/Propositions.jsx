import React from "react";

const Propositions = () => {
  return (
    <div className="py-16 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-indigo-900 mb-6">
            Why Travel with Global Gatherings?
          </h3>

          {/* UVP 1 */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-indigo-900">
              Curated Cultural Immersion
            </h4>
            <p className="text-gray-600 text-lg mt-2">
              Our expertly designed tours go beyond sightseeing, connecting you
              with local traditions, cuisines, and communities for a truly
              authentic experience.
            </p>
          </div>

          
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-indigo-900">
              Hidden Gems & Unique Destinations
            </h4>
            <p className="text-gray-600 text-lg mt-2">
              Discover off-the-beaten-path locations like Santorini’s secret
              beaches or Kyoto’s hidden temples, ensuring your journey is one of
              a kind.
            </p>
          </div>

         
          <div>
            <h4 className="text-xl font-semibold text-indigo-900">
              Seamless & Personalized Adventures
            </h4>
            <p className="text-gray-600 text-lg mt-2">
              From planning to execution, our travel experts provide
              personalized support, ensuring every detail of your trip is
              flawless and tailored to your preferences.
            </p>
          </div>
        </div>
        <div className="w-full h-80 md:h-full lg:h-screen">
          <img
            src="https://websitedemos.net/galatic-02/wp-content/uploads/sites/1455/2024/03/why-choose-us.jpg"
            alt="Global Gatherings Experience"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Propositions;
