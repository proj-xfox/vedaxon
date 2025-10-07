import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaNetworkWired, FaCloud, FaBrain } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-5xl mb-4 text-yellow-500" />,
    title: "Web Development",
    description:
      "High-performance, responsive websites with cutting-edge technologies like React, Vite, and Tailwind.",
  },
  {
    icon: <FaMobileAlt className="text-5xl mb-4 text-yellow-500" />,
    title: "Mobile App Development",
    description:
      "Cross-platform apps using React Native, Flutter, Swift/Kotlin — fast, modern, and built for growth.",
  },
  {
    icon: <FaNetworkWired className="text-5xl mb-4 text-yellow-500" />,
    title: "Backend / APIs",
    description: "Node.js, Express, NestJS, Firebase",
  },
  {
    icon: <FaCloud className="text-5xl mb-4 text-yellow-500" />,
    title: "Cloud & DevOps",
    description:
      "Secure, scalable cloud infrastructure — AWS, Vercel, Firebase, and CI/CD automation.",
  },
  {
    icon: <FaBrain className="text-5xl mb-4 text-yellow-500" />,
    title: "AI & Automation",
    description:
      "Integrating AI tools, chatbots, and business automation with OpenAI, LangChain, and custom ML models.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 text-center relative">
      <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Services</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative group"
            whileHover={{ scale: 1.07, y: -6, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 500, damping: 25, mass: 0.7 }}
          >
            {/* Glow Background */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ zIndex: -1 }}
            />

            {/* Card */}
            <motion.div
              className="relative p-8 bg-white rounded-2xl shadow-md border border-transparent hover:border-yellow-400 transition-all duration-150 cursor-pointer flex flex-col items-center"
              whileHover={{ rotate: 6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              {/* Icon centered */}
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 text-center">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">{service.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
