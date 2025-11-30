import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ Direct Smooth Scroll (no react-scroll jitters)
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.offsetTop - 80; // adjust for navbar height

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });

    setIsOpen(false); // close mobile menu
  };

  const links = [
    { name: "Our SaaS", id: "coming-soon" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Tech Stack", id: "tech" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-lg ${scrolled
          ? "bg-gray-900/90 shadow-lg"
          : "bg-gradient-to-r from-gray-900/60 via-gray-800/40 to-gray-900/60"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-extrabold text-yellow-400 tracking-wide">
          VedaXon
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map((link, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(link.id)}
              className="cursor-pointer text-white hover:text-yellow-400 transition font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-lg transition-all duration-500">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {links.map((link, i) => (
              <li key={i}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="cursor-pointer text-white hover:text-yellow-400 transition text-lg"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
