import { FaGithub, FaLinkedin, FaEnvelope, FaMapPin } from "react-icons/fa"; // Added more icons for context

export default function Footer() {
  // Define the key navigation links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  // Define the social links
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/proj-xfox", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/vedaxon-com/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* --------------------------------- */}
        {/* MAIN FOOTER GRID (3 COLUMNS) */}
        {/* --------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">

          {/* Column 1: Branding & Mission */}
          <div>
            <h3 className="text-3xl font-extrabold text-yellow-400 mb-4 tracking-tight">
              VedaXon
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              We build **fast, modern, and scalable** SaaS products and custom dashboards for ambitious founders and teams.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Get in Touch</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400" />
                <a
                  href="mailto:info@vedaxon.com"
                  className="hover:text-yellow-400 transition-colors text-base"
                >
                  info@vedaxon.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapPin className="text-yellow-400" />
                <span className="text-base">Nagpur, India (Remote-first)</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-6 text-2xl">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --------------------------------- */}
        {/* BOTTOM BAR (Copyright & Credit) */}
        {/* --------------------------------- */}
        <div className="pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} VedaXon. All rights reserved. |
            Designed & Built with ❤️ using React & Tailwind.
          </p>
        </div>

      </div>
    </footer>
  );
}