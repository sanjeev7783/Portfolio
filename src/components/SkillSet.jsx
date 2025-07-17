const skillset = {
  languages: ["JavaScript", "TypeScript", "Java", "Python"],
  technologies: [
    "React.js",
    "Next.js",
    "Redux",
    "Zustand",
    "Redux Toolkit",
    "Axios",
  ],
  styling: ["HTML", "CSS", "Tailwind CSS", "Bootstrap"],
};

const Skillset = () => (
  <section id="skills" className="p-10 scroll-mt-65 md:scroll-mt-10">
    <h2 className="text-3xl font-bold mb-6 text-center">Skillset</h2>
    <div className="grid gap-6 md:grid-cols-3 bg-white">
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Languages</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {skillset.languages.map((lang, idx) => (
            <li key={idx}>{lang}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          Technologies & Tools
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {skillset.technologies.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Styling</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {skillset.styling.map((style, idx) => (
            <li key={idx}>{style}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Skillset;
