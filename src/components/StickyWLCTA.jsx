export default function StickyWLCTA() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-3 px-6 shadow-lg flex items-center justify-between z-50 hidden md:flex">

            <p className="text-gray-700 font-medium">
                Want to launch your branded product in days?
            </p>

            <a
                href="/contact?topic=white-label"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition"
            >
                Request White-label Demo
            </a>
        </div>
    );
}
