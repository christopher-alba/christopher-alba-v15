import { useState, type FC } from "react";
import EarthScene from "../../components/EarthScene";
import "./Landing.css";
import QuoteSection from "./QuoteSection/QuoteSection";

const Landing: FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="landing-page">
      {/* Overlay content bottom-left */}
      <div className="landing-content container">
        <div>
          <h1>Christopher Alba</h1>
          <h2>Software Engineer</h2>
          <p
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Employed at TAG Digital{" "}
            <span style={{ textDecoration: "underline" }}>New Zealand.</span>
          </p>
          <span>
            Over 3 years of professional experience in software engineering.
          </span>
        </div>
        <QuoteSection />
      </div>
      {/* 3D Earth Background */}
      <div className="earth-scene">
        <EarthScene hovered={hovered} />
      </div>
      <div className="shadow-plane"></div>
    </div>
  );
};

export default Landing;
