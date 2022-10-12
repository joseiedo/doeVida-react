import React from "react";
import "./header.css";
const Header = () => {
  const links = [
    "início",
    "hemocentros",
    "etapas",
    "por que doar?",
    "teste de elegibilidade",
  ];

  return (
    <header className="header">
      <input type="checkbox" id="menu-control" className="menu-control" />
      <ul>
        {links.map((link) => {
          return (
            <li key={link}>
              <a href="./">{link}</a>
            </li>
          );
        })}
      </ul>
      <label htmlFor="menu-control" className="hamburger-icon">
        <div></div>
      </label>
    </header>
  );
};

export default Header;
