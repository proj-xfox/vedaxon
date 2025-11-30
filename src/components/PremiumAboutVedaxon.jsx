import { motion } from "framer-motion";
import { CheckCircle, Code, Zap, Shield, Repeat, Clock } from "lucide-react";

const services = [
    { icon: Code, title: "Full-Stack Engineering", desc: "React, Node.js, PostgreSQL, Tailwind, REST APIs.", color: "text-blue-600" },
    { icon: Zap, title: "Scalable Architecture", desc: "Secure backend systems built for real-world load.", color: "text-green-600" },
    { icon: Shield, title: "Reliable Infrastructure", desc: "Cloud-native deployments with solid performance.", color: "text-red-600" },
    { icon: Repeat, title: "UI/UX Craft", desc: "Modern, clean, frictionless interfaces.", color: "text-purple-600" },
    { icon: Clock, title: "SaaS-Ready Systems", desc: "Subscriptions, RBAC, automation, multi-tenant setups.", color: "text-orange-600" },
    { icon: CheckCircle, title: "Founder-Level Ownership", desc: "Every detail built end-to-end by one engineer.", color: "text-indigo-600" },
];

const stagger = {
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

export default function AboutVedaxon() {
    return (
        <section id="about" className="py-24 md:py-32 bg-gray-50 text-gray-900">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-extrabold text-center mb-8 tracking-tight"
                >
                    About <span className="text-blue-600">Vedaxon</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="text-center text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed"
                >
                    A founder-led studio building fast, scalable, beautifully-crafted software with clarity and deep ownership.
                </motion.p>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Founder Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100 space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 border-b pb-4">
                            The Founder’s Perspective
                        </h3>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            I’m <span className="font-extrabold text-blue-600">Sachin Thawari</span>, founder & principal engineer at Vedaxon.
                            I believe great products come from{" "}
                            <span className="font-semibold">clarity, craftsmanship, and deep ownership</span> —
                            not from bulky teams or scattered communication.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            I design and build everything myself —
                            <span className="font-semibold"> architecture → logic → UI/UX → backend → deployment</span>.
                            This keeps the product coherent, fast, and intentional.
                        </p>

                        <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50/40 rounded-lg shadow-sm">
                            <p className="italic text-lg md:text-xl text-blue-900 font-medium leading-relaxed">
                                “I build products the way founders build companies — with speed, care, and complete ownership.”
                            </p>
                            <footer className="text-sm text-blue-700 mt-3">— Sachin Thawari</footer>
                        </blockquote>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            Vedaxon works with limited clients to ensure deeper involvement and long-lasting quality.
                        </p>
                    </motion.div>

                    {/* How Vedaxon Works */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="lg:col-span-1 bg-blue-50 border border-blue-100 shadow-md rounded-2xl p-8 md:p-10 space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-blue-900">
                            How Vedaxon Works
                        </h3>

                        <p className="text-blue-800 text-lg leading-relaxed font-medium">
                            A boutique, founder-driven studio focused on clarity, speed, and deep ownership.
                        </p>

                        <ul className="space-y-4 pt-1 text-blue-900 text-lg">
                            {[
                                "Direct founder involvement — no layers",
                                "One engineer owning architecture, design, execution",
                                "Fast decisions and clean engineering",
                                "Honest communication and craft-first delivery"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Technical Expertise */}
                <motion.h3
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mt-24 mb-14"
                >
                    Technical Expertise
                </motion.h3>

                {/* Services */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((s, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                        >
                            <s.icon className={`w-10 h-10 mb-5 ${s.color}`} />
                            <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                            <p className="text-gray-600 text-base leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Closing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mt-24 text-center max-w-3xl mx-auto"
                >
                    <p className="text-2xl text-gray-700 leading-snug font-light">
                        If you’re building something meaningful — a SaaS product, business tool,
                        or internal platform — Vedaxon becomes your{" "}
                        <span className="font-bold text-blue-600">technical engine</span>.
                        A partner that builds with the ownership of a co-founder.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
