export type Line = { amount: number };

// ISO 4217 minor unit (number of decimal places) per currency.
// Only the currencies that deviate from the default of 2 are listed.
const CURRENCY_DECIMALS: Record<string, number> = {
  // 0 decimals
  BIF: 0,
  CLP: 0,
  DJF: 0,
  GNF: 0,
  ISK: 0,
  JPY: 0,
  KMF: 0,
  KRW: 0,
  PYG: 0,
  RWF: 0,
  UGX: 0,
  UYI: 0,
  VND: 0,
  VUV: 0,
  XAF: 0,
  XOF: 0,
  XPF: 0,
  // 3 decimals
  BHD: 3,
  IQD: 3,
  JOD: 3,
  KWD: 3,
  LYD: 3,
  OMR: 3,
  TND: 3,
  // 4 decimals
  CLF: 4,
};

function decimalsForCurrency(currency: string): number {
  return CURRENCY_DECIMALS[currency] ?? 2;
}

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  return sum.toFixed(decimalsForCurrency(currency));
}
