import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const articles = [
    {
      id: 1,
      title: "Discover the Wonders of Santorini",
      excerpt:
        "Experience the breathtaking views of Santorini with its white-washed buildings and stunning sunsets. Join our guided tours to explore hidden gems and indulge in local cuisine.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvtoYb34_H0l6Przl77okeMouM-5l2s9ssyw&s",
      link: "/post/santorini",
    },
    {
      id: 2,
      title: "Adventure in the Amazon Rainforest",
      excerpt:
        "Embark on an unforgettable journey through the Amazon Rainforest. Encounter exotic wildlife, navigate winding rivers, and immerse yourself in the heart of nature.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5TJ8cHEic7nblLDNHKVPYs_W5Bs1mvKmIw&s",
      link: "/post/amazon",
    },
    {
      id: 3,
      title: "Cultural Immersion in Kyoto",
      excerpt:
        "Dive into the rich culture of Kyoto with our curated experiences. Visit ancient temples, participate in tea ceremonies, and stroll through serene bamboo forests.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNMjaDeCnmjv7aoCiFrfU6LSleXFR9UdUPw&s",
      link: "/post/kyoto",
    },
  ];

  return (
    <div className="relative z-20 bg-white py-8 px-4">
      <div className="text-start mb-8">
        <h3 className="text-xl font-bold text-indigo-900">
          Explore Our Diverse Travel Offerings and Create Unforgettable Memories
        </h3>
        <button className="mt-4 text-indigo-800 border border-purple-500 border-2 font-bold px-4 py-2 rounded hover:text-white hover:bg-purple-600 transition">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="flex flex-col">
            <div className="w-full h-64">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold text-indigo-900">
                {article.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm">{article.excerpt}</p>
              {/* <Link to={article.link}> */}
              <button className="mt-4 text-indigo-800 font-bold hover:text-purple-600 transition">
                Learn More
              </button>
              {/* </Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
