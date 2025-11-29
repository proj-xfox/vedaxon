import { motion } from "framer-motion";
import {
  Code2, Smartphone, Layers, Rocket, Server, ShieldCheck
} from "lucide-react";

export default function WhatWeDo() {
  const services = [
    {
      title: "Custom Web Applications",
      desc: "High-performance web apps built for speed, usability, and long-term scalability.",
      icon: <Code2 size={32} />,
    },
    {
      title: "Mobile App Development",
      desc: "Beautiful, fast, cross-platform mobile apps for Android & iOS using modern frameworks.",
      icon: <Smartphone size={32} />,
    },
    {
      title: "SaaS Product Development",
      desc: "End-to-end SaaS development—from MVP to full-scale product with multi-tenant architecture.",
      icon: <Layers size={32} />,
    },
    {
      title: "Rapid MVP Launch",
      desc: "Validate your idea quickly with a production-ready MVP in weeks, not months.",
      icon: <Rocket size={32} />,
    },
    {
      title: "API Development & Integrations",
      desc: "Secure, robust REST APIs and integrations for payments, WhatsApp, authentication & more.",
      icon: <Server size={32} />,
    },
    {
      title: "Secure, Scalable Cloud Deployment",
      desc: "Optimized deployments using Docker, Render, Vercel, and cloud-native best practices.",
      icon: <ShieldCheck size={32} />,
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gray-950 text-white px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          What We Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          We build fast, reliable, scalable products using modern engineering.
          From idea to deployment — we handle everything end-to-end.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-gray-900/50 backdrop-blur-lg rounded-2xl border border-gray-800 hover:border-yellow-400 transition cursor-default"
          >
            <div className="text-yellow-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
