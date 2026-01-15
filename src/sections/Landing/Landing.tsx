import { useState, type FC } from "react";
import EarthScene from "../../components/EarthScene";
import "./Landing.css";

const Landing: FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="landing-page">
      {/* 3D Earth Background */}
      <div className="earth-scene">
        <EarthScene hovered={hovered} />
      </div>

      {/* Overlay content bottom-left */}
      <div className="landing-content">
        <h1>Christopher Alba</h1>
        <h2>Software Engineer</h2>
        <p
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          Based in <span style={{textDecoration:"underline"}}>New Zealand</span>
        </p>
      </div>
    </div>
  );
};

export default Landing;
