import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-backdrop">
      <div className="img-wrapper">
        <img
          src="city.png"
          alt="Footer Background"
          className="footer-background"
        />
      </div>
      <footer className="footer">
        <div className="footer-container">
          <p>© 2026 Christopher Alba. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
