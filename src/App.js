import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/"; // hide navbar on home page

  return (
    <>
      {showNavbar && <Navbar />} {/* Only show on non-home pages */}
      <div className={showNavbar ? "pt-24" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
