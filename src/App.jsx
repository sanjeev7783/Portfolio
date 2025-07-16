import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import "./index.css";
import ProjectWork from "./components/Project";
import Skillset from "./components/SkillSet";
import ScrollToggle from "./components/ScrollToggle";

const App = () => (
  <div className="font-sans">
    <Navbar />
    <Hero />
    <ProjectWork />
    <Experience />
    <Education />
    <Skillset />
    <Certifications />
    <ScrollToggle />
    <Footer />
  </div>
);

export default App;
