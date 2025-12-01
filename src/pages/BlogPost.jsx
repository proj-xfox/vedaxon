import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import fm from "front-matter";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SkeletonLoader = () => (
    <div className="max-w-3xl mx-auto px-6 py-20 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-10"></div>
        <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-11/12"></div>
            <div className="h-4 bg-gray-200 rounded w-10/12"></div>
        </div>
    </div>
);

export default function BlogPost() {
    const { slug } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [parsedData, setParsedData] = useState(null);

    useEffect(() => {
        const loadPost = async () => {
            const modules = import.meta.glob("../blogPosts/*.md", {
                eager: true,
                as: "raw",
            });

            const path = Object.keys(modules).find((p) => p.includes(slug));

            if (path) {
                const raw = modules[path];
                const parsed = fm(raw);
                setParsedData(parsed);
                document.title = `${parsed.attributes.title} | Vedaxon Blog`;
            }

            setIsLoading(false);
        };

        loadPost();
    }, [slug]);

    if (isLoading) return <SkeletonLoader />;

    if (!parsedData) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto px-6 py-20 text-center"
            >
                <h1 className="text-4xl font-bold mb-4">404 - Post Not Found 😟</h1>
                <p className="mb-8 text-gray-600">
                    No article found with slug: <b>{slug}</b>
                </p>
                <Link to="/blog" className="text-yellow-600 hover:underline font-medium">
                    ← Go Back to Blog
                </Link>
            </motion.div>
        );
    }

    const { attributes, body } = parsedData;

    const formattedDate = attributes.date
        ? new Date(attributes.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "Unknown Date";

    return (
        <div className="bg-gray-100 min-h-screen py-16">
            {/* Animated container */}
            <motion.div
                initial={{ opacity: 0, y: 55, scale: 0.93 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl mx-auto px-6"
            >
                {/* Animated card */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-gray-200"
                >
                    {/* Animated Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="text-4xl font-extrabold text-gray-900 leading-snug mb-4"
                    >
                        {attributes.title}
                    </motion.h1>

                    {/* Animated Date */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.22 }}
                        className="text-gray-500 text-sm mb-8"
                    >
                        Published on: <span className="font-medium">{formattedDate}</span>
                    </motion.p>

                    {/* Divider */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="border-b border-gray-200 mb-10"
                    />

                    {/* Markdown Body */}
                    <motion.article
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="prose prose-lg prose-gray max-w-none"
                    >
                        <ReactMarkdown>{body}</ReactMarkdown>
                    </motion.article>

                    {/* Back Button */}
                    <motion.div
                        whileHover={{ x: -6 }}
                        className="mt-12"
                    >
                        <Link
                            to="/blog"
                            className="text-yellow-600 hover:text-yellow-700 font-medium"
                        >
                            ← Back to Blog
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}
