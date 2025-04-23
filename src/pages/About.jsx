import React from "react";
import AboutHeading from "../components/AboutHeading";
import NavBar from "../components/NavBar";
import Benefits from "../components/Benefits";
import VisionMission from "../components/Mission";
import CallToAction from "../components/CallToAction";

const About = () => {
  return (
    <div>
      <NavBar />
      <AboutHeading />
      <Benefits />
      <VisionMission />
      <CallToAction />
    </div>
  );
};

export default About;
