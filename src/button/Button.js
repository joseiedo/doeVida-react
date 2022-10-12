import React from "react";
import "./button.css";

const Button = ({ text, type, ...props }) => {
  if (type === "link") {
    return (
      <a className="btn" {...props}>
        {text}
      </a>
    );
  } else {
    return (
      <button className="btn" {...props}>
        {text}
      </button>
    );
  }
};

export default Button;
