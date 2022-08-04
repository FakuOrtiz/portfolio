import { useRef } from "react";
import "./App.css";
import AboutMe from "./components/aboutCard/AboutMe";
import Contact from "./components/contactCard/Contact";
import Home from "./components/homeCard/Home";
import LeftCard from "./components/leftCard/LeftCard";
import Projects from "./components/projectsCard/Projects";
import Tech from "./components/techCard/Tech";

function App() {
  const home = useRef(null);
  const aboutMe = useRef(null);
  const tech = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  return (
    <div className="App">
      <LeftCard
        home={home}
        aboutMe={aboutMe}
        tech={tech}
        projects={projects}
        contact={contact}
      />
      <Home innerRef={home} />
      <AboutMe innerRef={aboutMe} />
      <Tech innerRef={tech} />
      <Projects innerRef={projects} />
      <Contact innerRef={contact} />
    </div>
  );
}

export default App;
