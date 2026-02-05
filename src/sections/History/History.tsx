// CareerHistory.tsx
import React, { useEffect } from "react";
import "./History.css";

// JSON data for experiences
const experiences = [
  {
    title: "Software Engineer",
    company: "Turners Automotive Group Digital",
    period: "July 2023 - Present",
    description:
      "Responsible for creating and maintaining frontend and backend web applications. Worked on AI aspects and designed UI/UX flows in Figma.",
  },
  {
    title: "Graduate Software Engineer",
    company: "Turners Automotive Group Digital",
    period: "June 2022 - July 2023",
    description:
      "Maintained end-to-end integration tests using Java and Playwright. Learned different software flows in the business.",
  },
  {
    title: "Fullstack Software Developer Intern",
    company: "Henry Schein One",
    period: "November 2021 - February 2022 (400 hours)",
    description:
      "Designed and developed web applications in C#, covering both frontend and backend. Presented work to a large online audience.",
  },
  {
    title: "Frontend Software Engineer Intern",
    company: "Jasper",
    period: "November 2020 - February 2021 (416 hours)",
    description:
      "Worked primarily in Javascript/React frontend. Learned GraphQL for API calls instead of REST.",
  },
];

const History: React.FC = () => {
  useEffect(() => {
    const img = document.querySelector(".intro-image img") as HTMLImageElement;
    const bg = document.querySelector(
      ".intro-image .background-div",
    ) as HTMLDivElement;

    if (!img || !bg) return; // safety check

    const handleMouseEnter = () => {
      img.style.transform = "scale(1.1)";
      bg.style.borderRadius = "0px";
    };

    const handleMouseLeave = () => {
      img.style.top = "0";
      img.style.left = "0";
      img.style.transform = "scale(1)";
      bg.style.borderRadius = "20px";
    };

    bg.addEventListener("mouseenter", handleMouseEnter);
    bg.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup function
    return () => {
      img.removeEventListener("mouseenter", handleMouseEnter);
      img.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // empty dependency array, runs once on mount

  return (
    <div className="career-history">
      <div className="background-fullwidth">
        <div className="section-title">
          <h1>Career History</h1>
          <hr />
        </div>
        <section className="career-intro container">
          <div className="intro-img-wrapper">
            <div className="background-container">
              <div className="background-layer"></div>
              <div className="card">
                <img src="history-art.png" alt="History" />
              </div>
            </div>
          </div>
          <div className="intro-text">
            <p>
              My interest in technology began in highschool, where I did a
              course in ICT for a few years. I did take a little detour where I
              switched subjects to triple sciences and studied first year
              biomedical science at The University of Auckland. However, after
              realizing my true passion in first year engineering at UoA, I
              specialized in computer systems and focused my time and energy in
              learning as much as I could about software development and
              engineering in general. This involved hours after school studying
              and researching about specifically web development, and honing my
              skills through personal projects.
            </p>
            <p>
              Fast forward to today, and I’m a mid level full-stack software
              engineer at Turners Digital (TAGD). The full history outside of
              highschool and details of each step I took in my career are in the
              timeline below.
            </p>
          </div>
        </section>
      </div>
      {/* Timeline Section */}
      <div className="container timeline-wrapper" >
        <section className="career-timeline">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  {/* Key Details */}
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <h4 className="timeline-company">{exp.company}</h4>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  {/* Description */}
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default History;
