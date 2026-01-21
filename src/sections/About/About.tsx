import React from "react";
import "./About.css";
import SkyscraperScene from "../../components/SkyscraperScene";

const About: React.FC = () => {
  return (
    <div className="about-section">
      <div className="container about-content">
        <div className="text-content-left">
          <h1>About Me</h1>
          <div className="statistics">
            <div className="statistic">
              <h1 className="stat-value">100%</h1>
              <p className="stat-description">Dedicated</p>
            </div>
            <div className="statistic">
              <h1 className="stat-value">3+</h1>
              <p className="stat-description">Years of Experience</p>
            </div>
            <div className="statistic">
              <h1 className="stat-value">5+</h1>
              <p className="stat-description">Sizable Projects Completed</p>
            </div>
          </div>
          <div className="text-content-left-inner">
            <div>
              <div>
                <h2>Passion For Design</h2>

                <p>
                  Since my high school years I've enjoyed designing and creating
                  different projects. This passion has translated into my
                  professional work, where I strive to solve problems with clean
                  and effective solutions.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h2>People Over Processes</h2>

                <p>
                  As a software engineer who prioritizes results, it’s never an
                  option to be toxic. You can’t scale bad culture with great
                  tools.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h2>Scientific Approach</h2>

                <p>
                  I apply an educated, methodical, and calculated approach to
                  solving business problems. Gather requirements, design the
                  system, map out unit tests, build, test, iterate.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h2>Continuous Learning</h2>

                <p>
                  With a rapidly evolving environment, it’s important for me to
                  constantly upskill in my field. Focused on being a T-shaped
                  engineer, I learn a wide breadth of technologies while
                  deepening my knowledge on the frontend.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="scene-content-right">
          <SkyscraperScene />
        </div>
      </div>
    </div>
  );
};

export default About;
