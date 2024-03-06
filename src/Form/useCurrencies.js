import { useEffect, useState } from 'react';

export const useCurrencies = () => {
    const [currencyApi, setCurrencyApi] = useState({
        state: "loading",
        rates: null,
        date: null,
    });

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_3IA2V15S6LjGwMwzqJEZntZyBmdFmVI5T7sdbk6h&base_currency=PLN")

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { data, meta } = await response.json();

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
