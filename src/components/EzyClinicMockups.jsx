import { motion } from "framer-motion";

export default function EzyClinicMockups() {
    return (
        <section className="py-24 bg-gray-900 text-white px-6 md:px-16">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">See EzyClinic in Action</h2>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                    Simple, modern, and built for real-world OPD workflows.
                </p>
            </div>

            {/* Mockups */}
            <div className="flex flex-col items-center gap-12">

                {/* Laptop Mockup */}
                <motion.div
                    className="w-full max-w-5xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-black">
                        <img
                            src="/mockups/dashboard_clinic.png"
                            alt="EzyClinic Dashboard"
                            className="w-full"
                        />
                    </div>
                    <p className="text-center mt-4 text-gray-400">Doctor Dashboard — Today’s Appointments & Follow-ups</p>
                </motion.div>

                {/* Mobile Mockup */}
                <motion.div
                    className="w-64"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-700 bg-black">
                        <img
                            src="/mockups/dashboard_clinic.png"
                            alt="EzyClinic Mobile App"
                            className="w-full"
                        />
                    </div>
                    <p className="text-center mt-4 text-gray-400">Mobile Appointment View</p>
                </motion.div>
            </div>
        </section>
    );
}
