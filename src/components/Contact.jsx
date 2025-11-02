import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  // EmailJS submission handler (not currently used)
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    if (form.botcheck.value) {
      setStatus("Spam detected!");
      return;
    }

    try {
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        },
        publicKey
      );

      setStatus("Message sent successfully!");
      form.reset();
      setTimeout(() => setStatus(""), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(err.text || "Failed to send message.");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  // WhatsApp submission handler (currently used)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const text = `Hi Vedaxon 👋%0A
      Name: ${name}%0A
      Email: ${email}%0A
      Message: ${message}`;

    const encodedNumber = "OTE4MDg3NDI5ODY0";

    const decodedNumber = atob(encodedNumber);

    const url = /Android|iPhone|iPad/i.test(navigator.userAgent)
      ? `https://wa.me/${decodedNumber}?text=${text}` // mobile
      : `https://web.whatsapp.com/send?phone=${decodedNumber}&text=${text}`; // desktop

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-yellow-100 via-cyan-200 to-purple-200 bg-[length:200%_200%] animate-gradient-x"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold mb-12 text-center text-gray-900"
      >
        Get in Touch
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto bg-white/95 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-200 space-y-6 relative z-10"
      >
        <input type="text" name="botcheck" style={{ display: "none" }} />

        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            disabled={status === "Sending..."}
            className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
            required
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            disabled={status === "Sending..."}
            className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition"
            required
          />
        </div>

        <div className="relative">
          <FaComment className="absolute left-3 top-3 text-gray-400" />
          <textarea
            name="message"
            placeholder="Your Message"
            disabled={status === "Sending..."}
            className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition h-32 resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "Sending..."}
          className={`w-full py-3 rounded-xl text-white font-semibold transition transform ${status === "Sending..."
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105 hover:from-yellow-600 hover:to-yellow-700"
            }`}
        >
          {status === "Sending..." ? "Sending..." : "Send Message"}
        </button>

        <AnimatePresence>
          {status && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-2 p-3 rounded text-center font-medium ${status.includes("success")
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
                }`}
            >
              {status}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
}
