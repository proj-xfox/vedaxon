import { motion } from "framer-motion";
import { CheckCircle, Zap, Code, Shield, Repeat, Clock } from "lucide-react";

// Feature list
const services = [
    {
        icon: Code,
        title: "End-to-End Ownership",
        description: "Architecture, engineering, UI/UX, deployment — everything crafted with intention.",
        color: "text-blue-600"
    },
    {
        icon: Zap,
        title: "Full-Stack Expertise",
        description: "Modern stack: React.js, Node.js, PostgreSQL, TailwindCSS, REST APIs, and cloud-native deployment on platforms like Vercel and Render.",
        color: "text-green-600"
    },
    {
        icon: Shield,
        title: "High-Performance Systems",
        description: "Robust APIs, scalable backend architecture, secure data workflows.",
        color: "text-red-600"
    },
    {
        icon: Repeat,
        title: "Modern UI/UX",
        description: "Clean, intuitive interfaces for web and mobile with thoughtful interaction design.",
        color: "text-purple-600"
    },
    {
        icon: Clock,
        title: "SaaS-Ready Engineering",
        description: "Subscriptions, RBAC, automation, notifications, multi-tenant architecture.",
        color: "text-orange-600"
    },
    {
        icon: CheckCircle,
        title: "Craft-Focused Delivery",
        description: "Fast execution with uncompromising attention to detail and quality.",
        color: "text-indigo-600"
    }
];

// Animation variants
const staggerContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.25
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
};

export default function PremiumAboutVedaxon() {
    return (
        <section id="about" className="py-24 md:py-32 bg-gray-50 text-gray-800">
            <div className="max-w-7xl mx-auto px-5 sm:px-8">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-extrabold text-center mb-6 tracking-tight"
                >
                    About <span className="text-blue-600">Vedaxon</span>
                </motion.h2>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.55 }}
                    viewport={{ once: true }}
                    className="text-center text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto mb-16 md:mb-20 font-light leading-relaxed"
                >
                    Founder-led. Craft-focused. Building{" "}
                    <span className="font-semibold text-gray-700">fast, scalable software</span>{" "}
                    that works beautifully in the real world.
                </motion.p>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Left: Founder Perspective */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-8 md:p-12 border border-gray-100 space-y-8"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 border-b pb-4">
                            The Founder’s Perspective
                        </h3>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            I’m <span className="font-extrabold text-blue-600">Sachin Thawari</span>,
                            the founder and principal engineer behind Vedaxon.
                            Vedaxon operates on one belief — great products come from{" "}
                            <span className="font-semibold">clarity, craftsmanship, and deep ownership</span>,
                            not from large teams or layered communication.
                        </p>

                        <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50/40 rounded-lg shadow-sm">
                            <p className="italic text-lg md:text-xl text-blue-900 font-medium leading-relaxed">
                                “I build products end-to-end — architecture, logic, UI/UX, backend systems,
                                and deployment. Every detail is shaped with intention and care.”
                            </p>
                            <footer className="text-sm text-blue-700 mt-3">— Sachin Thawari</footer>
                        </blockquote>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            Vedaxon is a focused studio by design — limited clients, deeper involvement,
                            and craftsmanship that ensures every product is durable, scalable, and
                            a delight to use.
                        </p>
                    </motion.div>

                    {/* Right: How Vedaxon Works */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.65 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1 bg-blue-50 border border-blue-100 shadow-md rounded-2xl p-8 md:p-10 space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-blue-900">
                            How Vedaxon Works
                        </h3>

                        <p className="text-blue-800 text-lg leading-relaxed font-medium">
                            A boutique, founder-driven studio that prioritises clarity, speed, and deep ownership.
                        </p>

                        <ul className="space-y-3 pt-1 text-blue-900 text-lg">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <span>No handoffs — one engineer builds everything.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <span>No communication gaps or misalignment.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <span>Just clean execution, honesty, and craft.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Feature Cards */}
                <div className="mt-24">
                    <motion.h3
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900"
                    >
                        The Technical Edge I Bring
                    </motion.h3>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col"
                            >
                                <service.icon className={`w-9 h-9 mb-5 ${service.color}`} />
                                <h4 className="text-xl font-bold mb-2 text-gray-900">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Closing */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center max-w-3xl mx-auto"
                >
                    <p className="text-2xl text-gray-700 leading-snug font-light">
                        If you're building something meaningful — whether it’s a SaaS
                        platform, internal system, or a business tool — Vedaxon becomes your{" "}
                        <span className="font-bold text-blue-600">technical engine</span>.
                        A partner who builds with the ownership of a co-founder.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
