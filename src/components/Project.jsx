// import React from "react";
// import myImage from "../assets/grocery_1.jpg";

// const Project = () => (
//   <section id="project" className="p-10">
//     <h2 className="text-2xl font-semibold mb-4">Project</h2>

//     <img src={myImage} alt="person-with-laptop" className="w-1/4 text-center" />
//   </section>
// );

// export default Project;
import React from 'react';

const projects = [
  {
    title: 'Jazeera Airways',
    duration: 'Mar 2025 – Present',
    points: [
      'Developing scalable and responsive UI components using Next.js for a comprehensive this Airline E-booking platform.',
      'Implemented CRUD operations for employee data via API calls.',
      'Utilized Zustand for efficient state management across complex flows.',
      'Built reusable components for consistency and faster development.',
      'Active participation in sprint planning, stand-ups, and retrospectives.',
    ],
  },
  {
    title: 'Whitbred Co-Pilot',
    duration: 'Dec 2024 – Mar 2025',
    points: [
      'Built scalable and responsive UI using React.js for a hotel management platform.',
      'Implemented CRUD functionality using REST APIs.',
      'Used Redux for managing complex state across components.',
      'Integrated RSuite components to maintain design consistency.',
      'Collaborated with backend to display real-time data for bookings and room management.',
    ],
  },
  {
    title: 'Tata Steel Europe Ltd.',
    duration: 'Oct 2022 – Nov 2024',
    points: [
      'Maintained responsive interfaces for web apps used by TATA Steel Europe (UK & Netherlands).',
      'Converted UI/UX designs into code using HTML, CSS, JS, and Bootstrap.',
      'Ensured mobile responsiveness and cross-browser compatibility.',
      'Involved in code reviews, bug fixes, and performance optimization.',
      'Wrote unit tests and followed Agile methodologies.',
    ],
  },
];

const ProjectWork = () => (
  <section id="projects" className="p-10 bg-gray-50 scroll-mt-65 md:scroll-mt-10">
    <h2 className="text-3xl font-bold mb-6 text-center">Project Work</h2>
    <div className="space-y-10">
      {projects.map((project, index) => (
        <div key={index} className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold text-blue-700">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">{project.duration}</p>
          <ul className="list-disc ml-6 space-y-2 text-gray-700">
            {project.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectWork;

