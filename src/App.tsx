import "./App.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import About from "./sections/About/About";
import History from "./sections/History/History";
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
        <History />
        <Footer />
      </div>
    </div>
  );
}

export default App;
