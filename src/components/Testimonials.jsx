const testimonials = [
  { name: "Client A", feedback: "Great service, delivered on time!", avatar: "/client1.png" },
  { name: "Client B", feedback: "Professional team, highly recommend!", avatar: "/client2.png" },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4"/>
            <p className="text-gray-700 italic mb-2">"{t.feedback}"</p>
            <h4 className="font-bold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
