import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;

    // Honeypot check for spam
    if (form.botcheck.value) {
      setStatus("Spam detected!");
      return;
    }

    try {
      // Decode public key from Base64
      const publicKey = atob(import.meta.env.VITE_EMAILJS_PUBLIC_KEY_ENCODED);

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

      // Clear status message after 5 seconds
      setTimeout(() => setStatus(""), 5000);

    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(err.text || "Failed to send message.");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        {/* Honeypot hidden field */}
        <input type="text" name="botcheck" style={{ display: "none" }} />

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          disabled={status === "Sending..."}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          disabled={status === "Sending..."}
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          disabled={status === "Sending..."}
          className="w-full p-3 border rounded h-32"
          required
        />
        <button
          type="submit"
          disabled={status === "Sending..."}
          className={`px-6 py-3 rounded text-white ${
            status === "Sending..."
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gray-900 hover:bg-yellow-500"
          }`}
        >
          {status === "Sending..." ? "Sending..." : "Send"}
        </button>

        {/* Toast-style status message */}
        {status && (
          <div
            className={`mt-2 p-2 rounded ${
              status.includes("success") ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
            }`}
          >
            {status}
          </div>
        )}
      </form>
    </section>
  );
}
