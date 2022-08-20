import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

import "./style.css";

function Card({
  listTransactions,
  transaction,
  setListTransactions,
  setCompleteList,
}) {
  function deleteTransaction() {
    const deleted = listTransactions.filter(
      (element) => element !== transaction
    );

    toast.success("Transação deletada com sucesso");

    setListTransactions(deleted);
    setCompleteList(deleted);
  }

  return (
    <>
      {transaction.type === "Entrada" ? (
        <li className="cardEntrada card" key={"entrada"}>
          <section className="card__container">
            <h2 className="card__title">{transaction.description}</h2>
            <span className="card__value">
              R$ {Number(transaction.value).toFixed(2).replace(".", ",")}
            </span>
            <FaTrash className="card__delete" onClick={deleteTransaction} />
          </section>
          <span className="card__type">{transaction.type}</span>
        </li>
      ) : (
        <li className="cardSaida card" key={"saida"}>
          <section className="card__container">
            <h2 className="card__title">{transaction.description}</h2>
            <span className="card__value">
              R$ {Number(transaction.value).toFixed(2).replace(".", ",")}
            </span>
            <FaTrash className="card__delete" onClick={deleteTransaction} />
          </section>
          <span className="card__type">{transaction.type}</span>
        </li>
      )}
    </>
  );
}

export default Card;
