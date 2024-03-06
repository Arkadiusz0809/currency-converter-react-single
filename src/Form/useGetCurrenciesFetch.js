export const getCurrenciesFetch = async () => {
    const response = await fetch(
        "https://api.currencyapi.com/v3/latest?apikey=cur_live_3IA2V15S6LjGwMwzqJEZntZyBmdFmVI5T7sdbk6h&base_currency=PLN"
    );

    if (!response.ok) {
        return response.statusText;
    }

    return await response.json();
};