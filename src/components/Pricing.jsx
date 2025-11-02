import React from "react";
import { motion } from "framer-motion";

export default function Pricing() {
    const plans = [
        {
            title: "Starter",
            price: "₹3000 – ₹15k",
            desc: "Static Website + Custom Design",
            border: "border-gray-700",
            highlight: "text-yellow-300",
            features: [
                "✔ 3–5 Pages",
                "✔ Responsive Design",
                "✔ SEO & Hosting Setup",
                "✔ Delivery: 5–7 Days",
            ],
            footer: "+ ₹999/month for maintenance",
            glow: "hover:shadow-yellow-400/20",
            delay: 0.1,
        },
        {
            title: "Growth",
            price: "₹24,999 – ₹50k",
            desc: "Dashboard / Web App + Backend Integration",
            border: "border-yellow-400",
            highlight: "text-yellow-400",
            features: [
                "✔ React + Express + PostgreSQL",
                "✔ CRUD Dashboard + Charts",
                "✔ Authentication (Optional)",
                "✔ Delivery: 3–4 Weeks",
            ],
            footer: "+ ₹2,499/month (monitoring, DB backup)",
            glow: "hover:shadow-yellow-400/40",
            delay: 0.2,
        },
        {
            title: "Scale",
            price: "₹75,000 – ₹1.5L",
            desc: "SaaS Product / AI Agent / Mobile App",
            border: "border-gray-700",
            highlight: "text-yellow-300",
            features: [
                "✔ Full SaaS Stack (Web + Mobile)",
                "✔ User Roles, Billing, AI Integration",
                "✔ Render / AWS / Vercel Deployment",
                "✔ Delivery: 6–8 Weeks",
            ],
            footer: "+ ₹4,999/month (support, updates, monitoring)",
            glow: "hover:shadow-yellow-400/20",
            delay: 0.3,
        },
    ];

    return (
        <section
            id="pricing"
            className="relative py-24 bg-gradient-to-br from-gray-950 via-gray-900/80 to-black text-white overflow-hidden"
        >
            {/* Subtle Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.12),transparent_60%)]"></div>

            <div className="relative max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-extrabold text-center text-yellow-400 mb-16 drop-shadow-lg"
                >
                    Pricing Plans
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: plan.delay }}
                            viewport={{ once: true }}
                            className={`relative bg-gray-900/40 backdrop-blur-xl ${plan.border} border rounded-3xl p-8 shadow-lg ${plan.glow} transition-all duration-500 hover:-translate-y-2`}
                        >
                            <h3 className={`text-2xl font-semibold mb-4 ${plan.highlight}`}>
                                {plan.title}
                            </h3>
                            <p className="text-gray-300 mb-4">{plan.desc}</p>
                            <p className="text-4xl font-bold mb-6 text-white drop-shadow">
                                {plan.price}
                            </p>
                            <ul className="space-y-2 text-gray-400 mb-6">
                                {plan.features.map((f, j) => (
                                    <li key={j}>{f}</li>
                                ))}
                            </ul>
                            <p className="text-sm text-gray-500">{plan.footer}</p>

                            {/* Glow Accent */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
