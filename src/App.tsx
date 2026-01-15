import { useState } from "react";
import "./App.css";
import EarthScene from "./components/EarthScene";

function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <EarthScene hovered={hovered} />
      <button onClick={() => setHovered(!hovered)}>Toggle Hover</button>
    </>
  );
}

export default App;
