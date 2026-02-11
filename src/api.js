const BASE_URL = "https://api.frankfurter.dev/v1";

export async function getLatestRate(base, target) {
  const url = `${BASE_URL}/latest?base=${encodeURIComponent(base)}&symbols=${encodeURIComponent(target)}`;

  let res;
  try {
    res = await fetch(url);
  } catch {
    throw new Error("No hay conexión o la API no responde.");
  }

  if (!res.ok) {
    throw new Error(`Error de API (${res.status}). Intenta nuevamente.`);
  }

  const data = await res.json();
  const rate = data?.rates?.[target];

  if (!rate) {
    throw new Error("Sin datos para la moneda seleccionada.");
  }

  return { rate, date: data.date };
}
