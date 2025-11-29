import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPostgresql,
  SiVercel,
  SiRender,
  SiJavascript
} from "react-icons/si";

// ⭐ Curated, Premium, Founder-Led Stack
const techStackData = [
  { name: "React.js", icon: SiReact, color: "text-blue-500" },
  { name: "Node.js / Express", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
  { name: "RESTful APIs", icon: SiJavascript, color: "text-yellow-500" },
  { name: "Cloud Deployment (Vercel)", icon: SiVercel, color: "text-black" },
  { name: "Cloud Deployment (Render)", icon: SiRender, color: "text-indigo-600" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 12,
    },
  },
};

export default function TechStack() {
  return (
    <section className="py-24 bg-white text-gray-800" id="tech">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 tracking-tight"
        >
          Our Core <span className="text-blue-600">Tech Stack</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16"
        >
          A curated, modern engineering stack used to craft fast, scalable, and reliable digital products.
        </motion.p>

        {/* Tech Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {techStackData.map((tech, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-xl shadow-md 
                         hover:shadow-xl hover:scale-[1.03] transition-all duration-300 
                         text-center group"
            >
              <div className="flex justify-center items-center w-full mb-4">
                <tech.icon className={`text-5xl ${tech.color} group-hover:scale-110 transition`} />
              </div>
              <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
