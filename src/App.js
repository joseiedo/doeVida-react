import React from "react";
import AppColsan from "./app_colsan/AppColsan";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import OndeDoar from "./onde_doar/OndeDoar";
import Requisitos from "./requisitos/Requisitos";
import Shortcuts from "./shortcuts/Shortcuts";
import bg from "./assets/fundo-intro.jpg";
import styles from "./hero/Hero.module.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero
          img={bg}
          texto={
            <h1 className={styles.text}>
              Uma doação pode salvar até{" "}
              <span className="destaque">quatro vidas.</span>
            </h1>
          }
        />
        <Shortcuts />
      </main>
      <Requisitos />
      <OndeDoar />
      <AppColsan />
      <Footer />
    </>
  );
};

export default App;
