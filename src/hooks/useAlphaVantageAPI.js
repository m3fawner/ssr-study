import { useMemo } from 'react';

const useAlphaVantageAPI = () => useMemo(() => ({
  getPrice: async (symbol) => {
    const response = await fetch(`api/alphaVantage/${symbol}`);
    const { data: { price } } = await response.json();
    return parseFloat(price);
  },
}), []);
export default useAlphaVantageAPI;
