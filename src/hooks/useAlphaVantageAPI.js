import { useContext, useMemo } from 'react';
import { context } from './useGlobalState';

const useAlphaVantageAPI = () => {
  const { alphaVantageAPIKey } = useContext(context) ?? {};
  return useMemo(() => ({
    getPrice: async (symbol) => {
      const response = await fetch(`api/alphaVantage/${symbol}?apiKey=${alphaVantageAPIKey}`);
      const { data: { price } } = await response.json();
      return parseFloat(price);
    },
  }), [alphaVantageAPIKey]);
};
export default useAlphaVantageAPI;
