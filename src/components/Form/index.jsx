import { useState } from "react";
import { toast } from "react-toastify";

import "./style.css";

function Form({
  listTransactions,
  setListTransactions,
  completeList,
  setCompleteList,
}) {
  const [description, setDecription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");

  function handleClick(ev) {
    ev.preventDefault();

    const data = {
      description,
      value,
      type,
    };

    setListTransactions([...listTransactions, data]);
    setCompleteList([...completeList, data]);

    toast.success("Transação criada com sucesso");

    setDecription("");
    setValue("");
    setType("Entrada");
  }

  return (
    <form className="form" onSubmit={handleClick}>
      <div className="form__containerDescription">
        <h3 className="containerDescription__title">Descrição</h3>
        <input
          className="containerDescription__input"
          type="text"
          placeholder="Digite aqui sua descrição"
          required
          value={description}
          onChange={(ev) => setDecription(ev.target.value)}
        />
        <span className="containerDescription__span">Ex: Compra de roupas</span>
      </div>
      <section className="form_containerValueType">
        <div className="containerValueType__value">
          <h3 className="containerValueType__value__title">Valor</h3>
          <div className="containerValueType__value__inputDolar">
            <input
              className="containerValueType__value__input"
              type="number"
              placeholder="1"
              required
              value={value}
              onChange={(ev) => setValue(ev.target.value)}
            />
            <span>R$</span>
          </div>
        </div>
        <div className="containerValueType__type">
          <h3 className="containerValueType__type__title">Tipo de valor</h3>
          <select
            className="containerValueType__type__select"
            name="tipoValor"
            id="valueType"
            value={type}
            onChange={(ev) => setType(ev.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saida</option>
          </select>
        </div>
      </section>
      <button className="form__button" type="submit">
        Inserir valor
      </button>
    </form>
  );
}

export default Form;
