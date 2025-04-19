import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import FixedImage from "../components/FixedImage";
import About from "../components/About";
import Propositions from "../components/Propositions";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <FixedImage />
      <Posts />
      <About />
      <Propositions />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
