import { useMemo } from 'react';
import { AlphaVantageData } from '../../pages/api/alphaVantage/[symbol]';

type AlphaVantageAPI = {
  getPrice: (symbol: string) => Promise<number>
}
const useAlphaVantageAPI = () => useMemo<AlphaVantageAPI>(() => ({
  getPrice: async (symbol) => {
    const response = await fetch(`/api/alphaVantage/${symbol}`);
    const { data: { price } }: AlphaVantageData = await response.json();
    return parseFloat(price);
  },
}), []);
export default useAlphaVantageAPI;
