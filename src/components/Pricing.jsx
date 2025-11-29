import React from "react";
import { motion } from "framer-motion";
import { Check, Zap, Rocket, Code, Clock } from 'lucide-react'; // Using Lucide icons for better visual cues

// Re-map features to use objects for clarity and icons
const plans = [
    {
        title: "Starter",
        price: "₹3000 – ₹15k",
        desc: "Static Website + Custom Design",
        isPopular: false,
        border: "border-gray-700",
        highlight: "text-yellow-300",
        features: [
            { text: "3–5 Pages", icon: Code },
            { text: "Fully Responsive Design", icon: Check },
            { text: "SEO & Hosting Setup", icon: Check },
            { text: "Delivery: 5–7 Days", icon: Clock },
        ],
        ctaText: "Get Started",
        footer: "+ ₹999/month for maintenance",
        delay: 0.1,
    },
    {
        title: "Growth",
        price: "₹24,999 – ₹50k",
        desc: "Dashboard / Web App + Backend Integration",
        isPopular: true, // Make this the highlighted plan
        border: "border-yellow-500",
        highlight: "text-yellow-400",
        features: [
            { text: "React + Express + PostgreSQL", icon: Code },
            { text: "Full CRUD Dashboard + Charts", icon: Zap },
            { text: "Advanced Authentication (OAuth)", icon: Check },
            { text: "Delivery: 3–4 Weeks", icon: Clock },
        ],
        ctaText: "Start Building (Recommended)",
        footer: "+ ₹2,499/month (monitoring, DB backup)",
        delay: 0.2,
    },
    {
        title: "Scale",
        price: "₹75,000 – ₹1.5L",
        desc: "SaaS Product / AI Agent / Mobile App",
        isPopular: false,
        border: "border-gray-700",
        highlight: "text-yellow-300",
        features: [
            { text: "Full SaaS Stack (Web + Mobile)", icon: Rocket },
            { text: "User Roles, Billing, AI Integration", icon: Check },
            { text: "Advanced Cloud Deployment (AWS/Vercel)", icon: Check },
            { text: "Delivery: 6–8 Weeks", icon: Clock },
        ],
        ctaText: "Request Quote",
        footer: "+ ₹4,999/month (support, updates, monitoring)",
        delay: 0.3,
    },
];

export default function EnhancedPricing() {
    return (
        <section
            id="pricing"
            className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900/80 to-black text-white overflow-hidden"
        >
            {/* Subtle Background Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_60%)]"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black text-center text-yellow-400 mb-4 drop-shadow-lg"
                >
                    Transparent Pricing
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center text-xl text-gray-400 mb-16 max-w-2xl mx-auto"
                >
                    Upfront costs for rapid delivery, designed for quality and scale.
                </motion.p>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: plan.delay }}
                            viewport={{ once: true }}
                            className={`relative bg-gray-900/60 backdrop-blur-md border rounded-2xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 shadow-2xl ${plan.isPopular
                                ? 'border-yellow-500 ring-4 ring-yellow-500/30' // Highlight for recommended plan
                                : 'border-gray-700'
                                }`}
                        >
                            {/* POPULAR TAG */}
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-yellow-500 text-gray-900 text-xs font-bold uppercase py-1 px-4 rounded-full shadow-lg transform rotate-6">
                                    Most Popular
                                </div>
                            )}

                            <div className="flex-grow">
                                <h3 className={`text-3xl font-bold mb-1 ${plan.highlight}`}>
                                    {plan.title}
                                </h3>
                                <p className="text-sm font-medium text-gray-400 mb-4">{plan.desc}</p>

                                {/* Price */}
                                <div className="mb-6 border-b border-gray-700 pb-4">
                                    <p className="text-5xl font-black text-white leading-tight drop-shadow-md">
                                        {plan.price}
                                    </p>
                                    <p className="text-sm text-gray-500 mt-1">Starting Project Cost</p>
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 text-white mb-8">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-start text-lg">
                                            <f.icon className="w-5 h-5 text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                                            <span className="text-gray-200">{f.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <a
                                href="#contact"
                                className={`block text-center py-3 rounded-xl font-bold transition transform ${plan.isPopular
                                    ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400 hover:scale-[1.02] shadow-xl'
                                    : 'bg-gray-700 text-white hover:bg-gray-600'
                                    }`}
                            >
                                {plan.ctaText}
                            </a>

                            {/* Footer/Maintenance Cost */}
                            <p className="text-xs text-gray-500 text-center mt-4 pt-4 border-t border-gray-800">
                                {plan.footer}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center text-gray-500 text-sm mt-16 italic">
                    Note: All prices are estimates based on complexity and scope. Contact for a final quote.
                </p>
            </div>
        </section>
    );
}