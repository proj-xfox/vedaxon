import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ UNIVERSAL SCROLL HANDLER
  const goToSection = (id) => {
    setIsOpen(false);
    setResourcesOpen(false);

    // IF NOT ON HOMEPAGE → NAVIGATE HOME FIRST
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    // IF ALREADY ON HOMEPAGE → SCROLL
    const el = document.getElementById(id);
    if (el) {
      const offset = el.offsetTop - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".resources-dropdown")) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const links = [
    { name: "Our SaaS", id: "coming-soon" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Pricing", id: "pricing" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-lg ${scrolled ? "bg-gray-900/90 shadow-lg" : "bg-gray-900/50"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div
          className="text-2xl font-extrabold text-yellow-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          VedaXon
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8 items-center">

          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className="text-white hover:text-yellow-400 font-medium"
            >
              {link.name}
            </button>
          ))}

          {/* RESOURCES DROPDOWN */}
          <div className="relative resources-dropdown">
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className="text-white hover:text-yellow-400 font-medium flex items-center"
            >
              Resources ▾
            </button>

            {resourcesOpen && (
              <div
                className="
                  absolute left-0 mt-2 
                  bg-gray-900/95 text-white 
                  rounded-lg shadow-xl 
                  py-3 w-48 border border-gray-700 z-50
                "
              >
                <button
                  onClick={() => goToSection("about")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800"
                >
                  About Us
                </button>

                <button
                  onClick={() => goToSection("tech")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800"
                >
                  Tech Stack
                </button>

                <a
                  href="/blog"
                  onClick={() => setResourcesOpen(false)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800"
                >
                  Blog
                </a>

                <button
                  onClick={() => goToSection("leadbuzz-case-study")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-800"
                >
                  Case Studies
                </button>
              </div>
            )}
          </div>

          {/* CONTACT */}
          <button
            onClick={() => goToSection("contact")}
            className="text-white hover:text-yellow-400 font-medium"
          >
            Contact
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4">

            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => goToSection(link.id)}
                  className="text-white hover:text-yellow-400 text-lg"
                >
                  {link.name}
                </button>
              </li>
            ))}

            {/* Mobile Resources */}
            <li className="text-center mt-2">
              <p className="text-white font-semibold text-lg mb-1">Resources</p>

              <div className="space-y-2">
                <button
                  onClick={() => goToSection("about")}
                  className="text-white/80 hover:text-yellow-400 text-sm"
                >
                  About Us
                </button>

                <button
                  onClick={() => goToSection("tech")}
                  className="text-white/80 hover:text-yellow-400 text-sm"
                >
                  Tech Stack
                </button>

                <a
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-yellow-400 text-sm"
                >
                  Blog
                </a>

                <button
                  onClick={() => goToSection("leadbuzz-case-study")}
                  className="text-white/80 hover:text-yellow-400 text-sm"
                >
                  Case Studies
                </button>
              </div>
            </li>

            <li>
              <button
                onClick={() => goToSection("contact")}
                className="text-white hover:text-yellow-400 text-lg"
              >
                Contact
              </button>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}
