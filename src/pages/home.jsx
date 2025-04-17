import React from "react";
import NavBar from "../components/NavBar";
import Hero  from "../components/Hero";
import Posts from "../components/Posts";
import FixedImage from "../components/FixedImage";

const Home = () => {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <FixedImage />
      <Posts />
    </div>
  );
};

export default Home;
