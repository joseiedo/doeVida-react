import React from "react";
import HemocentroCardItem from "./HemocentroCardItem";
import styles from "./HemocentrosCard.module.css";

const HemocentroCard = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data.map((item) => (
        <HemocentroCardItem data={item} key={item.id} />
      ))}
    </div>
  );
};

export default HemocentroCard;
