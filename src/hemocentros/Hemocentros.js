import React from "react";
import styles from "./Hemocentros.module.css";
import bg from "../assets/bg2.jpg";
import HemocentroCard from "./HemocentroCard";

const Hemocentros = () => {
  const [data, setData] = React.useState([]);
  const [hemocentros, setHemocentros] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/joseiedo/hemocentros-json/main/hemocentros-db.json"
    )
      .then((r) => r.json())
      .then((r) => {
        setData(r);
        setHemocentros(r);
        setLoading(false);
      });
  }, []);

  function handleHemocentros({ target }) {
    const opcaoEscolhida = target.value;

    setLoading(true);
    if (opcaoEscolhida.toLowerCase() === "todos") {
      setHemocentros(data);
    } else {
      const hemocentrosBuscados = data.filter((hemocentro) => {
        return hemocentro.estado.toLowerCase() === opcaoEscolhida.toLowerCase();
      });

      setHemocentros(hemocentrosBuscados);
    }
    setLoading(false);
  }

  return (
    <section className={styles.bg}>
      <main className={styles.hero}>
        <img src={bg} alt="" />
        <div className={styles.content}>
          <h1>Buscar Hemocentros</h1>
          <p>Selecione o seu estado no campo de opções abaixo.</p>
          <select
            className={styles.estados}
            defaultValue="todos"
            onChange={handleHemocentros}
          >
            <option value="todos">Mostrar todos</option>
            <option value="Acre">Acre</option>
            <option value="Alagoas">Alagoas</option>
            <option value="Amapá">Amapá</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Ceará">Ceará</option>
            <option value="Brasília">Brasília</option>
            <option value="Espírito Santo">Espírito Santo</option>
            <option value="Goiás">Goiás</option>
            <option value="Maranhão">Maranhão</option>
            <option value="Mato grosso">Mato grosso</option>
            <option value="Mato grosso do sul">Mato grosso do sul</option>
            <option value="Minas gerais">Minas gerais</option>
            <option value="Pará">Pará</option>
            <option value="Paraíba">Paraíba</option>
            <option value="Paraná">Paraná</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Rio de janeiro">Rio de janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio grande do sul">Rio grande do sul</option>
            <option value="Rondônia">Rondônia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa catarina">Santa catarina</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Tocantins">Tocantins</option>
          </select>
        </div>
        {loading ? (
          <p className={styles.loading}>Carregando...</p>
        ) : (
          <HemocentroCard data={hemocentros} />
        )}
      </main>
    </section>
  );
};

export default Hemocentros;
