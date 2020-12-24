import alphaVantage from 'alphavantage';

export default async (req, res) => {
  const {
    query: { symbol, apiKey },
  } = req;
  const local = alphaVantage({ key: apiKey });
  const data = await local.data.daily_adjusted(symbol);
  const polished = local.util.polish(data);
  res.status(200).json(polished);
};
