import Container from "./Container";
import Form from "./Form";

function App() {

  return (
    <Container>
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
