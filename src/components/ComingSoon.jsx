// src/pages/ComingSoon.jsx
import React, { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing: ${email}`);
    setEmail("");
  };

  return (
    <>
      {/* Animated background gradient */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-bg {
          background: linear-gradient(135deg, #111827, #1e293b, #111827);
          background-size: 200% 200%;
          animation: gradientShift 10s ease infinite;
        }
      `}</style>

      {/* Typewriter effect CSS */}
      <style>{`
        @keyframes twType { 0%{width:0} 40%{width:100%} 70%{width:100%} 100%{width:0} }
        @keyframes twBlink { from, to { border-color: transparent } 50% { border-color: #facc15 } }
        .tw span {
          border-right: 2px solid #facc15;
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          animation: twType 3.5s steps(40, end) infinite, twBlink .7s step-end infinite;
        }
      `}</style>

      <div className="min-h-screen animated-bg flex flex-col items-center justify-center text-white p-6 text-center">
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight">Vedaxon</h1>
        <div className="text-lg text-gray-300 mb-6 tw">
          <span>Empowering India with simple, powerful SaaS products.</span>
        </div>

        {/* EzyClinic Announcement */}
        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-3xl shadow-xl mb-8">
          <span className="text-xs bg-green-500 text-black px-3 py-1 rounded-full font-semibold">LIVE NOW 🚀</span>
          <h5 className="text-3xl font-bold mt-3 mb-2">EzyClinic</h5>
          <p className="text-gray-300 mb-5">
            Modern clinic software for India. Built for doctors, OPD workflows, and growing practices.
            <br /><br /><br />
            <span className="text-sm text-yellow-400 italic">For the best onboarding experience, please use a laptop/desktop.
              Our mobile app provides a dedicated workflow for mobile users.</span>
          </p>
          <a
            href="https://www.ezyclinic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition w-full sm:w-auto"
          >
            Visit EzyClinic
          </a>
          <p className="mt-2 text-yellow-300 text-sm font-medium">www.ezyclinic.com</p>
        </div>

        {/* Upcoming Products CTA */}
        <p className="text-gray-300 mb-4 max-w-md">
          We just shipped our first SaaS. More powerful tools for Indian businesses coming soon.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            required
            placeholder="Enter your email to join the waitlist"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 p-3 rounded-lg text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
          >
            Notify Me
          </button>
        </form>

        <p className="mt-6 text-gray-400 text-sm">Built in India 🇮🇳 for the world</p>
        <p className="mt-2 text-xs text-gray-600">© {new Date().getFullYear()} Vedaxon Technologies</p>
      </div>
    </>
  );
}
