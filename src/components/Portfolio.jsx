const projects = [
  { title: "Project One", img: "/project1.png", tech: "React, Node.js", link: "#" },
  { title: "Project Two", img: "/project2.png", tech: "Flutter, Firebase", link: "#" },
  { title: "Project Three", img: "/project3.png", tech: "Next.js, Tailwind", link: "#" },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-white text-center" id="portfolio">
      <h2 className="text-3xl font-bold mb-12">Our Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <a href={p.link} key={i} className="group relative block overflow-hidden rounded-lg shadow-lg">
            <img src={p.img} alt={p.title} className="w-full h-64 object-cover transition-transform group-hover:scale-105"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-white font-bold text-xl">{p.title}</h3>
              <p className="text-gray-200">{p.tech}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
