import React from "react";
import imgBg from "../assets/ondedoar2.jpg";
import Button from "../button/Button";
import styles from "./OndeDoar.module.css";
const OndeDoar = () => {
  return (
    <section className={styles.ondeDoarBg}>
      <div className={styles.container}>
        <img src={imgBg} alt="Foto de um hemocentro" />
        <div className={styles.content}>
          <h2 className={styles.title}>Onde doar sangue?</h2>
          <p>
            Pronto(a) para salvar vidas? Primeiro, vamos procurar o hemocentro
            mais proximo de você.
          </p>
          <Button type="link" text="Hemocentros" href="./" />
        </div>
      </div>
    </section>
  );
};

export default OndeDoar;
