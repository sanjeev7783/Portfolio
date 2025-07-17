import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer
    id="contact"
    className="p-6 bg-gray-800 text-white text-center scroll-mt-65 md:scroll-mt-10"
  >
    <div className="text-lg font-semibold">Connect with me</div>

    <div className="flex justify-center gap-6 mt-3 text-2xl">
      <a
        href="https://www.instagram.com/sanjeev_boltan"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-400"
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=61578325534821"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.linkedin.com/in/sanjeev-kumar-b00418144/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-300"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/sanjeev7783"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-400"
      >
        <FaGithub />
      </a>
    </div>

    <p className="mt-4 text-sm">
      📞 +91 9155062633 | 📧 sanjeev77830@gmail.com
    </p>
  </footer>
);

export default Footer;
