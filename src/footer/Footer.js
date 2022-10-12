import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div></div>
        <ul>
          {[
            "início",
            "hemocentros",
            "etapas",
            "por que doar?",
            "teste de elegibidade",
          ].map((link) => (
            <li key={link}>
              <a href="./">{link}</a>
            </li>
          ))}
        </ul>
        <ul>
          {["impedimentos", "site oficial colsan"].map((link) => (
            <li key={link}>
              <a href="./">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
