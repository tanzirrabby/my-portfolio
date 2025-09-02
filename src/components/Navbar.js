import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 lg:w-2/3 backdrop-blur-xl bg-black/30 border border-cyan-500 rounded-3xl shadow-[0_0_30px_cyan] z-50 p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-cyan-400 tracking-wider glow">
          Tanzir 
        </h1>

        <div className="flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 border border-cyan-400/50
                ${
                  location.pathname === link.path
                    ? "bg-cyan-500/30 text-white shadow-[0_0_15px_cyan]"
                    : "text-gray-300 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_15px_cyan]"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Neon glow effect */}
      <style jsx>{`
        .glow {
          text-shadow:
            0 0 5px #ffffffff,
            0 0 10px #ffffffff,
            0 0 20px #ffffffff,
            0 0 40px #ffffffff;
        }
      `}</style>
    </nav>
  );
}
