import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left h-screen px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white pt-20">
      <img src={profileImg} alt="Profile" className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-10 border-4 border-yellow-400"/>
      <div>
        <h2 className="text-4xl font-bold">Hi, I'm Sachin Thawari</h2>
        <p className="mt-4 text-lg text-gray-300">Full-stack Developer | React | Node.js</p>
        <p className="mt-2 max-w-md">I build scalable web apps and delightful user experiences. Let’s create something impactful together.</p>
      </div>
    </section>
  );
}