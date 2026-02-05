import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-section container">
      <div className="section-title">
        <h1>About Me</h1>
        <hr />
      </div>
      <div className=" about-content">
        <div className="scene-content-right">
          <div className="background-container">
            <div className="background-layer"></div>
            <div className="card">
              <img src="about-me.png" alt="About Me" />
            </div>
          </div>
        </div>
        <div className="text-content-left">
          <div className="text-content-left-inner">
            <div>
              <div>
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
                <p>
                  As a software engineer who prioritizes results, it’s never an
                  option to be toxic. You can’t scale bad culture with great
                  tools.
                </p>
              </div>
            </div>
            <div>
              <div>
                <p>
                  I apply an educated, methodical, and calculated approach to
                  solving business problems. Gather requirements, design the
                  system, map out unit tests, build, test, iterate.
                </p>
              </div>
            </div>
            <div>
              <div>
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
      </div>
    </div>
  );
};

export default About;
