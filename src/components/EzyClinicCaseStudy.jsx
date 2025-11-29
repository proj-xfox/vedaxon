import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EzyClinicCaseStudy() {
    const bullets = [
        "Doctors were relying on WhatsApp, paper registers, and memory for follow-ups.",
        "Clinic workflow was slow & messy: no unified patient history or visit tracking.",
        "Staff could not coordinate daily OPD efficiently.",
    ];

    const results = [
        "Daily OPD flow became 30–40% faster",
        "Follow-ups tracked with 100% accuracy",
        "Staff + doctor collaboration improved dramatically",
        "Zero missed patients and crystal-clear history",
    ];

    return (
        <section className="py-24 bg-white text-gray-900 px-6 md:px-16" id="ezyclinic-case-study">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold">EzyClinic Case Study</h2>
                <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
                    How we built a modern clinic management system that transformed daily OPD workflows.
                </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

                {/* Problem Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                    <ul className="space-y-3">
                        {bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-red-500 mt-1" />
                                <span className="text-gray-700">{b}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Solution Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold mb-4">The Outcome</h3>
                    <ul className="space-y-3">
                        {results.map((r, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-green-500 mt-1" />
                                <span className="text-gray-700">{r}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
