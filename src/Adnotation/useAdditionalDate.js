import { useEffect, useState } from "react";

const formatDate = {
	day: "numeric",
	month: "numeric",
	year: "numeric",
};

export const useAdditionalDate = (ratesData) => {
	const [ratesDay, setRatesDay] = useState(new Date());

	useEffect(() => {
		if (ratesData.state === "success") {
			setRatesDay(new Date(ratesData.date));
		}
	}, [ratesData]);

	const formattedRatesDay = ratesDay.toLocaleDateString(undefined, formatDate);

	return formattedRatesDay;
};