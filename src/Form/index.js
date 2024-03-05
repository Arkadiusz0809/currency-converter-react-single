import { useState } from "react";
import Result from "../Result";
import { Header, LabelText, Field, SetButton, Button, Info, Container, Label, Loading, Failure, } from "./styled.js";
import { useCurrencies } from "./useCurrencies.js";

const Form = ({ welcomeHeader, amountHeader, currencyHeader, buttonHeader }) => {

  const [newAmount, setNewAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [result, setResult] = useState();

  const currenciesApi = useCurrencies();

  const calculateResult = (selectedCurrency, newAmount) => {
    const rate = currenciesApi.value[selectedCurrency];

    setResult({
      sourceAmount: +newAmount,
      targetAmount: newAmount / rate.value,
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
      {currenciesApi.state === "loading"
        ? (
          <Loading>
            Sekundka <br />
            Ładuję kursy walut z  Europejskiego Banku Centralnego...
          </Loading>
        )
        : (
          currenciesApi.state === "error" ? (
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
                        {Object.keys(currenciesApi.value).map(((selectedCurrency) => (
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
        Kursy pochodzą ze strony nbp.pl z dnia 15.02.2024
      </Info>
    </form>
  )
}

export default Form;