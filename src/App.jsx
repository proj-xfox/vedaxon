import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import LandingPage from "./pages/LandingPage";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const location = useLocation();

  // ⭐ Smooth anchor scroll fix (Router-friendly)
  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;

    document.documentElement.style.scrollBehavior = "auto";

    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });

      setTimeout(() => {
        document.documentElement.style.scrollBehavior = "smooth";
      }, 5);
    });
  }, [location]);

  return (
    <div className="font-sans text-gray-900 scroll-smooth">

      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      <BackToTop />
      <Footer />
    </div>
  );
}

export default AppWrapper;
