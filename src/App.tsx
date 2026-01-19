import "./App.css";
import Nav from "./components/Nav/Nav";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import About from "./sections/About/About";
import Landing from "./sections/Landing/Landing";
import QuoteSection from "./sections/QuoteSection/QuoteSection";

function App() {
  return (
    <div className="App">
      <SocialLinks position="right" />
      <Nav pages={["Home", "About", "Projects", "Contact"]} />
      <div style={{ width: "100%" }}>
        <Landing />
        <QuoteSection />
        <About />
      </div>
    </div>
  );
}

export default App;
