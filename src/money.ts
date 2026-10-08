export type Line = { amount: number };

// ISO 4217 currency decimal places mapping
// https://en.wikipedia.org/wiki/ISO_4217
const CURRENCY_DECIMALS: Record<string, number> = {
  // 0 decimal places
  BIF: 0, CLF: 0, DJF: 0, GNF: 0, JPY: 0, KMF: 0, KRW: 0, MGA: 0, PYG: 0, RWF: 0, UGX: 0, VND: 0, VUV: 0, XAF: 0, XOF: 0, XPF: 0,
  // 3 decimal places
  BHD: 3, IQD: 3, JOD: 3, KWD: 3, LYD: 3, MRO: 3, OMR: 3, TND: 3,
};

function getCurrencyDecimals(currency: string): number {
  return CURRENCY_DECIMALS[currency] ?? 2;
}

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  const decimals = getCurrencyDecimals(currency);
  return sum.toFixed(decimals);
}
