import { motion } from "framer-motion";

const achievements = [
  { title: "🏆 Hackathon Winner", desc: "Built AI-powered flood detection app.", year: "2024" },
  { title: "🎓 Dean’s List Award", desc: "Recognized for academic excellence.", year: "2023" },
  { title: "🚀 Open Source Contributor", desc: "Contributed to high-starred GitHub projects.", year: "2022" },
];

export default function Achievements() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold text-indigo-400 text-center mb-10">✨ Achievements</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-2xl shadow-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            <h2 className="text-2xl font-semibold">{ach.title}</h2>
            <p className="text-gray-300 mt-2">{ach.desc}</p>
            <span className="block mt-3 text-sm text-gray-400">{ach.year}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
