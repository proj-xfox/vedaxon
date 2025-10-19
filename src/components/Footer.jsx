export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <p>© {new Date().getFullYear()} VedaXon. All rights reserved.</p>
      <p>Designed & Built with ❤️ using modern web technologies.</p>
      {/* <div className="flex justify-center space-x-6 mt-4">
         <a href="https://github.com" target="_blank" className="hover:text-yellow-400">GitHub</a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-yellow-400">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" className="hover:text-yellow-400">Twitter</a>
      </div> */}
    </footer>

  );
}