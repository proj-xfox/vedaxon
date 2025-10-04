export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-10">
      <p>© {new Date().getFullYear()} Sachin Thawari. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://github.com" target="_blank" className="hover:text-yellow-400">GitHub</a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-yellow-400">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" className="hover:text-yellow-400">Twitter</a>
      </div>
    </footer>
  );
}