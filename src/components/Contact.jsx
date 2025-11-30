import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaSpinner,
  FaTimesCircle,
  FaWhatsapp
} from "react-icons/fa";

const STATUS = {
  IDLE: "IDLE",
  SENDING: "SENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  SPAM: "SPAM",
};

const WA_NUMBER = "918087429864";

export default function Contact() {
  const [status, setStatus] = useState(STATUS.IDLE);

  // NEW: detect demo / WL / product from URL
  const [intent, setIntent] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // 🔥 Auto-detect URL parameters
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type"); // demo | white-label
    const product = params.get("product"); // leadbuzz | broker | ezyclinic

    if (type && product) {
      const prettyProduct =
        product.charAt(0).toUpperCase() + product.slice(1);

      /*  const presetMessage =
         type === "demo"
           ? `I'd like to request a demo for ${prettyProduct}.`
           : `I want to enquire about white-labeling ${prettyProduct}.`;
  */
      let presetMessage = "";

      if (type === "demo") {
        presetMessage = `I'd like to request a demo for ${prettyProduct}.`;
      }
      else if (type === "white-label") {
        presetMessage = `I want to enquire about white-labeling ${prettyProduct}.`;
      }
      else if (type === "consultation") {
        presetMessage = `I'd like to request a free consultation rearding white-labeling.`;
      }
      // Set context for banner
      setIntent({
        type,
        product: prettyProduct
      });

      // Pre-fill message
      setFormData((prev) => ({
        ...prev,
        message: presetMessage
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(STATUS.SENDING);

    const form = e.target;
    if (form.botcheck.value) {
      setStatus(STATUS.SPAM);
      return;
    }

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          intent_type: intent?.type || "general",
          intent_product: intent?.product || "none"
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus(STATUS.SUCCESS);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(STATUS.IDLE), 4500);
    } catch (err) {
      console.error(err);
      setStatus(STATUS.ERROR);
      setTimeout(() => setStatus(STATUS.IDLE), 4500);
    }
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Vedaxon 👋\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  const overlayVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, scale: 0.95 },
  };

  const isDisabled = status === STATUS.SENDING || status === STATUS.SUCCESS;

  return (
    <section id="contact" className="relative py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-center text-gray-900 mb-4"
        >
          Start your project — let’s talk
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-lg text-gray-600 mb-12"
        >
          Share your idea — I’ll get back to you within a few hours.
        </motion.p>

        {/* 🔥 NEW: Dynamic Intent Banner */}
        {intent && (
          <div className="mb-8 bg-blue-50 text-blue-700 p-4 rounded-xl text-center font-semibold border border-blue-200">
            {intent.type === "demo" && (
              <>Demo Request for <span className="font-bold">{intent.product}</span></>
            )}
            {intent.type === "white-label" && (
              <>White-label Enquiry for <span className="font-bold">{intent.product}</span></>
            )}
            {intent.type === "consultation" && (
              <>Enquiry  <span className="font-bold">{intent.product}</span></>
            )}
          </div>
        )}

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white p-8 md:p-12 rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
        >

          <AnimatePresence>
            {status !== STATUS.IDLE && (
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute inset-0 rounded-2xl flex items-center justify-center bg-white/90 backdrop-blur-sm z-20"
              >
                {status === STATUS.SENDING && (
                  <div className="text-center text-blue-600">
                    <FaSpinner className="animate-spin w-10 h-10 mx-auto mb-3" />
                    <p className="text-xl font-semibold">Sending...</p>
                  </div>
                )}

                {status === STATUS.SUCCESS && (
                  <div className="text-center text-green-600">
                    <FaCheckCircle className="w-10 h-10 mx-auto mb-3" />
                    <p className="text-xl font-semibold">Message Sent!</p>
                    <p className="text-gray-600 mt-2">I'll reply shortly.</p>
                  </div>
                )}

                {(status === STATUS.ERROR || status === STATUS.SPAM) && (
                  <div className="text-center text-red-600">
                    <FaTimesCircle className="w-10 h-10 mx-auto mb-3" />
                    <p className="text-xl font-semibold">
                      {status === STATUS.ERROR ? "Something went wrong." : "Spam detected."}
                    </p>
                    <p className="text-gray-600 mt-2">Try WhatsApp instead.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <input type="text" name="botcheck" style={{ display: "none" }} />

            <div>
              <label className="text-gray-700 font-medium text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isDisabled}
                required
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 
                           placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 
                           focus:border-blue-600 transition shadow-sm"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isDisabled}
                required
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 
                           placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 
                           focus:border-blue-600 transition shadow-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium text-sm">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={isDisabled}
                required
                className="mt-2 w-full px-4 py-3 h-32 rounded-xl border border-gray-300 bg-white text-gray-800 
                           placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 
                           focus:border-blue-600 transition shadow-sm resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isDisabled}
              className={`w-full py-3 rounded-xl text-white font-bold text-lg shadow-lg transition 
               ${isDisabled ? "bg-blue-300" :
                  "bg-blue-600 hover:bg-blue-700 hover:shadow-xl active:scale-[0.98]"}`}
            >
              {status === STATUS.SENDING ? (
                <span className="flex justify-center items-center">
                  <FaSpinner className="animate-spin mr-2" /> Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* WhatsApp Contact */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 mb-3">Or reach out instantly:</p>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center px-6 py-3 rounded-full bg-green-500 text-white 
                         font-semibold shadow-lg hover:bg-green-600 hover:shadow-xl transition 
                         active:scale-[0.97]"
            >
              <FaWhatsapp className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
