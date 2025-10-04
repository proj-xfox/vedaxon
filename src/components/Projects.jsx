import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";

export default function Projects() {
  const projects = [
    { id: 1, title: "Project One", image: project1, desc: "A web app built using React and Node.js." },
    { id: 2, title: "Project Two", image: project2, desc: "A responsive design with Tailwind CSS." },
  ];
  return (
    <section id="projects" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
        {projects.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
            <img src={p.image} alt={p.title} className="rounded mb-4"/>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}