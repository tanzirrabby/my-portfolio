import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen text-white flex items-center justify-center p-6">
      <motion.div
        className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-10 w-full max-w-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6">Get in Touch ✨</h2>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <textarea rows="4" placeholder="Your Message" className="p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
          <motion.button whileHover={{ scale: 1.05 }} className="bg-indigo-500 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition">Send 🚀</motion.button>
        </form>
      </motion.div>
    </div>
  );
}
