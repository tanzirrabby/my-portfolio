import { motion } from "framer-motion";

const projects = [
  {
    title: "Flood Aid Web App 🌊",
    desc: "React + Node.js app for real-time flood help & news.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Bus Tracker 🚍",
    desc: "Live tracking system for university buses using GPS.",
    tech: ["React Native", "Firebase"],
    link: "#",
  },
  {
    title: "Invisibility Cloak 🧙‍♂️",
    desc: "Fun CV project using OpenCV to make red cloths invisible.",
    tech: ["Python", "OpenCV"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6">
      <h1 className="text-5xl font-extrabold text-indigo-400 text-center mb-14">🚀 My Projects</h1>
      
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-gray-700 p-6 rounded-3xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold text-indigo-400">{project.title}</h2>
            <p className="text-gray-300 mt-3">{project.desc}</p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 text-sm rounded-full bg-indigo-500/20 text-indigo-300 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-indigo-400 font-semibold hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
