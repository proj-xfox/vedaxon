import emailjs from "@emailjs/nodejs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  try {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { name, email, message },
      { privateKey: process.env.EMAILJS_PRIVATE_KEY } // server-side only
    );

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("EmailJS error:", err);
    return res.status(500).json({ success: false, message: err.message });
  }
}
