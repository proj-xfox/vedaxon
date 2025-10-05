import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded" required/>
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded" required/>
        <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded h-32" required/>
        <button type="submit" className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-yellow-500">Send</button>
        {status && <p className="mt-2 text-gray-700">{status}</p>}
      </form>
    </section>
  );
}


/* emailjs.send("service_prsg8ry","template_34obix9",{
title: "Test enquiry",
name: "Suraj Test name",
message: "Test Message",
email: "sthawari@yhoo.com",
}); */