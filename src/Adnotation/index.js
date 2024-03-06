import { useAdditionalDate } from "./useAdditionalDate.js"

export const Adnotation = (ratesData) => {
    const formattedRatesDay = useAdditionalDate(ratesData)

    return (
        <>
            Kursy walut pobierane są z Europejskiego Banku Centralnego<br /> Aktualne na dzień <strong> {formattedRatesDay}</strong>
        </>

    )
};

export default Adnotation;