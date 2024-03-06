import { useEffect, useState } from 'react';
import { GetCurrenciesFetch } from "./useGetCurrenciesFetch";

export const useCurrencies = () => {
    const [currencyApi, setCurrencyApi] = useState({
        state: "loading",
        rates: null,
        date: null,
    });

    useEffect(() => {
        const response = GetCurrenciesFetch.response
        const fetchCurrency = async () => {
            try {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
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
