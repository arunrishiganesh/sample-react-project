import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navbarData from "../Data/navbar.json";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-slate-950/95 backdrop-blur sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">

        <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <p className="text-white font-extrabold text-lg sm:text-xl">
            Madurai <span className="text-amber-400">Compass</span>
          </p>
        </Link>

        <ul className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium text-slate-200">
          {navbarData.slice(0, 7).map((link) => (
            <li key={link.id}>
              <Link
                to={link.id === "home" ? "/" : `/${link.id}`}
                onClick={() => window.scrollTo(0,0)}
                className={`transition ${
                  isActive(link.id === "home" ? "/" : `/${link.id}`)
                    ? "text-amber-400 font-semibold"
                    : "hover:text-amber-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/planner"
          onClick={() => window.scrollTo(0,0)}
          className="hidden lg:inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-full transition"
        >
          Plan Your Trip
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white text-2xl">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="lg:hidden bg-slate-950 px-4 sm:px-6 pb-6 flex flex-col gap-4 text-slate-200 text-sm font-medium border-t border-white/10 pt-4">
          {navbarData.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id === "home" ? "/" : `/${link.id}`}
                onClick={() =>{
                  setIsOpen(false);
                  window.scrollTo(0,0);
                }}
                className={isActive(link.id === "home" ? "/" : `/${link.id}`) ? "text-amber-400 font-semibold" : "hover:text-amber-400"}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;