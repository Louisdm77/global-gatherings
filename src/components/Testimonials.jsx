import React from "react";

const Testimonials = () => {
  return (
    <div className="py-16 px-4 bg-blue-50 relative">
      <h3 className="text-4xl text-center font-bold text-indigo-900 mb-7">
        Clients Testimonials
      </h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <p className="text-gray-600 mb-4 italic">
            "Our trip to Santorini with Global Gatherings was nothing short of
            magical. The curated tour through Oia’s cobblestone streets and the
            sunset cruise were highlights we’ll never forget. Their attention to
            detail made every moment special!"
          </p>
          <p className="text-indigo-900 font-semibold">Emily & Mark Thompson</p>
        </div>

        <div className="flex flex-col">
          <p className="text-gray-600 mb-4 italic">
            "Global Gatherings took us deep into the Amazon Rainforest, where we
            connected with indigenous communities and spotted incredible
            wildlife. Their expert guides made the experience both educational
            and thrilling. I can’t wait to book my next trip!"
          </p>
          <p className="text-indigo-900 font-semibold">Sarah Rodriguez</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
