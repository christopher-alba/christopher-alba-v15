import React, { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaSun,
  FaMoon,
  FaPlaneArrival,
  FaUser,
  FaCogs,
} from "react-icons/fa";
import { useTheme } from "../../contexts/ThemeContext";
import "./Nav.css";
import { FaTimeline } from "react-icons/fa6";
const sections = [
  "landing-page",
  "about-section",
  "skills-section",
  "career-history",
];
const SocialLinks: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("landing-page");

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.className);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // section is "active" when 10% visible
      },
    );

    sections.forEach((id) => {
      const el = document.getElementsByClassName(id)[0];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionClassName: string) => {
    const targetElement = document.getElementsByClassName(
      sectionClassName,
    )?.[0] as HTMLDivElement;
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="actions-wrapper left">
        <button
          className={activeSection === "landing-page" ? "active" : ""}
          onClick={() => handleNavigate("landing-page")}
        >
          <FaPlaneArrival />
        </button>

        <button
          className={activeSection === "about-section" ? "active" : ""}
          onClick={() => handleNavigate("about-section")}
        >
          <FaUser />
        </button>

        <button
          className={activeSection === "skills-section" ? "active" : ""}
          onClick={() => handleNavigate("skills-section")}
        >
          <FaCogs />
        </button>

        <button
          className={activeSection === "career-history" ? "active" : ""}
          onClick={() => handleNavigate("career-history")}
        >
          <FaTimeline />
        </button>
        <div className="theme-toggle mobile">
          <button onClick={toggleTheme} aria-label="Toggle theme">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
      <div className={`actions-wrapper right`}>
        <div className={`social-links `}>
          <a
            href="https://www.linkedin.com/in/christopher-alba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/christopher-alba"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
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
