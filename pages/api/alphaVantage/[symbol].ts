import alphaVantage from 'alphavantage';
import { NextApiRequest, NextApiResponse } from 'next';

const cache = new Map();
const isValidCacheHit = (symbol: string) => {
  const hit = cache.get(symbol);
  if (hit) {
    return hit.expiration > new Date().getTime();
  }
  return false;
};

export type AlphaVantageData = {
  data: {
    price: string
  }
}

export const getDataFromSymbol = async (symbol: (undefined|string|string[])): Promise<AlphaVantageData|null> => {
  let data;
  if (typeof symbol === 'undefined' || Array.isArray(symbol)) {
    return null;
  }
  if (isValidCacheHit(symbol)) {
    data = cache.get(symbol).data;
  } else {
    const local = alphaVantage({ key: process.env.ALPHAVANTAGE_KEY });
    const unpolished = await local.data.quote(symbol);
    data = local.util.polish(unpolished);
    cache.set(symbol, {
      data,
      expiration: new Date().getTime() + 360000,
    });
  }
  return data;
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { symbol },
  } = req;
  const data = await getDataFromSymbol(symbol);
  res.status(200).json(data);
};
