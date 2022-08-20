import "./style.css";

function TotalMoney({ completeList }) {
  function cash() {
    const totalCash = completeList.reduce((acc, cur) => {
      return Number(acc) + Number(cur.value);
    }, 0);

    return totalCash.toFixed(2).replace(".", ",");
  }

  return (
    <section className="containerTotal">
      <div className="containerTotal__value">
        <p>Valor Total:</p>
        <span>$ {cash()}</span>
      </div>
      <span className="containerTotal__message">
        O valor se refere ao saldo
      </span>
    </section>
  );
}

export default TotalMoney;
