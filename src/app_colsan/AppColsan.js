import React from "react";
import appColsanImg from "../assets/colsan.jpg";
import Button from "../button/Button";
import "./appColsan.css";

const AppColsan = () => {
  return (
    <section className="app-colsan">
      <div className="colsan-box">
        <h2>Acesse o site da COLSAN</h2>
        <div>
          {" "}
          <img src={appColsanImg} alt="Foto do aplicativo da colsan" />
          <p>
            Este site não possui relação nenhuma com o governo ou a COLSAN.
            Portanto, não podemos agendar doações ou fornecer maiores
            informações. Dessa forma, recomendamos que acesse o site oficial da
            Associação Beneficiente de Coleta de Sangue.
          </p>
        </div>
        <Button
          text="Acesse o site"
          type="link"
          href="https://www.colsan.org.br/site/"
        />
      </div>
    </section>
  );
};

export default AppColsan;
