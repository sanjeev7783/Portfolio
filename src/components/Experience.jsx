const experiences = [
  {
    company: 'Tata Consultancy Services',
    role: 'Software Engineer',
    location: 'Kolkata, West Bengal, India',
    duration: 'Oct 2022 – Present',
    responsibilities: [
      'Worked on web development projects for high-profile international clients.',
      'Actively participated in Agile processes including sprint planning, daily standups, and retrospectives.',
      'Contributed to frontend development, bug fixing, and performance optimization.',
      'Coordinated with cross-functional teams to deliver quality solutions.'
    ],
  },
];

const Experience = () => (
  <section id="experience" className="p-10 bg-white scroll-mt-65 md:scroll-mt-10">
    <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={index} className="border-l-4 border-blue-600 pl-4 py-4 shadow-sm bg-gray-50 rounded">
          <h3 className="text-xl font-semibold text-blue-800">{exp.role}</h3>
          <p className="text-sm text-gray-600">
            {exp.company} — {exp.location}
          </p>
          <p className="text-sm text-gray-500 italic mb-2">{exp.duration}</p>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            {exp.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;

