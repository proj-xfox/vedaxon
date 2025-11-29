import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function ProductShowcase() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing: ${email}`);
    setEmail("");
  };

  const uspList = [
    "Built for Indian clinics & OPD workflows",
    "Fast, simple UI — zero learning curve",
    "Role-based access: Doctor, Staff, Reception",
    "Patient history, visits, payments & follow-ups",
    "Doctor dashboard with analytics",
  ];

  return (
    <section className="py-24 bg-gray-950 text-white px-6 md:px-16" id="products">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <span className="text-xs bg-green-500 text-black px-3 py-1 rounded-full font-semibold">
          LIVE NOW 🚀
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">EzyClinic</h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          A modern, fast, easy-to-use Clinic Management Software designed for
          India. From OPD workflows to patient follow-ups — everything in one place.
        </p>
      </div>

      {/* USP Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        {uspList.map((usp, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-300">
            <CheckCircle className="text-yellow-400" size={20} />
            <span>{usp}</span>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mb-10">
        <a
          href="https://www.ezyclinic.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-500 transition shadow-lg"
        >
          Visit EzyClinic →
        </a>

        <p className="mt-3 text-yellow-300 text-sm">
          www.ezyclinic.com
        </p>
      </div>


    </section>
  );
}
