import { SiReact, SiNodedotjs, SiTailwindcss, SiFlutter, SiFirebase, SiAwsamplify } from "react-icons/si";

const techStack = [SiReact, SiNodedotjs, SiTailwindcss, SiFlutter, SiFirebase, SiAwsamplify];

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-50 text-center" id="tech">
      <h2 className="text-3xl font-bold mb-12">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-8 text-4xl text-gray-700">
        {techStack.map((Icon, i) => (
          <div key={i} className="hover:text-yellow-500 transition">{<Icon />}</div>
        ))}
      </div>
    </section>
  );
}
