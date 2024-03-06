
export const GetCurrenciesFetch = async () => {
    try {
        const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_3IA2V15S6LjGwMwzqJEZntZyBmdFmVI5T7sdbk6h&base_currency=PLN");

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        return { data };

    }catch (error) {
        console.error('Błąd podczas pobierania kursów walut:', error);
    }

};