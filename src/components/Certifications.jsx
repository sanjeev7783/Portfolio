// import React from 'react';

const certifications = [
  // {
  //   title: "CCNA: Introduction to Network(CISCO)",
  //   url: "https://www.credly.com/badges/2c8e182b-0c2d-499a-af0c-2d26d1c95bd0?source=linked_in_profile",
  // },
  {
    title: "Full Stack Developer",
    url: "https://drive.google.com/file/d/1YMmFTLSUtt3I8qUxE3EByPcOhO2d58jE/view",
  },
  {
    title: "Core Java",
    url: "https://drive.google.com/file/d/17W6HgyFN5Tt-JUk4j_A-Q0289Z6gA195/view",
  },
  // {
  //   title: "React Frontend Developer",
  //   url: "https://example.com/cert4.pdf",
  // },
  {
    title: "Python Certificate",
    url: "https://www.coursera.org/account/accomplishments/verify/ZRH8DVFNXPJ5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  // {
  //   title: "JavaScript Certificate",
  //   url: "https://example.com/cert6.pdf",
  // },
];

const Certifications = () => (
  <section
    id="certifications"
    className="p-10 bg-gray-50 scroll-mt-65 md:scroll-mt-10"
  >
    <h2 className="text-3xl font-bold mb-6 text-center">Certifications</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded shadow hover:shadow-md transition"
        >
          <h3 className="font-semibold text-blue-700 text-lg">{cert.title}</h3>
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 mt-1 inline-block underline hover:text-blue-700"
          >
            View Certificate
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;
