// src/pages/ComingSoon.jsx
import React, { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send email to your backend or email service
    alert(`Thanks for subscribing: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <h1 className="text-5xl font-bold mb-4">ClinicxEase</h1>
      <p className="text-xl mb-6 text-center max-w-lg">
        Our in-house SAAS for clinics is launching soon! Stay tuned for updates.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 p-3 rounded-lg text-gray-900"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
        >
          Notify Me
        </button>
      </form>

      <p className="mt-6 text-gray-400 text-sm text-center">
        You will be notified as soon as ClinicxEase goes live!
      </p>
    </div>
  );
}
