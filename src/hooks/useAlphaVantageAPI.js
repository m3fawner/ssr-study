import { useContext, useMemo } from 'react';
import { context } from './useGlobalState';

const useAlphaVantageAPI = () => {
  const { alphaVantageAPIKey } = useContext(context) ?? {};
  return useMemo(() => ({
    getData: async (symbol) => {
      await fetch(`api/alphaVantage/${symbol}?apiKey=${alphaVantageAPIKey}`);
    },
  }), [alphaVantageAPIKey]);
};
export default useAlphaVantageAPI;
