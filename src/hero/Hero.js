import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ img, texto }) => {
  return (
    <div className={styles.hero}>
      <img src={img} className={styles.heroBg} />
      {texto}
    </div>
  );
};

export default Hero;
