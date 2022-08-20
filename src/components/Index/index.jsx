import "./style.css";

function Index({ setClick }) {
  return (
    <main className="containerIndex">
      <div className="containerIndex__info">
        <img src={require("../../assets/NuKenzieLight.png")} alt="" />
        <h1 className="info__description">
          Centralize o controle das suas finanças
        </h1>
        <p className="info__complement">de forma rápida e segura</p>
        <button className="info__button" onClick={() => setClick(true)}>
          Iniciar
        </button>
      </div>
      <figure className="containerImage">
        <img
          className="containerImage__background"
          src={require("../../assets/image.png")}
          alt=""
        />
      </figure>
    </main>
  );
}

export default Index;
