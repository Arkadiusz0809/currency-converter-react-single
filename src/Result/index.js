import {StyledResult} from "./styled.js";

const Result = ({ result }) => {

  return (
    <StyledResult>
      {result && (
        <>
          {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;

          <strong>
            {result.targetAmount.toFixed(2)}&nbsp;{result.selectedCurrency}
          </strong>
        </>
      )}
    </StyledResult>
  )
}

export default Result;