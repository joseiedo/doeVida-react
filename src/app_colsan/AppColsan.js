import React from "react";
import appColsanImg from "../assets/colsan.jpg";
import Button from "../button/Button";
import "./appColsan.css";
import styles from "./AppColsan.module.css";

const AppColsan = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Acesse o site da COLSAN</h2>
          <p className={styles.text}>
            Este site não possui relação nenhuma com o governo ou a COLSAN.
            Portanto, não podemos agendar doações ou fornecer maiores
            informações. Dessa forma, recomendamos que acesse o site oficial da
            Associação Beneficiente de Coleta de Sangue.
          </p>
          <Button
            text="Acesse o site"
            type="link"
            href="https://www.colsan.org.br/site/"
          />
        </div>
        <img src={appColsanImg} alt="Foto do aplicativo da colsan" />
      </div>
    </section>
  );
};

export default AppColsan;
