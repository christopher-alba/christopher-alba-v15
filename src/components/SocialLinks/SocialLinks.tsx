import React from "react";
import { FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
import "./SocialLinks.css";

type SocialLinksProps = {
  position?: "left" | "right";
};

const SocialLinks: React.FC<SocialLinksProps> = ({ position = "left" }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`actions-wrapper ${position}`}>
      <div className={`social-links `}>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
      <div className="theme-toggle">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </div>
  );
};

export default SocialLinks;
