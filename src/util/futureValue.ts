export const futureValue = (principal: number, rate: number, n = 365, years = 1) => principal * ((1 + rate / n) ** (n * years));
export const timeToFutureValue = (future: number, present: number, rate: number, n = 365) => (Math.log(future / present) / Math.log(1 + rate / n)) / n;
