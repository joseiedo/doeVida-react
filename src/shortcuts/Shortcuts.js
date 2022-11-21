import React from "react";
import handHeartImg from "../assets/icons/hand-heart.svg";
import heartbeatImg from "../assets/icons/heartbeat.svg";
import markerImg from "../assets/icons/marker.svg";
import bloodImg from "../assets/icons/blood.svg";
import "./shortcuts.css";
const Shortcuts = () => {
  return (
    <div>
      <ul className="shortcuts">
        <li>
          <img src={handHeartImg} alt="" />
          <a href="/">Posso doar?</a>
        </li>
        <li>
          <img src={heartbeatImg} alt="" />
          <a href="/">Onde doar?</a>
        </li>
        <li>
          <img src={markerImg} alt="" />
          <a href="/">Pré cuidados</a>
        </li>
        <li>
          <img src={bloodImg} alt="" />
          <a href="/">Por que doar?</a>
        </li>
      </ul>
    </div>
  );
};

export default Shortcuts;
