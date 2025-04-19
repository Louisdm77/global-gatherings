import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/736x/05/26/1a/05261a833e4ec1dfeff56914fd7f4188.jpg")`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
      className="py-16 px-4  text-center relative"
    >
      <div className="max-w-3xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Explore the World with Global Gatherings?
        </h2>
        {/* Sub-headline */}
        <p className="text-white max-w-md mx-auto mb-8">
          Join our curated tours and turn your travel dreams into reality with
          unforgettable experiences in destinations like Santorini, the Amazon,
          and Kyoto.
        </p>
        {/* CTA Button */}
        <Link to="/book">
          <button className="bg-indigo-800 text-white font-bold px-6 py-3 rounded hover:bg-purple-600 transition">
            Book Your Adventure Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
