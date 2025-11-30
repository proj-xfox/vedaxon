import { MessageSquare, CheckCircle } from "lucide-react";
import Reveal from "../Reveal";
import RevealLeft from "../RevealLeft";
import RevealRight from "../RevealRight";
import { motion } from "framer-motion";

export default function LeadBuzzShowcase() {
    const features = [
        "Lead pipeline with statuses",
        "Notes & tags",
        "WhatsApp-friendly workflows",
        "Role-based access",
        "Dashboard + metrics",
        "Fully white-label ready",
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <Reveal>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
                        LeadBuzz — WhatsApp Lead Manager
                    </h1>
                </Reveal>

                {/* Description */}
                <Reveal delay={0.15}>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        A fast, clean and effective lead manager designed for agencies, brokers,
                        and sales teams using WhatsApp as their primary communication channel.
                    </p>
                </Reveal>

                {/* Two-column layout */}
                <div className="mt-12 grid md:grid-cols-2 gap-10">

                    {/* Left Column — Feature List */}
                    <RevealLeft delay={0.2}>
                        <ul className="space-y-4">
                            {features.map((f, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false, amount: 0.4 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="flex items-center gap-3 text-gray-700"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    {f}
                                </motion.li>
                            ))}
                        </ul>
                    </RevealLeft>

                    {/* Right Column — Icon Card */}
                    <RevealRight delay={0.25}>
                        <div className="p-6 rounded-xl bg-white shadow-lg border border-gray-200">

                            {/* Bounce icon animation */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <MessageSquare className="w-12 h-12 text-blue-600 mb-3" />
                            </motion.div>

                            <h3 className="font-bold text-xl">Perfect For</h3>
                            <ul className="mt-3 text-gray-600 space-y-2">
                                <li>• Agencies</li>
                                <li>• Real estate teams</li>
                                <li>• Sales organisations</li>
                                <li>• WhatsApp-first companies</li>
                            </ul>
                        </div>
                    </RevealRight>

                </div>

                {/* CTA Buttons */}
                <Reveal delay={0.35}>
                    <div className="mt-12 flex gap-4">
                        <a
                            href="?type=demo&product=leadbuzz#contact"
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                        >
                            Request Demo
                        </a>
                        <a
                            href="?type=white-label&product=leadbuzz#contact"
                            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100"
                        >
                            White-label Enquiry
                        </a>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}
