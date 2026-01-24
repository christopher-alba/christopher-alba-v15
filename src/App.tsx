import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { useGLTF } from "@react-three/drei/core/Gltf";

import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./sections/About/About";
import History from "./sections/History/History";
import Landing from "./sections/Landing/Landing";
import Skills from "./sections/Skills/Skills";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const { active, progress } = useProgress();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!active && progress === 100) {
      setTimeout( () => setReady(true), 500);
    }
  }, [active, progress]);

  if (!ready) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Nav />
      <div style={{ width: "100%" }}>
        <Landing />
        <About />
        <Skills />
        <History />
      </div>
    </div>
  );
}

export default App;

/* -------------------------------------------------------
   Preload
------------------------------------------------------- */

useGLTF.preload("/models/building.glb");
useGLTF.preload("/models/earth.glb");
useGLTF.preload("/models/marker.glb");
