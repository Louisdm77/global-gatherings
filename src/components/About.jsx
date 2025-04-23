import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="py-16 px-4  bg-white relative">
      <div className="max-w-5xl mx-4 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="w-full h-80 md:h-full lg:h-120">
          <img
            src="https://websitedemos.net/galatic-02/wp-content/uploads/sites/1455/2024/03/about-us.jpg"
            alt="Global Gatherings Team"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-indigo-900 mb-4">
            Crafting Unforgettable Journeys with Global Gatherings
          </h3>
          <p className="text-gray-600 mb-4">
            At Global Gatherings, we’re passionate about connecting travelers
            with the world’s most incredible destinations. Our curated tours
            immerse you in local cultures, breathtaking landscapes, and unique
            experiences, ensuring every trip is a story worth telling.
          </p>
          <p className="text-gray-600 mb-6">
            Since our founding, we’ve helped thousands of adventurers explore
            hidden gems, from the calderas of Santorini to the jungles of the
            Amazon. Our expert guides and personalized itineraries make every
            journey seamless and unforgettable.
          </p>
          <Link to="/aboutus">
            <button className="text-indigo-800 font-bold hover:text-purple-600 transition">
              Discover Our Story →
            </button>
          </Link>
        </div>
      </div>

      {/* 3-Column Grid for Benefits */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center relative">
          <div className="text-4xl font-bold text-indigo-900 mb-4">01</div>

          <p className="text-gray-600">
            Expertly curated travel itineraries that immerse you in local
            cultures and traditions.
          </p>

          <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
        </div>

        <div className="text-center relative">
          <div className="text-4xl font-bold text-indigo-900 mb-4">02</div>

          <p className="text-gray-600">
            Access to hidden gems and off-the-beaten-path destinations for a
            unique experience.
          </p>
          {/* Vertical Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
        </div>

        <div className="text-center">
          <div className="text-4xl font-bold text-indigo-900 mb-4">03</div>

          <p className="text-gray-600">
            Personalized support from our travel experts to ensure a seamless
            journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
