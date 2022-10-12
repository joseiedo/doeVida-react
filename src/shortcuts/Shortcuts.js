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
        <div>
          <li>
            <img src={handHeartImg} alt="" />
            <p>Posso doar sangue?</p>
          </li>
          <li>
            <img src={heartbeatImg} alt="" />
            <p>Onde doar?</p>
          </li>
        </div>
        <div>
          <li>
            <img src={markerImg} alt="" />
            <p>Pré cuidados</p>
          </li>
          <li>
            <img src={bloodImg} alt="" />
            <p>Por que doar?</p>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Shortcuts;
