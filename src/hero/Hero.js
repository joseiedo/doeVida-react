import React from "react";
import bg from "../assets/hero-bg-min.jpg";
import "./hero.css";

const Hero = ({ img, texto }) => {
  return (
    <div className="hero">
      <img src={bg} className="img-hero" />
      <h1 className="titulo">
        Uma única
        <br /> doação pode
        <br /> salvar até
        <span className="bg-red"> quatro vidas.</span>
        <span className="subtitulo">Faça a diferença.</span>
      </h1>
    </div>
  );
};

export default Hero;
