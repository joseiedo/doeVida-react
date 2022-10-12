import React from "react";
import reqImg from "../assets/requisitos.jpg";
import Button from "../button/Button";
import "./requisitos.css";

const Requisitos = () => {
  return (
    <section className="requisitos">
      <div>
        <h2>O que é preciso para doar?</h2>
        <ul>
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
