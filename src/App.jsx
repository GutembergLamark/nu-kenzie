import { useState } from "react";
import { ToastContainer } from "react-toastify";

import "./reset.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

import Index from "./components/Index";
import Preload from "./components/Preload";
import HomePage from "./components/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [completeList, setCompleteList] = useState([]);
  const [click, setClick] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      {click ? (
        loading ? (
          <HomePage
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setClick={setClick}
            setLoading={setLoading}
            completeList={completeList}
            setCompleteList={setCompleteList}
          />
        ) : (
          <Preload setLoading={setLoading} />
        )
      ) : (
        <Index setClick={setClick} />
      )}

      <ToastContainer />
    </div>
  );
}

export default App;
