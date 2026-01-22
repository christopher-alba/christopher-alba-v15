import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./sections/About/About";
import Landing from "./sections/Landing/Landing";
import Skills from "./sections/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Nav />
      <div style={{ width: "100%" }}>
        <Landing />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
