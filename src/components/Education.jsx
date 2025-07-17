// import React from 'react';

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Aryabhatta Knowledge University",
    location: "Patna, Bihar, India",
    duration: "Aug 2018 – Aug 2022",
    grade: "8.38 CGPA",
  },
];

const Education = () => (
  <section id="education" className="p-10 bg-gray-50 scroll-mt-65 md:scroll-mt-10">
    <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
    <div className="space-y-6">
      {educationData.map((edu, index) => (
        <div
          key={index}
          className="bg-white shadow rounded p-6 border-l-4 border-green-500"
        >
          <h3 className="text-xl font-semibold text-green-700">{edu.degree}</h3>
          <p className="text-sm text-gray-600">
            {edu.institution}, {edu.location}
          </p>
          <p className="text-sm text-gray-500 italic">{edu.duration}</p>
          <p className="text-sm text-gray-700 font-medium mt-2">
            Grade: {edu.grade}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
