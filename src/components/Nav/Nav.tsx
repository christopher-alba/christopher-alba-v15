import React from "react";
import {
  FaSun,
  FaMoon,
  FaPlaneArrival,
  FaUser,
  FaCogs,
} from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
import "./Nav.css";
import { FaTimeline } from "react-icons/fa6";
const SocialLinks: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const handleNavigate = (sectionClassName: string) => {
    const targetElement = document.getElementsByClassName(
      sectionClassName,
    )?.[0] as HTMLDivElement;
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="actions-wrapper left">
        <button onClick={() => handleNavigate("landing-page")}>
          <FaPlaneArrival />
        </button>

        <button onClick={() => handleNavigate("about-section")}>
          <FaUser />
        </button>

        <button onClick={() => handleNavigate("skills-section")}>
          <FaCogs />
        </button>

        <button onClick={() => handleNavigate("career-history")}>
          <FaTimeline />
        </button>
        <div className="theme-toggle mobile">
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
      <div className={`actions-wrapper right`}>
        <div className="theme-toggle">
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
