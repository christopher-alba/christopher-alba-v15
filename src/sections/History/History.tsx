// CareerHistory.tsx
import React, { useEffect } from "react";
import "./History.css";

// JSON data for experiences
const experiences = [
  {
    title: "Software Engineer",
    company: "Turners Automotive Group Digital",
    startYear: 2023,
    endYear: null, // null indicates currently working
    period: "July 2023 - Present",
    description:
      "Responsible for creating and maintaining frontend and backend web applications. Worked on AI aspects and designed UI/UX flows in Figma.",
  },
  {
    title: "Graduate Software Engineer",
    company: "Turners Automotive Group Digital",
    startYear: 2022,
    endYear: 2023,
    period: "June 2022 - July 2023",
    description:
      "Maintained end-to-end integration tests using Java and Playwright. Learned different software flows in the business.",
  },
  {
    title: "Fullstack Software Developer Intern",
    company: "Henry Schein One",
    startYear: 2021,
    endYear: 2022,
    period: "November 2021 - February 2022 (400 hours)",
    description:
      "Designed and developed web applications in C#, covering both frontend and backend. Presented work to a large online audience.",
  },
  {
    title: "Frontend Software Engineer Intern",
    company: "Jasper",
    startYear: 2020,
    endYear: 2021,
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
      <div className="section-title">
        <h1>Career History</h1>
        <hr />
      </div>
      <section className="career-intro sub-container">
        <div className="intro-img-wrapper">
          <div className="background-container">
            <div className="background-layer"></div>
            <div className="card">
              <img src="history.png" alt="History" />
            </div>
          </div>
        </div>
        <div className="intro-text">
          <p>
            My interest in technology began in highschool, where I did a course
            in ICT for a few years. I did take a little detour where I switched
            subjects to triple sciences and studied first year biomedical
            science at The University of Auckland. However, after realizing my
            true passion in first year engineering at UoA, I specialized in
            computer systems and focused my time and energy in learning as much
            as I could about software development and engineering in general.
            This involved hours after school studying and researching about
            specifically web development, and honing my skills through personal
            projects.
          </p>
        </div>
      </section>
      <div className="sub-container">
        <div className="divider">
          <p>My Path to Today</p>
          <hr />
          <p>2014 - 2022</p>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="path-to-today-wrapper sub-container">
          <div className="section">
            <h2>High School Technical Foundations</h2>
            <div>
              <div className="section-item">
                <div>
                  <h3>NCEA 1</h3>
                </div>
                <div>
                  <p>ICT + DVC + Accelerated Science + Maths</p>
                </div>
              </div>
              <div className="section-item">
                <div>
                  <h3>NCEA 2 - 3</h3>
                </div>
                <div>
                  <p>Physics, Biology, Chemistry, Calculus</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <h2>Decided to Pursue Medical Field </h2>
            <div className="section-item">
              <div>
                <h3>UoA 2017</h3>
              </div>
              <div>
                <p>Biomedical Science Year 1</p>
              </div>
            </div>
          </div>
          <div className="section">
            <h2>Pivoted to Engineering | Interested in Computers </h2>
            <div>
              <div className="section-item">
                <div>
                  <h3>UoA, 2018</h3>
                </div>
                <div>
                  <p>Engineering Year 1</p>
                </div>
              </div>
              <div className="section-item">
                <div>
                  <h3>UoA, 2019</h3>
                </div>
                <div>
                  <p>Compsys Engineering Year 1</p>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <h2>Passion for Software Development / Engineering</h2>
            <div className="section-item">
              <div>
                <h3>Bootcamp, 2020</h3>
              </div>
              <div>
                <p>Web Development 800 hours</p>
              </div>
            </div>
            <div className="section-item">
              <div>
                <h3>UoA Year 3 - 4</h3>
              </div>
              <div>
                <p>Self Study + Internships</p>
              </div>
            </div>
            <div className="section-item">
              <div>
                <h3>Final Semester Uni </h3>
              </div>
              <div>
                <p>Software Engineer @TAG Digital, NZ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop"></div>
      </div>
      <div className="statistics-wrapper">
        <div className="stats-container sub-container">
          {/* LEFT COLUMN */}
          <div className="stats-left">
            <div className="stat-block">
              <h2>3+ years</h2>
              <p>Automotive Ecommerce</p>
            </div>

            <div className="divider" />

            <div className="stat-row">
              <div>
                <h3>400 Hrs</h3>
                <p>Medical Software</p>
              </div>
              <div>
                <h3>416 Hrs</h3>
                <p>Financial Space</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="stats-right">
            <div className="stat-info">
              <div>
                <h4>Graduated 2023</h4>
                <p>University of Auckland</p>
                <p className="muted">Computer Systems Engineering</p>
              </div>
              <span className="icon">🎓</span>
            </div>

            <div className="stat-info">
              <div>
                <h4>Completed 2020</h4>
                <p>Dev Academy Bootcamp</p>
              </div>
              <span className="icon">🏋️</span>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline Section */}
      <div className="timeline-wrapper">
        <div className="sub-container">
          <div className="divider">
            <p>Work History</p>
            <hr />
            <p>Present - 2020</p>
          </div>
          <section className="career-timeline">
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-left">
                    <div className="arrow-up"></div>
                    <h3>{exp.endYear || "Now"}</h3>
                    <h3>{exp.startYear}</h3>
                    <div className="arrow-down"></div>
                  </div>
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
    </div>
  );
};

export default History;
