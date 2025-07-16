const Navbar = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-8 bg-white shadow-md">
      <h1 className="text-xl font-extrabold text-gray-900 mb-2 md:mb-0">
        Sanjeev Kumar
      </h1>
      <div className="flex justify-center gap-8 font-semibold text-gray-600">
        <span
          className="hover:text-emerald-500 cursor-pointer"
          onClick={() => handleScroll("about")}
        >
          About
        </span>
        <span
          className="hover:text-emerald-500 cursor-pointer"
          onClick={() => handleScroll("skills")}
        >
          Skills
        </span>
        <span
          className="hover:text-emerald-500 cursor-pointer"
          onClick={() => handleScroll("projects")}
        >
          Projects
        </span>
        <span
          className="hover:text-emerald-500 cursor-pointer"
          onClick={() => handleScroll("resume")}
        >
          Resume
        </span>
        <span
          className="hover:text-emerald-500 cursor-pointer"
          onClick={() => handleScroll("certifications")}
        >
          Certifications
        </span>
        <span
          className="hover:text-emerald-500 cursor-pointer"
          onClick={() => handleScroll("contact")}
        >
          Contact
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
