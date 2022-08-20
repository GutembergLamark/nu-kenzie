import { useState } from "react";
import Card from "../Card";

import "./style.css";

function List({
  listTransactions,
  completeList,
  setCompleteList,
  setListTransactions,
}) {
  const [activeAll, setActiveAll] = useState(false);
  const [activeEntry, setActiveEntry] = useState(false);
  const [activeExit, setActiveExit] = useState(false);

  function all() {
    setCompleteList(listTransactions);
    setActiveAll(true);
    setActiveEntry(false);
    setActiveExit(false);
  }

  function entry() {
    const filterEntry = listTransactions.filter(
      (element) => element.type === "Entrada"
    );
    setCompleteList(filterEntry);
    setActiveAll(false);
    setActiveEntry(true);
    setActiveExit(false);
  }
  function exit() {
    const filterExit = listTransactions.filter(
      (element) => element.type === "Saida"
    );
    setCompleteList(filterExit);
    setActiveAll(false);
    setActiveEntry(false);
    setActiveExit(true);
  }

  return (
    <aside className="financialSummary">
      <section className="financialSummary__constainerHeader">
        <h1 className="containerHeader__title">Resumo Financeiro</h1>
        <ul className="containerHeader__list">
          <nav className="list__navigation">
            <a
              href="##"
              className={
                activeAll
                  ? "navigation__all button__navigation active"
                  : "navigation__all button__navigation"
              }
              onClick={all}
            >
              Todos
            </a>
            <a
              href="##"
              className={
                activeEntry
                  ? "naivigation__entry button__navigation active"
                  : "naivigation__entry button__navigation"
              }
              onClick={entry}
            >
              Entradas
            </a>
            <a
              href="##"
              className={
                activeExit
                  ? "navigation__exit button__navigation active"
                  : "navigation__exit button__navigation"
              }
              onClick={exit}
            >
              Despesas
            </a>
          </nav>
        </ul>
      </section>
      <ul className="financialSummary__listTransactions">
        {completeList.length > 0 ? (
          completeList.map((transaction, index) => (
            <Card
              className="cardList"
              listTransactions={listTransactions}
              completeList={completeList}
              transaction={transaction}
              setCompleteList={setCompleteList}
              setListTransactions={setListTransactions}
              key={index}
            />
          ))
        ) : (
          <>
            <h2 className="listTransactions__title--noTransactions">
              Você ainda não possui nenhum lançamento
            </h2>
            <li className="listTransactions--noTransactions no1">
              <img src={require("../../assets/NoCard.png")} alt="" />
            </li>
            <li className="listTransactions--noTransactions no2">
              <img src={require("../../assets/NoCard.png")} alt="" />
            </li>
            <li className="listTransactions--noTransactions no3">
              <img src={require("../../assets/NoCard.png")} alt="" />
            </li>
          </>
        )}
      </ul>
    </aside>
  );
}

export default List;
