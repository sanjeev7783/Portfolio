import { useEffect, useState } from "react";
import myImage from "../assets/person-with-laptop.svg";

const Hero = () => {
  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowName((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sanjeev_Kumar_Resume.pdf"; // Make sure resume.pdf is in the public folder
    link.download = "Sanjeev_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-gradient-to-r from-green-300 to-blue-300"
    >
      <img
        src={myImage}
        alt="person-with-laptop"
        className="w-2/3 md:w-1/3 mt-4 md:mt-0 mb-6 md:mb-0"
      />
      <div
        id="resume"
        className="text-center md:text-left mt-6 md:mt-0 scroll-mt-20 md:scroll-mt-10"
      >
        <h1 className="text-4xl font-bold">
          Hey folks, I'm{" "}
          <span className="text-white">
            {showName ? "Sanjeev" : "Developer"}
          </span>
        </h1>
        <p className="mt-2 max-w-xl mx-auto md:mx-0">
          With a fervent passion for user experience design, interfaces, and web
          development, I bring boundless energy to the table. My expertise lies
          in creating seamless digital experiences that captivate and engage
          users.
        </p>
        <button
          onClick={handleDownload}
          className="mt-4 px-4 py-2 bg-pink-200 rounded-full text-sm hover:bg-gray-200"
        >
          ⬇️ Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
