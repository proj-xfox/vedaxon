import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;

    // Honeypot check: if hidden field is filled, block submission
    if (form.botcheck.value) {
      setStatus("Spam detected!");
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus(err.text || "Failed to send message.");
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
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 border rounded h-32"
          required
        />
        <button
          type="submit"
          disabled={status === "Sending..."}
          className={`px-6 py-3 rounded text-white ${
            status === "Sending..." ? "bg-gray-400 cursor-not-allowed" : "bg-gray-900 hover:bg-yellow-500"
          }`}
        >
          {status === "Sending..." ? "Sending..." : "Send"}
        </button>
        {status && <p className="mt-2 text-gray-700">{status}</p>}
      </form>
    </section>
  );
}
