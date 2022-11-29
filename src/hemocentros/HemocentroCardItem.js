import React from "react";
import styles from "./HemocentroCardItem.module.css";

const HemocentroCardItem = ({ data }) => {
  return (
    <div className={styles.card}>
      <p>
        <strong>{data.nome}</strong>
      </p>
      <p>
        {data.endereco} | {data.cep}
      </p>
      <p>{data.telefone}</p>
      <p>{data.email}</p>
    </div>
  );
};

export default HemocentroCardItem;
