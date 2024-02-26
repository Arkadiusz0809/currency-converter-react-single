import { useState } from "react";
import "./style.css";
import Result from "../Result";
import { Clock } from "../Clock";

const currencies = [
  { id: "EUR", value: 4.3 },
  { id: "USD", value: 3.9 },
  { id: "GBP", value: 5.2 },
];

const Form = ({ welcomeHeader, amountHeader, currencyHeader, buttonHeader }) => {

  const [newAmount, setNewAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [result, setResult] = useState();

  const calculateResult = () => {

    const rate = currencies.find(({ id }) => id === selectedCurrency).value;

    setResult({
      sourceAmount: +newAmount,
      targetAmount: newAmount / rate,
      selectedCurrency,
    });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(selectedCurrency, newAmount);
  }

  return (
    <form className="form" onSubmit={onFormSubmit} >
      <Clock />
      <h1 className="form__header">{welcomeHeader}</h1>
      <div className="form__container">
        <p>
          <label className="form__containerLabel">
            <span className="form__labelText">
              {amountHeader} :
            </span>
            <input
              className="form__field"
              placeholder="Wpisz kwotę w zł"
              type="number"
              min="0.01"
              step="0.01"
              required
              value={newAmount}
              onChange={({ target }) => setNewAmount(target.value)}
            />
          </label>
        </p>
        <p >
          <label className="form__containerLabel">
            <span className="form__labelText form__labelText--centered">
              {currencyHeader}
            </span>
            <select
              value={selectedCurrency}
              onChange={({ target }) => setSelectedCurrency(target.value)}
            >
              {currencies.map((selectedCurrency => (
                <option
                  key={selectedCurrency.id}
                  value={selectedCurrency.id}
                >
                  {selectedCurrency.id}
                </option>
              )))}
            </select>
          </label>
        </p>
      </div>
      <p className="form_setButtton">
        <button className="form__button">{buttonHeader}</button>
      </p>
      <Result
        result={result}
      />
      <p className="form_info">
        Kursy pochodzą ze strony nbp.pl z dnia 15.02.2024
      </p>
    </form>
  )
}

export default Form;