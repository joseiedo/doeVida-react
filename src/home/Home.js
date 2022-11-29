import React from "react";
import Shortcuts from "./shortcuts/Shortcuts";
import AppColsan from "./appColsan/AppColsan";
import OndeDoar from "./onde_doar/OndeDoar";
import Requisitos from "./requisitos/Requisitos";
import Hero from "./hero/Hero";
import styles from "./hero/Hero.module.css";

import bg from "../assets/fundo-intro.jpg";

const Home = () => {
  return (
    <>
      <main>
        <Hero
          img={bg}
          texto={
            <h1 className={`${styles.text} animeLeft`}>
              Uma doação pode salvar até{" "}
              <span className="destaque">quatro vidas.</span>
            </h1>
          }
        />
        {/* <Shortcuts /> */}
      </main>
      <Requisitos />
      <OndeDoar />
      <AppColsan />;
    </>
  );
};

export default Home;
