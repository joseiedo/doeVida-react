import React from "react";
import reqImg from "../assets/requisitos.jpg";
import Button from "../button/Button";
import styles from "./Requisitos.module.css";

const Requisitos = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>O que é preciso para doar?</h2>
        <ul className={styles.requisitos}>
          <li>
            Documento original de identidade com foto e dentro do prazo de
            validade
          </li>
          <li>Pesar acima de 50kg</li>
          <li>Ter entre 16 e 69 anos de idade</li>
          <li>Estar alimentado e em boas condições de saúde</li>
        </ul>
        <Button text="Quero doar!" href="/" type="link" />
      </div>
      <img src={reqImg} alt="Foto de um homem doando sangue" />
    </section>
  );
};

export default Requisitos;
