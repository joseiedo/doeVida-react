import React from "react";
import styles from "./Questionario.module.css";
import {
  FaBirthdayCake,
  FaWeight,
  FaBabyCarriage,
  FaPaintBrush,
  FaHeartbeat,
} from "react-icons/fa";

import { MdBloodtype, MdHealthAndSafety } from "react-icons/md";
import { RiEmotionHappyFill } from "react-icons/ri";

const Questionario = () => {
  const questionsList = [
    {
      icon: <FaBirthdayCake />,
      question: (
        <>
          Você tem entre <strong>16</strong> e <strong>60</strong> anos? Caso já
          tenha doado, você tem até 69 anos?
        </>
      ),
      answer: "sim",
      link: "http://umsosangue.com.br/impedimentos-doacao.pdf",
    },
    {
      icon: <FaWeight />,
      question: (
        <>
          Você tem um peso <strong>inferior</strong> a <strong>50</strong>{" "}
          quilos?
        </>
      ),
      answer: "não",
      link: "http://umsosangue.com.br/impedimentos-doacao.pdf",
    },
    {
      icon: <FaBabyCarriage />,
      question: (
        <>
          Você está grávida ou teve um parto a menos de <strong>12</strong>{" "}
          meses?
        </>
      ),
      answer: "não",
      link: "http://umsosangue.com.br/impedimentos-doacao.pdf",
    },
    {
      icon: <FaPaintBrush />,
      question: (
        <>
          Você fez uma <strong>tatuagem</strong> nos últimos 12 meses?
        </>
      ),
      answer: "não",
      link: "http://umsosangue.com.br/impedimentos-doacao.pdf",
    },
    {
      icon: <MdHealthAndSafety />,
      question: (
        <>
          Você tem alguma doença que seja <strong>transmissível</strong>?
        </>
      ),
      answer: "não",
      link: "http://umsosangue.com.br/impedimentos-doacao.pdf",
    },
    {
      icon: <FaHeartbeat />,
      question: (
        <>
          Você teve <strong>contato sexual</strong> com alguma pessoa que possui
          uma doença transmissível nos últimos <strong>12</strong> meses?
        </>
      ),
      answer: "não",
      link: "http://umsosangue.com.br/impedimentos-doacao.pdf",
    },
    {
      icon: <MdBloodtype />,
      question: (
        <>
          Você recebeu alguma <strong>transfusão</strong> ou realizou uma{" "}
          <strong>cirurgia</strong> nos últimos 12 meses?
        </>
      ),
      answer: "não",
      link: "http://umsosangue.com.br/impedimentos-doacao.pdf",
    },
  ];

  const [index, setIndex] = React.useState(0);
  const [cantDonate, setCantDonate] = React.useState(false);

  function handleAnswer(e) {
    const answer = e.target.innerText.toLowerCase();

    if (answer !== questionsList[index].answer) {
      setCantDonate(true);
    } else {
      setIndex(index + 1);
    }
  }

  function handleTryAgain() {
    setIndex(0);
    setCantDonate(false);
  }

  return (
    <div className={styles.questionCard}>
      {cantDonate ? (
        <>
          {" "}
          <p className={styles.question}>
            Infelizmente você não pode doar <br />
            <a
              href="https://saude.sp.gov.br/fundacao-pro-sangue/doacao-de-sangue/requisitos-para-doacao"
              target="blank"
            >
              Clique aqui
            </a>{" "}
            e saiba mais.
          </p>
          <button className={styles.btnprimario} onClick={handleTryAgain}>
            Refazer questionário
          </button>
        </>
      ) : questionsList[index] ? (
        <>
          {questionsList[index].icon}
          <p className={styles.question}>{questionsList[index].question}</p>
          <div className={styles.options}>
            <button className={styles.btnprimario} onClick={handleAnswer}>
              Sim
            </button>
            <button className={styles.btnsecundario} onClick={handleAnswer}>
              Não
            </button>
          </div>
        </>
      ) : (
        <>
          <RiEmotionHappyFill />
          <p className={styles.question}>
            De acordo com suas respostas, você pode doar. Mas lembre que ainda é
            recomendado fazer a triagem e os exames necessários. Para ver todos
            os requisitos{" "}
            <a href="https://saude.sp.gov.br/fundacao-pro-sangue/doacao-de-sangue/requisitos-para-doacao">
              acesse aqui
            </a>
          </p>
          <button className={styles.btnprimario} onClick={handleTryAgain}>
            Refazer questionário
          </button>
        </>
      )}
    </div>
  );
};

export default Questionario;
