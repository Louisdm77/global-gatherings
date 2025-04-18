import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import PostPage from "./pages/PostPage";
import AboutPage from "./pages/AboutPage";


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:slug" element={<PostPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
