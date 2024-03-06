import { useEffect, useState } from 'react';
import { GetCurrenciesFetch } from "./useGetCurrenciesFetch";

export const useCurrencies = () => {
    const [currencyApi, setCurrencyApi] = useState({
        state: "loading",
        rates: null,
        date: null,
    });

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                // const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_3IA2V15S6LjGwMwzqJEZntZyBmdFmVI5T7sdbk6h&base_currency=PLN")

                const { data, meta } = await GetCurrenciesFetch();

                setCurrencyApi({
                    state: "success",
                    rates: data,
                    date: meta.last_updated_at,
                });
            } catch {
                setCurrencyApi({
                    state: "error",
                });
            }
        };
        setTimeout(fetchCurrency, 2000);
    }, []);

    return currencyApi;
};
