import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaBrain,FaServer } from "react-icons/fa";

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
    icon: <FaServer className="text-5xl mb-4 text-yellow-500" />,
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
    <section id="services" className="py-20 bg-gray-50 text-center relative overflow-hidden">
      <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Services</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.07,
              y: -6,
              boxShadow: "0px 8px 25px rgba(0,0,0,0.12)",
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 25,
              mass: 0.7,
              duration: 0.15,
            }}
            className="relative group"
          >
            {/* Background glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 blur-2xl"></div>

            {/* Actual card */}
            <div className="relative p-8 bg-white rounded-2xl shadow-md hover:shadow-xl border border-transparent hover:border-yellow-400 transition-all duration-150 cursor-pointer">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                  duration: 0.1,
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
