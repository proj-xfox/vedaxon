import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Users } from "lucide-react";

export default function WhyChooseUs() {
    const features = [
        {
            icon: <Zap size={34} className="text-yellow-400" />,
            title: "Fast Execution",
            desc: "We ship high-quality products in weeks—not months."
        },
        {
            icon: <Shield size={34} className="text-yellow-400" />,
            title: "Reliable & Secure",
            desc: "We build stable, secure, scalable systems you can trust."
        },
        {
            icon: <Users size={34} className="text-yellow-400" />,
            title: "Client-Centered Approach",
            desc: "We work closely with founders & teams to shape winning products."
        },
        {
            icon: <CheckCircle size={34} className="text-yellow-400" />,
            title: "End-to-End Delivery",
            desc: "From idea → design → development → deployment → support."
        },
    ];

    return (
        <section className="py-20 bg-gray-900 text-white px-6">
            <div className="max-w-5xl mx-auto text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Why Choose Vedaxon?
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    We combine speed, reliability, and deep technical expertise to build
                    software that drives real business results.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="flex items-start gap-4 p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                        >
                            {feature.icon}
                            <div>
                                <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
