export const futureValue = (principal, rate, n = 365, years = 1) => principal * ((1 + rate / n) ** (n * years));
export const timeToFutureValue = (future, present, rate, n = 365) => (Math.log(future / present) / Math.log(1 + rate / n)) / n;
