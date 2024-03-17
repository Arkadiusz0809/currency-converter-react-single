import Container from "./Container";
import Form from "./Form";
import { Clock } from "./Clock";

function App() {

  return (
    <Container>
      <Clock />
      <Form
        welcomeHeader="Welcome, and wish all the best!"
        amountHeader="Enter the amount (zł)"
        currencyHeader="Select the currency:"
        buttonHeader="Calculate !"
      />
    </Container>
  );
}

export default App;
