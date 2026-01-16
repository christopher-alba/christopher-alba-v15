import "./App.css";
import Nav from "./components/Nav/Nav";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Landing from "./sections/Landing/Landing";

function App() {
  return (
    <div className="App">
      <SocialLinks position="right" />

      <Nav pages={["Home", "About", "Projects", "Contact"]} />
      <div style={{ width: "100%" }}>
        <Landing />
      </div>
    </div>
  );
}

export default App;
