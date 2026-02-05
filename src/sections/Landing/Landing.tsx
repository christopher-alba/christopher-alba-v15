import { type FC } from "react";
import "./Landing.css";

const Landing: FC = () => {
  const navigateTo = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="landing-page">
      <div className="background-gradient"></div>

      <div className="container" style={{ position: "relative" }}>
        <section className="landing-content ">
          <div className="content-left">
            <div className="welcome-pill">
              <p>👋 Welcome to my portfolio</p>
            </div>
            <h1 className="first-name">Christopher</h1>
            <h1 className="last-name">Alba</h1>
            <h2>Full Stack Software Engineer</h2>
            <p>
              I'm a passionate full-stack developer with expertise in building
              scalable web applications. I love turning complex problems into
              simple, beautiful, and intuitive solutions.
            </p>
            <div className="button-wrapper">
              <button
                className="button-primary"
                onClick={() =>
                  navigateTo("https://github.com/christopher-alba")
                }
              >
                View Projects
              </button>
              <button
                className="button-secondary"
                onClick={() =>
                  navigateTo("https://linkedin.com/in/christopher-alba")
                }
              >
                Contact Me
              </button>
            </div>
          </div>
          <div className="content-right">
            <div className="background-container">
              <div className="background-layer"></div>
              <div className="card">
                <span className="emoji">👨‍💻</span>
              </div>
            </div>
          </div>
        </section>
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>

            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">MVP Completion Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Adaptable</div>
              <div className="stat-label">Flexible in Any Environment</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
