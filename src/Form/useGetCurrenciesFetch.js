export const GetCurrenciesFetch = async () => {
        const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_3IA2V15S6LjGwMwzqJEZntZyBmdFmVI5T7sdbk6h&base_currency=PLN");

        const data = await response.json();
        const meta = await response.json();

        return { data, meta };
};