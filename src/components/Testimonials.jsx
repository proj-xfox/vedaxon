import { useEffect, useRef } from "react";

const testimonials = [
  { name: "Client A", feedback: "Great service, delivered on time!", avatar: "/client1.png" },
  { name: "Client B", feedback: "Professional team, highly recommend!", avatar: "/client2.png" },
  { name: "Client C", feedback: "Amazing experience from start to finish!", avatar: "/client3.png" },
  { name: "Client D", feedback: "High-quality work and great communication.", avatar: "/client4.png" },
  { name: "Client E", feedback: "Exceeded our expectations in every way.", avatar: "/client5.png" },
  { name: "Client F", feedback: "Friendly team and excellent support.", avatar: "/client6.png" },
  { name: "Client G", feedback: "Reliable and fast delivery!", avatar: "/client7.png" },
  { name: "Client H", feedback: "Very professional and detail-oriented.", avatar: "/client8.png" },
  { name: "Client I", feedback: "Creative solutions that really helped our business.", avatar: "/client9.png" },
  { name: "Client J", feedback: "Would definitely work with them again!", avatar: "/client10.png" },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  // Smooth automatic scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    const speed = 0.8; // smooth
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const scroll = () => {
      scrollAmount += speed;
      if (scrollAmount > maxScroll) scrollAmount = 0;
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };
    scroll();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 text-center relative overflow-hidden">
      {/* Floating background dots */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-3 h-3 bg-blue-300 rounded-full opacity-30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 relative z-10">
        What Clients Say
      </h2>

      <div ref={scrollRef} className="flex gap-8 overflow-x-auto no-scrollbar px-4 md:px-8 relative z-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="relative min-w-[280px] flex-shrink-0 p-6 rounded-2xl transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-card"
          >
            {/* Gradient glow behind card */}
            <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40 bg-gradient-to-r from-blue-300 to-blue-500 -z-10"></div>

            <div className="bg-white bg-opacity-90 backdrop-blur-md p-6 rounded-2xl shadow-2xl flex flex-col items-center">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full mb-4 border-2 border-blue-400"
              />
              <p className="text-gray-700 italic mb-3">"{t.feedback}"</p>
              <h4 className="font-bold text-gray-900">{t.name}</h4>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 0.6; }
          100% { transform: translateY(0px); opacity: 0.3; }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes card-bounce {
          0% { transform: translateY(0px) scale(0.95); }
          50% { transform: translateY(-10px) scale(1); }
          100% { transform: translateY(0px) scale(0.95); }
        }
        .animate-card {
          animation: card-bounce 3s ease-in-out infinite;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
