import Form from "../Form";
import Header from "../Header";
import List from "../List";
import TotalMoney from "../TotalMoney";

import "./style.css";

function HomePage({
  listTransactions,
  setListTransactions,
  setClick,
  setLoading,
  completeList,
  setCompleteList,
}) {
  return (
    <>
      <Header setClick={setClick} setLoading={setLoading} />
      <main className="containerHome">
        <section className="containerAddTransactions">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            completeList={completeList}
            setCompleteList={setCompleteList}
          />
          <TotalMoney completeList={completeList} />
        </section>
        <List
          listTransactions={listTransactions}
          completeList={completeList}
          setCompleteList={setCompleteList}
          setListTransactions={setListTransactions}
        />
      </main>
    </>
  );
}

export default HomePage;
