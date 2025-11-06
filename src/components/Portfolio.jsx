import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const projects = [

  {
    title: "EzyClinic – Clinic Management SaaS",
    img: "/project1.png", // add a thumbnail in your public folder
    tech: "React, Express, PostgreSQL, Docker",
    link: "#"
  },
  { title: "Project Two", img: "/project2.png", tech: "Flutter, Firebase", link: "#" },
  { title: "Project Three", img: "/project3.png", tech: "Next.js, Tailwind", link: "#" },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-white text-center relative overflow-hidden" id="portfolio">
      <h2 className="text-3xl font-bold mb-12 relative z-10">Our Projects</h2>

      {/* Background floating particles */}
      <BackgroundParticles />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {projects.map((p, i) => (
          <TiltCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

// BackgroundParticles Component
function BackgroundParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const temp = [...Array(30)].map(() => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
    }));
    setParticles(temp);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-yellow-300 rounded-full opacity-40"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: `${p.y}%`,
            left: `${p.x}%`,
          }}
          animate={{ y: [`${p.y}%`, `${p.y - 10}%`, `${p.y}%`] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: p.duration,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// TiltCard Component
function TiltCard({ project, index }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    setTilt({ rotateX: -rotateX, rotateY });
    setCursor({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setCursor({ x: 50, y: 50 });
  };

  const particles = [...Array(7)].map((_, i) => ({
    offsetX: Math.random() * 20 - 10,
    offsetY: Math.random() * 20 - 10,
    size: 2 + Math.random() * 3,
    delay: Math.random() * 2,
  }));

  return (
    <motion.a
      href={project.link}
      className="group relative block rounded-xl overflow-hidden cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 300, damping: 25 }}
      style={{
        perspective: "600px",
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      }}
    >
      {/* Floating shadow */}
      <motion.div
        className="absolute inset-0 rounded-xl shadow-2xl pointer-events-none"
        style={{ zIndex: -2 }}
        animate={{
          x: tilt.rotateY / 2,
          y: tilt.rotateX / 2,
          scale: 1.05,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      />

      {/* Sparkling particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-yellow-400 rounded-full"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              top: `${cursor.y + p.offsetY}%`,
              left: `${cursor.x + p.offsetX}%`,
              opacity: 0.6,
              filter: "blur(1px)",
            }}
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.2, 0.8] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2 + Math.random() * 2,
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Glowing border */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-yellow-400"
        style={{
          background: "linear-gradient(135deg, rgba(255,215,0,0.5), rgba(255,140,0,0.5))",
          filter: "blur(10px)",
          zIndex: -1,
        }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      {/* Glass shine effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: "linear-gradient(120deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)",
          mixBlendMode: "screen",
        }}
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />

      {/* Project Image */}
      <motion.img
        src={project.img}
        alt={project.title}
        className="w-full h-64 object-cover rounded-xl transition-transform"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4 }}
      />

      {/* Overlay info */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 text-center px-4 bg-black bg-opacity-30 rounded-xl"
        initial={{ y: 20 }}
        whileHover={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <h3 className="text-white font-bold text-xl">{project.title}</h3>
        <p className="text-gray-200 mt-2">{project.tech}</p>
      </motion.div>
    </motion.a>
  );
}
