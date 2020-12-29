export const getDollar = (amount, wholeDollar = false) => {
  const base = amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionalDigits: 2 });
  return wholeDollar ? base.replace(/\.\d+/, '') : base;
};
export const getPercentString = (amount) => `${(amount * 100).toLocaleString('en-US', { maximumFractionDigits: 2 })}%`;
