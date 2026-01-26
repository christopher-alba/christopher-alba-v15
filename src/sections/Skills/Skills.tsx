import type { FC } from "react";
import "./Skills.css";
import { FaBrush, FaCloud, FaCode, FaDatabase, FaServer } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const Skills: FC = () => {
  const skills = [
    {
      name: "Frontend",
      icon: <FaCode />,
      technologies: [
        "Angular",
        "TypeScript",
        "SCSS",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Javascript",
      ],
    },
    {
      name: "Backend",
      icon: <FaServer />,
      technologies: ["Node.js", "Express", "Python", "C#", "ASP.NET Core"],
    },
    {
      name: "Databases",
      icon: <FaDatabase />,
      technologies: ["MongoDB", "PostgreSQL", "DynamoDB"],
    },
    {
      name: "DevOps",
      icon: <FaCloud />,
      technologies: ["AWS", "Render", "Terraform", "Kubernetes", "Docker"],
    },
  ];
  const softSkills = [
    "communication",
    "teamwork",
    "problem solving",
    "critical thinking",
    "adaptability",
    "ownership & accountability",
    "time management",
    "stakeholder collaboration",
    "attention to detail",
    "continuous learning",
    "giving & receiving feedback",
    "prioritization",
  ];

  return (
    <>
      <div className="skills-section">
        <div className="container">
          <div>
            <h1>Skills & Expertise</h1>
            <div className="content">
              <div>
                <h2>Summary</h2>
                <p>
                  I have a wide range of skills, ranging from web development to
                  designing wireframes on Figma. I focus mainly on web
                  technologies as that is my current expertise at work.
                  Currently, I am split evenly across the stack, but consider
                  myself to be deepening my knowledge more in the frontend side
                  of things, rather than the server side of development.
                </p>
              </div>
              <div className="statistics">
                <div>
                  <div className="statistic">
                    <h1 className="stat-value">50%</h1>
                    <p className="stat-description">Frontend</p>
                  </div>
                  <div className="statistic">
                    <h1 className="stat-value">50%</h1>
                    <p className="stat-description">Backend</p>
                  </div>
                  <div className="statistic">
                    <h1 className="stat-value">100%</h1>
                    <p className="stat-description">Problem Solver</p>
                  </div>
                </div>
                <div className="skill-icon-wrapper">
                  <div className="skill-icon">
                    <FaCode />
                  </div>
                  <div className="skill-icon">
                    <FaServer />
                  </div>
                  <div className="skill-icon">
                    <FaBrush />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skill-card soft-skills">
            <h3 className="skill-title">
              <span className="skill-icon-small">
                <FaPerson />
              </span>
              Soft Skills
            </h3>
            <div className="soft-skills-wrapper">
              <div className="soft-skills-left">
                Even though technical skills are what allow me to build
                solutions, soft skills are equally if not more important. The
                ability to make effective decisions and solutions are often
                enabled by these skills that I have developed over the years.
              </div>
              <div className="skill-tech-list">
                {softSkills.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="skills-list-wrapper">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <h3 className="skill-title">
                  <span className="skill-icon-small">{skill.icon}</span>
                  {skill.name}
                </h3>

                <div className="skill-tech-list">
                  {skill.technologies.map((tech) => (
                    <span className="skill-chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
