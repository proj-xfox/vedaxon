export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center fixed w-full top-0 shadow-md z-10">
      <h1 className="text-xl font-bold">Sachin Thawari</h1>
      <ul className="flex space-x-6">
        <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
        <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </nav>
  );
}