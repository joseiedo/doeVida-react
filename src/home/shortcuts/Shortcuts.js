import React from "react";
import handHeartImg from "../../assets/icons/hand-heart.svg";
import heartbeatImg from "../../assets/icons/heartbeat.svg";
import markerImg from "../../assets/icons/marker.svg";
import bloodImg from "../../assets/icons/blood.svg";

import styles from "./Shortcuts.module.css";
const Shortcuts = () => {
  return (
    <div>
      <ul className={styles.shortcuts}>
        <li className="animeLeft">
          <img src={handHeartImg} alt="" />
          <a href="/">Posso doar?</a>
        </li>
        <li className="animeLeft">
          <img src={heartbeatImg} alt="" />
          <a href="/">Onde doar?</a>
        </li>
        <li className="animeLeft">
          <img src={markerImg} alt="" />
          <a href="/">Pré cuidados</a>
        </li>
        <li className="animeLeft">
          <img src={bloodImg} alt="" />
          <a href="/">Por que doar?</a>
        </li>
      </ul>
    </div>
  );
};

export default Shortcuts;
