export const getDollar = (amount: number, wholeDollar = false) => {
  const base = amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
  return wholeDollar ? base.replace(/\.\d+/, '') : base;
};
export const getFloatToPrecision = (amount: number, digits: number) => {
  const match = amount.toString().match(new RegExp(`(\\d+(\\.\\d{0,${digits}})?)`));
  return match ? match[1] : amount.toString();
};
export const getPercentString = (amount: number) => `${(amount * 100).toLocaleString('en-US', { maximumFractionDigits: 2 })}%`;
