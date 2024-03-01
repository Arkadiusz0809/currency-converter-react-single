import { useState } from "react";
import Result from "../Result";
import {Header, LabelText, Field, SetButton, Button, Info, Container, Label } from "./styled.js";

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
    <form onSubmit={onFormSubmit} >
      <Header>{welcomeHeader}</Header>
      <Container>
        <p>
          <Label >
            <LabelText>
              {amountHeader} :
            </LabelText>
            <Field
              placeholder="Wpisz kwotę w zł"
              type="number"
              min="0.01"
              step="0.01"
              required
              value={newAmount}
              onChange={({ target }) => setNewAmount(target.value)}
            />
          </Label>
        </p>
        <p>
          <Label>
            <LabelText>
              {currencyHeader}
            </LabelText>
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
          </Label>
        </p>
      </Container>
      <SetButton>
        <Button>{buttonHeader}</Button>
      </SetButton>
      <Result
        result={result}
      />
      <Info>
        Kursy pochodzą ze strony nbp.pl z dnia 15.02.2024
      </Info>
    </form>
  )
}

export default Form;