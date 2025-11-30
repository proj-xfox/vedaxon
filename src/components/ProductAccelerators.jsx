import { motion } from "framer-motion";
import {
    MessageSquare,
    Home,
    Stethoscope,
    Sparkles,
    CheckCircle,
    Zap,
    ArrowRight,
} from "lucide-react";

/**
 * ProductAccelerators — Vedaxon (Hybrid Theme)
 * Combines light + subtle dark gradient + premium feel
 * Clean, modern, white-label focused
 */

const PRODUCTS = [
    {
        id: "leadbuzz",
        title: "LeadBuzz",
        subtitle: "WhatsApp Lead Manager",
        desc: "Lead pipeline, quick replies, tags, and a focused dashboard. Perfect for agencies and sales teams.",
        icon: MessageSquare,
        highlights: ["WhatsApp-first flows", "Pipeline + tags", "Team roles"],
        stack: "React, Node.js, PostgreSQL",
        showcaseHref: "#leadbuzz-showcase",
        wlHref: "?type=demo&product=leadbuzz#contact",
    },
    {
        id: "broker",
        title: "Broker Platform",
        subtitle: "Real Estate Listing Engine",
        desc: "Search, filters, hierarchy, media upload, and property workflows. Lightning fast for small teams.",
        icon: Home,
        highlights: ["Advanced search", "Workflows", "Image gallery", "Fast CRUD"],
        stack: "React, Node.js, PostgreSQL, S3",
        showcaseHref: "#broker-showcase",
        wlHref: "?type=demo&product=broker app#contact",
    },
    {
        id: "ezy-modules",
        title: "EzyClinic Modules",
        subtitle: "Healthcare Accelerators",
        desc: "Reception, appointments, visits, and follow-up flows. Clinic-ready and brandable.",
        icon: Stethoscope,
        highlights: ["Appointment dashboard", "Follow-up tracking", "Reports"],
        stack: "React, Express, PostgreSQL",
        showcaseHref: "#ezyclinic-showcase",
        wlHref: "?type=demo&product=ezyclinic#contact",
    },
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.12, delayChildren: 0.08 },
    },
};

const card = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ProductAccelerators() {
    return (
        <section
            id="accelerators"
            className="py-24 md:py-32 bg-gradient-to-b from-gray-900 via-gray-850 to-gray-100 text-white"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        <span className="text-blue-400">Pre-built</span> Product Accelerators
                    </h2>
                    <p className="text-xl text-gray-300 mt-4">
                        Launch a production-ready, white-label platform in days — not months.
                        Fast, scalable, founder-engineered foundations.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
                >
                    {PRODUCTS.map((p) => {
                        const Icon = p.icon;

                        return (
                            <motion.article
                                key={p.id}
                                variants={card}
                                whileHover={{
                                    scale: 1.015,
                                    y: -4,
                                    boxShadow:
                                        "0 20px 40px -5px rgba(0,0,0,0.35), 0 8px 15px -3px rgba(0,0,0,0.2)",
                                }}
                                className="flex flex-col gap-5 p-8 rounded-3xl 
                                           bg-gray-800/60 backdrop-blur-sm 
                                           border border-gray-700/60 
                                           shadow-xl transition-all duration-300"
                            >
                                {/* Header Row */}
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 rounded-xl bg-blue-600 text-white shadow-md">
                                            <Icon size={26} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                                            <p className="text-sm text-blue-300">{p.subtitle}</p>
                                        </div>
                                    </div>

                                    {/* Badge */}
                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-green-400 text-gray-900 px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                                        <Sparkles className="w-4 h-4" />
                                        White-label
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-base text-gray-300">{p.desc}</p>

                                {/* Highlights */}
                                <ul className="flex flex-col gap-2 text-sm text-gray-300 border-t border-gray-700 pt-5">
                                    {p.highlights.map((h, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <CheckCircle className="w-4 h-4 text-green-400" />
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Stack Info */}
                                <div className="text-xs text-gray-400 italic mt-1">
                                    Tech: {p.stack}
                                </div>

                                {/* CTA Buttons */}
                                <div className="mt-6 flex flex-col gap-3">
                                    <a
                                        href={p.wlHref}
                                        className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold bg-blue-500 text-white shadow hover:bg-blue-600 transition-all"
                                    >
                                        <Zap className="w-4 h-4 mr-2" /> Request White-Label Demo
                                    </a>

                                    <a
                                        href={p.showcaseHref}
                                        className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium border border-gray-600 text-gray-300 hover:bg-gray-700 transition"
                                    >
                                        View Showcase <ArrowRight className="w-4 h-4 ml-2" />
                                    </a>
                                </div>

                                {/* Footer Note */}
                                <p className="text-xs text-gray-500 mt-1">
                                    Delivery: <span className="font-semibold text-gray-300">3–7 days baseline</span>
                                </p>
                            </motion.article>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-xl mx-auto text-center mt-20"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Accelerate Your Product?
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Limited white-label engagements to guarantee quality and fast delivery.
                    </p>
                    <a
                        href="?type=consultation&product=Free Consultation#contact"
                        className="inline-flex items-center gap-3 px-8 py-3 bg-blue-500 rounded-full text-white font-bold text-lg shadow hover:bg-blue-600 transition"
                    >
                        Request a Free Consultation
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
