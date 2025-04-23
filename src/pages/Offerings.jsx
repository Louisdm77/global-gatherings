import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CallToAction from "../components/CallToAction";

const Offerings = () => {
  return (
    <div>
      <NavBar />
      <div className="py-20 px-4 bg-gray-100">
        {/* Introduction Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4 relative">
            Discover What Global Gatherings Offers
            <span className="block w-24 h-1 bg-purple-600 mx-auto mt-3 rounded"></span>
          </h2>
          <p className="text-gray-700 text-lg">
            From curated travel itineraries to expert guides, we provide
            everything you need to explore the world with confidence and create
            unforgettable memories.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Offering 1: Curated Travel Itineraries */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-3">
              Curated Travel Itineraries
            </h3>
            <p className="text-gray-600 mb-4">
              Explore expertly designed itineraries that immerse you in local
              cultures, from a 7-day Santorini escape to a 10-day Amazon
              adventure. Each plan ensures a seamless and enriching experience.
            </p>
            <Link to="/itineraries">
              <button className="bg-indigo-800 text-white font-bold px-4 py-2 rounded hover:bg-purple-600 transition">
                Explore Itineraries
              </button>
            </Link>
          </div>

          {/* Offering 2: Destination Guides */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-3">
              In-Depth Destination Guides
            </h3>
            <p className="text-gray-600 mb-4">
              Dive into comprehensive guides for destinations like Kyoto’s
              temples or Santorini’s beaches, packed with insider tips, must-see
              spots,cultural insights and a life long memory creator.
            </p>
            <Link to="/guides">
              <button className="bg-indigo-800 text-white font-bold px-4 py-2 rounded hover:bg-purple-600 transition">
                Browse Guides
              </button>
            </Link>
          </div>

          {/* Offering 3: Cultural Immersion Experiences */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-3">
              Cultural Immersion Experiences
            </h3>
            <p className="text-gray-600 mb-4">
              Connect with local communities through unique experiences, like
              cooking classes in Kyoto or storytelling sessions with Amazon
              indigenous groups,all tailored perfectly for you.
            </p>
            <Link to="/experiences">
              <button className="bg-indigo-800 text-white font-bold px-4 py-2 rounded hover:bg-purple-600 transition">
                Discover Experiences
              </button>
            </Link>
          </div>

          {/* Offering 4: Travel Planning Tools */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-3">
              Travel Planning Tools
            </h3>
            <p className="text-gray-600 mb-4">
              Use our tools to plan your perfect trip, including budget
              calculators, packing checklists, and seasonal travel tips for any
              destination.
            </p>
            <Link to="/tools">
              <button className="bg-indigo-800 text-white font-bold px-4 py-2 rounded hover:bg-purple-600 transition">
                Access Tools
              </button>
            </Link>
          </div>

          {/* Offering 5: Community Engagement */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
              5
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-3">
              Join Our Travel Community
            </h3>
            <p className="text-gray-600 mb-4">
              Share your stories, connect with fellow adventurers, and get
              personalized recommendations from our vibrant community of
              travelers.
            </p>
            <Link to="/community">
              <button className="bg-indigo-800 text-white font-bold px-4 py-2 rounded hover:bg-purple-600 transition">
                Join the Community
              </button>
            </Link>
          </div>

          {/* Offering 6: Expert Travel Advice */}
          <div className="bg-white rounded-xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
              6
            </div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-3">
              Expert Travel Advice
            </h3>
            <p className="text-gray-600 mb-4">
              Get personalized advice from our travel experts to ensure your
              journey is seamless, from visa tips to local etiquette in
              destinations like the Amazon.
            </p>
            <Link to="/advice">
              <button className="bg-indigo-800 text-white font-bold px-4 py-2 rounded hover:bg-purple-600 transition">
                Get Advice
              </button>
            </Link>
          </div>
        </div>

        {/* Highlight Section: Curated Itineraries */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          <div className="w-full h-80 relative">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Santorini Itinerary"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-indigo-900 opacity-10 rounded-xl"></div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">
              Our Flagship Offering: Curated Itineraries
            </h3>
            <p className="text-gray-700 mb-6">
              Our curated itineraries are the heart of Global Gatherings.
              Whether you’re dreaming of Santorini’s sunsets, the Amazon’s
              wildlife, or Kyoto’s cherry blossoms, we craft detailed plans that
              blend adventure, culture, and relaxation. Each itinerary includes
              must-see attractions, hidden gems, and local dining
              recommendations, ensuring a trip that’s as seamless as it is
              unforgettable.
            </p>
            <Link to="/itineraries">
              <button className="bg-indigo-800 text-white font-bold px-6 py-3 rounded hover:bg-purple-600 transition">
                Start Exploring Now
              </button>
            </Link>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Let Global Gatherings guide you to your next adventure with our
            comprehensive travel offerings.
          </p>
          <Link to="/book">
            <button className="bg-indigo-800 text-white font-bold px-6 py-3 rounded hover:bg-purple-600 transition">
              Plan Your Trip Today
            </button>
          </Link>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default Offerings;
