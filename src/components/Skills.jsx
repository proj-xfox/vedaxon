export default function Skills() {
  const skills = ["React", "Node.js", "Tailwind CSS", "JavaScript", "PostgreSQL", "UI/UX"];
  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-gray-200 rounded-full text-gray-800 font-medium shadow">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}