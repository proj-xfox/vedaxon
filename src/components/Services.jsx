import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaServer, FaCloud } from "react-icons/fa";

const services = [
  { icon: FaLaptopCode, title: "Web Development", desc: "React, Next.js, Tailwind CSS" },
  { icon: FaMobileAlt, title: "Mobile Apps", desc: "React Native, Flutter, Swift/Kotlin" },
  { icon: FaServer, title: "Backend / APIs", desc: "Node.js, Express, NestJS, Firebase" },
  { icon: FaCloud, title: "Cloud & DevOps", desc: "AWS, Docker, Vercel, CI/CD" },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-100 text-center" id="services">
      <h2 className="text-3xl font-bold mb-12">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div key={i}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}>
            <s.icon className="text-4xl mb-4 text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
