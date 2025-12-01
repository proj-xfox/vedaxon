import { useEffect, useState } from "react";
import fm from "front-matter";

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Vite 5 safe raw import
    const files = import.meta.glob("../blogPosts/*.md", {
      eager: true,
      as: "raw"
    });

    console.log("Loaded markdown files:", files);

    const loadedPosts = Object.keys(files).map((path) => {
      const raw = files[path]; // always a string
      const parsed = fm(raw);  // browser-safe parser

      return {
        slug: path.split("/").pop().replace(".md", ""),
        title: parsed.attributes.title,
        date: parsed.attributes.date,
        description: parsed.attributes.description,
      };
    });

    setPosts(loadedPosts);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-extrabold mb-6">Blog & Insights</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 border rounded-xl hover:bg-gray-50 transition shadow-sm"
          >
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.description}</p>
            <span className="text-sm text-gray-500">{post.date}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
