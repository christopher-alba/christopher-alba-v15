import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./SocialLinks.css";

type SocialLinksProps = {
  position?: "left" | "right";
};

const SocialLinks: React.FC<SocialLinksProps> = ({ position = "left" }) => {
  return (
    <div className={`social-links ${position}`}>
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
  );
};

export default SocialLinks;
