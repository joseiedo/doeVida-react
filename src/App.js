import React from "react";
import AppColsan from "./app_colsan/AppColsan";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import OndeDoar from "./onde_doar/OndeDoar";
import Requisitos from "./requisitos/Requisitos";
import Shortcuts from "./shortcuts/Shortcuts";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
