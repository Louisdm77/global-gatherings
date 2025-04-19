import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-4xl mx-auto py-16 px-4">
        <Link
          to="/"
          className="text-indigo-800 hover:text-purple-600 mb-6 inline-block"
        >
          ← Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
          About Global Gatherings
        </h1>
        <div className="prose prose-lg text-gray-700 leading-relaxed">
          <p>
            Global Gatherings was founded with a mission to connect people with
            the world through transformative travel experiences. We believe that
            travel is more than just visiting a place—it’s about immersing
            yourself in new cultures, creating lasting memories, and forging
            connections that last a lifetime.
          </p>
          <p>
            Our team of travel experts designs curated tours to destinations
            like Santorini, the Amazon Rainforest, and Kyoto, ensuring every
            journey is seamless and unforgettable. Whether you’re seeking
            adventure, relaxation, or cultural immersion, we’re here to make
            your dream trip a reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
