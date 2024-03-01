import Container from "./Container";
import Form from "./Form";
import { Clock } from "./Clock";

function App() {

  return (
    <Container>
      <Clock />
      <Form
        welcomeHeader="Welcome, and wish all the best!"
        amountHeader="Podaj kwotę (zł)"
        currencyHeader="Wybierz walutę:"
        buttonHeader="Oblicz !"
      />
    </Container>
  );
}

export default App;
