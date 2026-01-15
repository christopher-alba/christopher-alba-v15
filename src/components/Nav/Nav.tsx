import React from "react";
import "./Nav.css";

type NavProps = {
  pages: string[];
  activePage?: string;
  onNavigate?: (page: string) => void;
};

const Nav: React.FC<NavProps> = ({ pages, activePage, onNavigate }) => {
  return (
    <nav className="vertical-nav">
      <div className="logo">
        <h2>CA</h2>
      </div>
      <ul>
        {pages.map((page) => (
          <li
            key={page}
            className={activePage === page ? "active" : ""}
            onClick={() => onNavigate && onNavigate(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
