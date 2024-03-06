import axios from "axios";

export const GetCurrenciesAxios = async () => {
    const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_3IA2V15S6LjGwMwzqJEZntZyBmdFmVI5T7sdbk6h&base_currency=PLN");
    
    const {data} = await response.data;
    const {meta} = await response.meta;

    return {data, meta, response};
};