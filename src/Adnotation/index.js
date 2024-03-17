import { useAdditionalDate } from "./useAdditionalDate.js"

export const Adnotation = (ratesData) => {
    const formattedRatesDay = useAdditionalDate(ratesData)

    return (
        <>
            Exchange rates are charged from the European Central Bank<br /> Current as of the date <strong> {formattedRatesDay}</strong>
        </>

    )
};

export default Adnotation;