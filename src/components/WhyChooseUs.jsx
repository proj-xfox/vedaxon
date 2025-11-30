import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, UserCheck } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: Zap,
            title: "Speed with Precision",
            desc: "Build fast without compromising engineering quality or design clarity.",
        },
        {
            icon: Shield,
            title: "Stable & Secure Systems",
            desc: "Backend architecture that stays reliable under real-world usage.",
        },
        {
            icon: UserCheck,
            title: "Founder-Led Execution",
            desc: "Direct involvement from a single engineer — no layers, no handoffs.",
        },
        {
            icon: CheckCircle,
            title: "End-to-End Delivery",
            desc: "From architecture and UI/UX to backend, deployment, and ongoing support.",
        },
    ];

    const featureVariants = {
        hidden: { opacity: 0, y: 35 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.12,
                duration: 0.5,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section className="py-20 md:py-28 bg-gray-50 text-gray-900 px-6">
            <div className="max-w-6xl mx-auto text-center">

                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    Why Choose <span className="text-blue-600">Vedaxon</span>?
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.55 }}
                >
                    A focused, founder-driven studio blending speed, clarity, and craftsmanship
                    to build products that stand the test of time.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={featureVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.015 }}
                            className="flex items-start gap-5 p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            {/* Clean premium icon bubble */}
                            <div className="flex-shrink-0 p-3 rounded-xl bg-blue-100 text-blue-600">
                                <feature.icon size={26} />
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-1 text-gray-900">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
