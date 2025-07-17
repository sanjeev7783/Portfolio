import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu after click (mobile)
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-extrabold text-gray-900">Sanjeev Kumar</h1>

        {/* Mobile menu button */}
        <button
          className="text-2xl text-gray-800 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-8 font-semibold text-gray-600">
          {[
            "about",
            "skills",
            "projects",
            "resume",
            "certifications",
            "contact",
          ].map((id) => (
            <span
              key={id}
              className="cursor-pointer hover:text-emerald-500"
              onClick={() => handleScroll(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 font-semibold text-gray-700 md:hidden">
          {[
            "about",
            "skills",
            "projects",
            "resume",
            "certifications",
            "contact",
          ].map((id) => (
            <span
              key={id}
              className="cursor-pointer hover:text-emerald-500"
              onClick={() => handleScroll(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
