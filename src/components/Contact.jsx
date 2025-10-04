export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
      <form action="mailto:someone@example.com" method="post" encType="text/plain" className="max-w-lg mx-auto space-y-4">
        <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded"/>
        <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded"/>
        <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded h-32"/>
        <button type="submit" className="px-6 py-3 bg-gray-900 text-white rounded hover:bg-yellow-500">Send</button>
      </form>
    </section>
  );
}