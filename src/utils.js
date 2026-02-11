export const CURRENCIES = ["USD", "BRL","EUR", "GBP", "JPY", "CAD", "AUD", "CHF", "MXN"];

export function parseAmount(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return null;
  return n;
}

export function validate({ amount, base, target }) {
  const errors = {};

  if (amount === null || amount <= 0) {
    errors.amount = "Ingresa un monto válido mayor a 0.";
  }

  if (!base) {
    errors.base = "Selecciona una moneda base.";
  }

  if (!target) {
    errors.target = "Selecciona una moneda destino.";
  }

  if (base && target && base === target) {
    errors.target = "La moneda destino debe ser distinta a la base.";
  }

  return errors;
}

export function formatMoney(value, decimals = 2) {
  return Number(value).toFixed(decimals);
}
