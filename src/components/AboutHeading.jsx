import React from "react";

const AboutHeading = () => {
  return (
    <div className="py-16 px-4 md:px-8 bg-white">
      {/* Heading and Subheading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          About Global Gatherings
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Inspiring wanderlust and guiding travelers to explore the world’s
          cultures, one unforgettable journey at a time.
        </p>
      </div>

      {/* 3-Step Process */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Step 1 */}
        <div className="text-center relative">
          <div className="text-4xl font-bold text-indigo-900 mb-4">01</div>
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">
            Inspire Wanderlust
          </h3>
          <p className="text-gray-600">
            We ignite your travel passion with stories and insights from
            destinations like Santorini, the Amazon, and Kyoto.
          </p>
          {/* Vertical Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
        </div>

        {/* Step 2 */}
        <div className="text-center relative">
          <div className="text-4xl font-bold text-indigo-900 mb-4">02</div>
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">
            Empower Exploration
          </h3>
          <p className="text-gray-600">
            We equip you with resources to discover hidden gems and popular
            spots, no matter the season.
          </p>
          {/* Vertical Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gray-300"></div>
        </div>

        {/* Step 3 */}
        <div className="text-center">
          <div className="text-4xl font-bold text-indigo-900 mb-4">03</div>
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">
            Guide Your Journey
          </h3>
          <p className="text-gray-600">
            We help you plan seamless trips with curated tours and expert tips
            for lasting memories.
          </p>
        </div>
      </div>

      {/* 2-Column Paragraphs */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
        <div>
          <p>
            Global Gatherings was founded with a love for travel and cultural
            discovery. What started as a small blog has grown into a thriving
            community of adventurers. We’ve inspired countless travelers to
            explore destinations like the Amazon’s jungles, Santorini’s calderas,
            and Kyoto’s temples, helping them create stories worth sharing.
          </p>
        </div>
        <div>
          <p>
            Through detailed guides, curated itineraries, and insider tips, we
            empower you to travel with confidence. Join Global Gatherings and
            let’s explore the world’s diversity together, one journey at a time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeading;