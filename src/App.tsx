import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./sections/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Nav pages={["Home", "About", "Projects", "Contact"]} />
      <div style={{ width: "100%" }}>
        <Landing />
        <div></div>
      </div>
    </div>
  );
}

export default App;
