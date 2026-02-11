import { CURRENCIES, formatMoney } from "./utils.js";

export function initCurrencySelects(baseSelect, targetSelect, defaultBase, defaultTarget) {
  const makeOption = (code) => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = code;
    return opt;
  };

  CURRENCIES.forEach((c) => {
    baseSelect.appendChild(makeOption(c));
    targetSelect.appendChild(makeOption(c));
  });

  baseSelect.value = defaultBase;
  targetSelect.value = defaultTarget;
}

function setError(el, msg) {
  if (!el) return;
  if (!msg) {
    el.textContent = "";
    el.classList.add("hidden");
  } else {
    el.textContent = msg;
    el.classList.remove("hidden");
  }
}

export function render(state, els) {
  const {
    amount, base, target, status,
    rate, result, date, error,
    errors
  } = state;

  // errores inputs
  setError(els.errAmount, errors?.amount);
  setError(els.errBase, errors?.base);
  setError(els.errTarget, errors?.target);

  // botones
  const hasErrors = errors && Object.keys(errors).length > 0;
  els.btnConvert.disabled = status === "loading" || hasErrors;
  els.btnSwap.disabled = status === "loading" || hasErrors;

  // status
  els.resultBox.classList.add("hidden");
  if (status === "idle") {
    els.statusText.textContent = "Completa los campos y presiona Convertir.";
  }

  if (status === "loading") {
    els.statusText.textContent = "Consultando tipo de cambio...";
  }

  if (status === "error") {
    els.statusText.textContent = error || "Ocurrió un error. Intenta nuevamente.";
  }

  if (status === "success") {
    els.statusText.textContent = "Conversión lista ✅";
    els.resultBox.classList.remove("hidden");
    els.rateText.textContent = `1 ${base} = ${formatMoney(rate, 4)} ${target}`;
    els.resultText.textContent = `${formatMoney(amount, 2)} ${base} → ${formatMoney(result, 2)} ${target}`;
    els.dateText.textContent = date ? `Fecha de tasa: ${date}` : "";
  }
}
