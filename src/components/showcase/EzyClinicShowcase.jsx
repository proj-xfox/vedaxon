import { Stethoscope, CheckCircle } from "lucide-react";
import Reveal from "../Reveal";
import RevealLeft from "../RevealLeft";
import RevealRight from "../RevealRight";
import { motion } from "framer-motion";

export default function EzyClinicShowcase() {
    const features = [
        "Appointment dashboard",
        "Visit & follow-up flows",
        "Reports & exports",
        "Reception & patient check-in",
        "Role-based access",
        "White-label branding available"
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <Reveal>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
                        EzyClinic Modules — Healthcare Accelerators
                    </h1>
                </Reveal>

                {/* Description */}
                <Reveal delay={0.15}>
                    <p className="text-lg text-gray-600 max-w-3xl">
                        Ready-to-brand modules for clinics looking for digital reception,
                        appointment flows, and patient follow-up systems.
                    </p>
                </Reveal>

                {/* Grid */}
                <div className="mt-12 grid md:grid-cols-2 gap-10">

                    {/* Features (Left) */}
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

                    {/* Icon + Perfect For (Right) */}
                    <RevealRight delay={0.25}>
                        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-200">

                            {/* Subtle bounce animation */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <Stethoscope className="w-12 h-12 text-blue-600 mb-3" />
                            </motion.div>

                            <h3 className="text-xl font-bold">Perfect For</h3>
                            <p className="text-gray-600 mt-3">
                                Clinics, individual practitioners, diagnostic centres & reception desks.
                            </p>
                        </div>
                    </RevealRight>

                </div>

                {/* CTA Buttons */}
                <Reveal delay={0.35}>
                    <div className="mt-12 flex gap-4">
                        <a
                            href="?type=demo&product=ezyclinic#contact"
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                        >
                            Request Demo
                        </a>
                        <a
                            href="?type=white-label&product=ezyclinic#contact"
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
