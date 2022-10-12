import React from "react";
import imgBg from "../assets/ondedoar.jpg";
import Button from "../button/Button";
import "./ondeDoar.css";
const OndeDoar = () => {
  return (
    <section className="ondeDoarSection">
      <img src={imgBg} alt="" />
      <div className="container">
        <div className="modal">
          <h2>
            Onde doar sangue<span style={{ color: "#9E132F" }}>?</span>
          </h2>
          <p>
            Pronto(a) para salvar vidas? <br />
            Primeiro, vamos procurar o hemocentro mais proximo de você.
          </p>
          <Button type="link" text="Hemocentros" href="./" />
        </div>
      </div>
    </section>
  );
};

export default OndeDoar;
