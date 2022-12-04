import React from "react";

import styles from "./Etapas.module.css";
const OndeDoar = () => {
  function handleClick({ target }) {
    target.classList.toggle(`${styles.active}`);
  }

  return (
    <section className={styles.bg}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Etapas doação de sangue</h2>
        </div>
        <dl>
          <dt onClick={handleClick} className={styles.active}>
            Cadastro
          </dt>
          <dd>
            O candidato à doação apresenta documento original e oficial, informa
            seus dados e recebe um código que o acompanha durante todo o
            processo da doação. O atendente confere com o doador se estão
            corretos os dados, como endereço, telefone, e-mail e CEP..
          </dd>
          <dt onClick={handleClick}>Teste de Anemia</dt>
          <dd>
            Esse exame é feito para verificar se o candidato à doação possui
            nível de hemoglobina "dentro dos parâmetros de normalidade". Caso
            esteja abaixo ou acima dos valores normais, o candidato é orientado
            a procurar o serviço de saúde. Pessoas com anemia não podem doar.
          </dd>
          <dt onClick={handleClick}>Sinais Vitais e peso</dt>
          <dd>
            São verificados o batimento cardíaco, pressão arterial, peso e
            temperatura do candidato.
          </dd>
          <dt onClick={handleClick}>Triagem Clínica</dt>
          <dd>
            O candidato responde a uma entrevista confidencial, com o objetivo
            de avaliar se a doação pode trazer riscos para ele ou para o
            receptor. É fundamental responder corretamente e honestamente às
            perguntas.
          </dd>
          <dt onClick={handleClick}>Voto de autoexclusão</dt>
          <dd>
            O doador faz uma opção confidencial respondendo SIM ou NÃO à
            seguinte pergunta: "Você apresenta situação de risco para doenças
            sexualmente transmissíveis", independentemente da resposta, o sangue
            será coletado, e todos os testes serão realizados. Porém, se a
            resposta for SIM, independentemente do resultado desses exames, a
            bolsa será descartada.
          </dd>
          <dt onClick={handleClick}>Coleta</dt>
          <dd>
            É passada uma solução antisséptica no local onde será feita a
            punção. A coleta de sangue é totalmente segura, sendo utilizada uma
            agulha estéril, de uso único e descartável, para coletar cerca de
            450ml de sangue e amostras para a realização de exames obrigatórios
            por lei.
          </dd>
          <dt onClick={handleClick}>Lanche</dt>
          <dd>
            Após a doação, o doador recebe um lanche e um suco, que deverão ser
            consumidos na Cantina do posto de coleta.
          </dd>
        </dl>
      </div>
    </section>
  );
};

export default OndeDoar;
