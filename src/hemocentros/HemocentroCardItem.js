import React from "react";
import styles from "./HemocentroCardItem.module.css";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutgoingMail } from "react-icons/md";
const HemocentroCardItem = ({ data }) => {
  return (
    <div className={`animeLeft ${styles.card}`}>
      <p>
        <strong>{data.nome}</strong>
      </p>
      <p>
        {data.endereco} | {data.cep}
      </p>
      <p>
        <BsTelephoneFill />
        {data.telefone}
      </p>
      {data.email.split(",").map((m) => {
        return (
          <p>
            <MdOutgoingMail /> {m}
          </p>
        );
      })}
    </div>
  );
};

export default HemocentroCardItem;
