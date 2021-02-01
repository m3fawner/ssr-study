import alphaVantage from 'alphavantage';

const cache = new Map();
const isValidCacheHit = (symbol) => {
  const hit = cache.get(symbol);
  if (hit) {
    return hit.expiration > new Date().getTime();
  }
  return false;
};
export const getDataFromSymbol = async (symbol) => {
  let data;
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
export default async (req, res) => {
  const {
    query: { symbol },
  } = req;
  const data = await getDataFromSymbol(symbol);
  res.status(200).json(data);
};
