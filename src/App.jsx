import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<PostPage />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/offerings" element={<Offerings />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
