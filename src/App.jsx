import "./App.css";
import AboutMe from "./components/aboutCard/AboutMe";
import Contact from "./components/contactCard/Contact";
import Home from "./components/homeCard/Home";
import LeftCard from "./components/leftCard/LeftCard";
import Projects from "./components/projectsCard/Projects";
import Tech from "./components/techCard/Tech";
function App() {
  return (
    <div className="App">
      <LeftCard />
      <Home />
      <AboutMe />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
