import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-white font-sans flex flex-col items-center justify-center px-6">
      
      <motion.img
        src="/white shirt .jpg" // put your pic in public/
        alt="Tanzir Rabby"
        className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-indigo-400 shadow-lg"
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-indigo-400">Tanzir</span> 👋
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Engineer passionate about Backend Development & Distributed Systems.
      </motion.p>

      <div className="mt-6 space-x-4">
        <Link to="/projects" className="px-4 py-2 bg-indigo-500 rounded-xl shadow-md hover:bg-indigo-600 transition">
          Projects
        </Link>
        <Link to="/achievements" className="px-4 py-2 bg-gray-700 rounded-xl shadow-md hover:bg-gray-600 transition">
          Achievements
        </Link>
        <Link to="/contact" className="px-4 py-2 bg-cyan-500 rounded-xl shadow-md hover:bg-cyan-400 transition">
          Contact
        </Link>
      </div>
    </div>
  );
}
