import { useState } from "react";
import Result from "../Result";
import { Header, LabelText, Field, SetButton, Button, Info, Container, Label, Loading, Failure, } from "./styled.js";
import { useCurrencies } from "./useCurrencies.js";
import Adnotation from "../Adnotation/index.js";

const Form = ({ welcomeHeader, amountHeader, currencyHeader, buttonHeader }) => {

  const [newAmount, setNewAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [result, setResult] = useState();

  const { rates, state, date } = useCurrencies();

  const calculateResult = (selectedCurrency, newAmount) => {
    const rate = rates[selectedCurrency].value;

    setResult({
      sourceAmount: +newAmount,
      targetAmount: newAmount * rate,
      selectedCurrency,
      date: new Date(date).toLocaleDateString("pl-PL"),
    });
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(selectedCurrency, newAmount);
  }

  return (
    <form onSubmit={onFormSubmit} >
      <Header>{welcomeHeader}</Header>
      {state === "loading"
        ? (
          <Loading>
            Sekundka <br />
            Ładuję kursy walut z  Europejskiego Banku Centralnego...
          </Loading>
        )
        : (
          state === "error" ? (
            <Failure>
              Hmmm...coś poszło nie tak. Sprawdź połączenie z internetem i wróć później
            </Failure>
          ) : (
            <>
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
                      {Object.keys(rates).map(((selectedCurrency) => (
                        <option
                          key={selectedCurrency}
                          value={selectedCurrency}
                        >
                          {selectedCurrency}
                        </option>
                      )))}
                    </select>
                  </Label>
                </p>
              </Container>
              <SetButton>
                <Button>{buttonHeader}</Button>
              </SetButton>
            </>
          )
        )
      }
      <Result
        result={result}
      />
      <Info>
        <Adnotation />
      </Info>
    </form>
  )
}

export default Form;