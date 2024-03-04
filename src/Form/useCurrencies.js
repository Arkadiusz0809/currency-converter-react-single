import { useEffect, useState } from 'react';

export const useCurrencies = () => {
    const [currency, setCurrency] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_3IA2V15S6LjGwMwzqJEZntZyBmdFmVI5T7sdbk6h")

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rates, date } = await response.json();

                setCurrency({
                    state: "success",
                    rates,
                    date,
                });
            } catch {
                setCurrency({
                    state: "error",
                });
            }
        };
        setTimeout(fetchCurrency, 2000);
    }, []);

    return currency;
};
