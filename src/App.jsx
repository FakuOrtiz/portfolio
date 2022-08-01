import "./App.css";
import AboutMe from "./components/aboutCard/AboutMe";
import Home from "./components/homeCard/Home";
import LeftCard from "./components/leftCard/LeftCard";
import Tech from "./components/techCard/Tech";
function App() {
  return (
    <div className="App">
      <LeftCard />
      <Home />
      <AboutMe />
      <Tech />
    </div>
  );
}

export default App;
