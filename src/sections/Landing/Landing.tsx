import { useState, type FC } from "react";
import EarthScene from "../../components/EarthScene";
import "./Landing.css";
import { FaEarthOceania } from "react-icons/fa6";

const Landing: FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="landing-page container ">
      {/* Overlay content bottom-left */}
      <div className="landing-content">
        <h1>Software Engineer</h1>
        <h2>Hi I'm Christopher Alba!</h2>
        <p
          onMouseOver={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          I'm based in{" "}
          <span style={{ textDecoration: "underline" }}>New Zealand</span>
        </p>
        <button>
          <FaEarthOceania /> Explore
        </button>
      </div>
      {/* 3D Earth Background */}
      <div className="earth-scene">
        <EarthScene hovered={hovered} />
      </div>
    </div>
  );
};

export default Landing;
