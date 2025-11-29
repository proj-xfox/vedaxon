import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center px-6">

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        We Build Products That Ship Fast and Scale Hard.
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        We design, develop & deploy fast, reliable, scalable apps — with a
        product mindset, not just code.
      </motion.p>

      <motion.a
        href="#contact"
        className="px-8 py-4 bg-yellow-500 rounded-lg font-semibold hover:bg-yellow-400 transition"
        whileHover={{ scale: 1.05 }}
      >
        Start Your Project
      </motion.a>
    </section>
  );
}
