import React from "react";
import styles from "./TesteDeElegibilidade.module.css";
import bg from "../assets/bg2.jpg";
import Questionario from "./Questionario";

const TesteDeElegibilidade = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.hero}>
        <img src={bg} alt="" className={styles.bgHero} />
        <div className={styles.content}>
          <h1>Saiba se você pode doar sangue.</h1>
          <p>
            Cada doação salva muitas vidas mas infelizmente há quem não possa
            doar. Esse questionário se baseia nos requisitos escritos no site do
            governo de são paulo mas não cobre todos os possíveis impedimentos,
            ainda é recomendado fazer a triagem e seus exames.{" "}
          </p>
        </div>
      </div>
      <Questionario />
    </section>
  );
};

export default TesteDeElegibilidade;
