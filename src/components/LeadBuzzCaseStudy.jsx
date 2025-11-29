import React from "react";
import {
    ArrowRight,
    CheckCircle,
    XCircle,
    Database,
    Server,
    Layout,
    ShieldCheck,
    Search,
    Users
} from "lucide-react";
import ScreenshotCarousel from "./ScreenshotCarousel";

// Reusable Components for consistency
const Badge = ({ children }) => (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-6">
        {children}
    </span>
);

const SectionHeader = ({ title, subtitle }) => (
    <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>}
    </div>
);

const TechTag = ({ label }) => (
    <span className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 shadow-sm">
        {label}
    </span>
);

export default function LeadBuzzCaseStudy() {
    return (
        <div className="w-full bg-white font-sans text-gray-800">

            {/* --------------------------------- */}
            {/* HERO SECTION */}
            {/* --------------------------------- */}
            <section className="relative pt-24 pb-20 px-6 max-w-6xl mx-auto text-center">
                <Badge>Case Study: CRM Development</Badge>

                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                    LeadBuzz: The <span className="text-indigo-600">Lightning-Fast CRM</span> <br className="hidden md:block" />
                    for Digital Sales Teams
                    {/* 1. TITLE BADGE */}
                    <span className="inline-block align-middle ml-4 text-3xl font-extrabold text-white bg-green-500 px-4 py-1 rounded-lg shadow-lg rotate-1">
                        FREE!
                    </span>
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    A modern, multi-tenant CRM built for sales, marketing, and consulting teams who need to organize and manage leads from sources like WhatsApp, Facebook, and Instagram.                </p>

                {/* 3. SUBTITLE ANNOUNCEMENT */}
                <p className="text-xl font-bold text-green-600 mt-4 mb-10">
                    ⭐ Forever Free Plan Available. No credit card required to get started.
                </p>


                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    {/* 2. CTA BUTTON UPDATE */}
                    <a
                        href="https://leadbuzz.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    >
                        Start for Free Now <ArrowRight size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center"
                    >
                        Build Similar App
                    </a>
                </div>

                {/* Credibility Bar */}
                <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 bg-gray-50 border border-gray-100 px-6 py-3 rounded-full">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <CheckCircle size={16} className="text-green-500" /> Built in 10 days
                    </div>
                    <div className="w-px h-4 bg-gray-300 hidden md:block"></div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <CheckCircle size={16} className="text-green-500" /> Multi-tenant Architecture
                    </div>
                    <div className="w-px h-4 bg-gray-300 hidden md:block"></div>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                        <CheckCircle size={16} className="text-green-500" /> Deployed on Neon + Render
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* THE CHALLENGE (PROBLEM) */}
            {/* --------------------------------- */}
            <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Small sales teams are drowning in inquiries. Without a CRM, leads live in personal WhatsApp chats, Excel sheets are always outdated, and follow-ups are missed.
                            </p>
                            <p className="font-semibold text-gray-900">The result? Lost revenue and chaotic workflows.</p>
                        </div>

                        <div className="grid gap-4">
                            {[
                                "Leads getting lost in personal WhatsApp chats",
                                "No structured follow-up reminders",
                                "Zero visibility on team pipeline performance",
                                "Data scattered across Excel & Phone contacts"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <div className="flex-shrink-0 bg-red-50 p-2 rounded-full">
                                        <XCircle size={20} className="text-red-500" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* PRODUCT SHOWCASE */}
            {/* --------------------------------- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <SectionHeader
                    title="The Solution: Clean & Fast"
                    subtitle="We built LeadBuzz to be the exact opposite of clunky enterprise CRMs. It is lightweight, instant, and requires zero training to use."
                />

                {/* Browser Mockup Wrapper */}
                <div className="rounded-xl bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="ml-4 px-3 py-1 bg-gray-800 rounded-md text-xs text-gray-400 font-mono">
                            leadbuzz.app/dashboard
                        </div>
                    </div>
                    <div className="bg-white rounded-b-lg overflow-hidden relative">
                        {/* Ensure your ScreenshotCarousel handles its own aspect ratio or height */}
                        <ScreenshotCarousel />
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* KEY FEATURES GRID */}
            {/* --------------------------------- */}
            <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader title="Engineered for Performance" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Server className="text-indigo-600" size={24} />,
                                title: "Multi-Tenant Architecture",
                                desc: "True data isolation. Every business gets its own secure environment within the same app instance."
                            },
                            {
                                icon: <Layout className="text-indigo-600" size={24} />,
                                title: "Kanban & Pipeline",
                                desc: "Drag-and-drop pipeline management to track leads from 'New' to 'Closed' instantly."
                            },
                            {
                                icon: <Search className="text-indigo-600" size={24} />,
                                title: "Instant Search",
                                desc: "Optimized indexing allows finding any lead by name or partial number in milliseconds."
                            },
                            {
                                icon: <Users className="text-indigo-600" size={24} />,
                                title: "Role-Based Access",
                                desc: "Granular permissions for Admins vs Staff. Staff only see what they need to see."
                            },
                            {
                                icon: <ShieldCheck className="text-indigo-600" size={24} />,
                                title: "JWT Security",
                                desc: "Stateless authentication with tenant-bound middleware ensures data never leaks."
                            },
                            {
                                icon: <Database className="text-indigo-600" size={24} />,
                                title: "Postgres Reliability",
                                desc: "Built on Neon (Serverless Postgres) for infinite scalability and zero maintenance."
                            }
                        ].map((f, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* TECH STACK */}
            {/* --------------------------------- */}
            <section className="py-24 px-6 max-w-5xl mx-auto">
                <SectionHeader
                    title="Under the Hood"
                    subtitle="A full-stack JavaScript architecture chosen for development speed and runtime performance."
                />

                <div className="grid md:grid-cols-4 gap-8">
                    {/* Category Column */}
                    <div className="space-y-4">
                        <h4 className="font-bold text-gray-900 border-b pb-2">Frontend</h4>
                        <div className="flex flex-wrap gap-2">
                            <TechTag label="React" />
                            <TechTag label="Vite" />
                            <TechTag label="Tailwind CSS" />
                            <TechTag label="Zustand" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-gray-900 border-b pb-2">Backend</h4>
                        <div className="flex flex-wrap gap-2">
                            <TechTag label="Node.js" />
                            <TechTag label="Express" />
                            <TechTag label="Prisma ORM" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-gray-900 border-b pb-2">Data</h4>
                        <div className="flex flex-wrap gap-2">
                            <TechTag label="Neon (Postgres)" />
                            <TechTag label="Redis" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-bold text-gray-900 border-b pb-2">DevOps</h4>
                        <div className="flex flex-wrap gap-2">
                            <TechTag label="Render" />
                            <TechTag label="Vercel" />
                            <TechTag label="GitHub Actions" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --------------------------------- */}
            {/* CTA SECTION */}
            {/* --------------------------------- */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                    {/* Decorative background blob */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 z-0"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Need a Custom Dashboard like this?
                        </h2>
                        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                            Vedaxon specializes in turning complex operational problems into simple, high-performance software.
                        </p>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                        >
                            Start Your Project
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}