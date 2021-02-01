export const getDollar = (amount, wholeDollar = false) => {
  const base = amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionalDigits: 2 });
  return wholeDollar ? base.replace(/\.\d+/, '') : base;
};
export const getFloatToPrecision = (amount, digits) => amount.toString().match(new RegExp(`(\\d+(\\.\\d{0,${digits}})?)`))?.[1];
export const getPercentString = (amount) => `${(amount * 100).toLocaleString('en-US', { maximumFractionDigits: 2 })}%`;
