import { parseAmount, validate } from "./utils.js";
import { initCurrencySelects, render } from "./ui.js";
import { getLatestRate } from "./api.js";

const els = {
  form: document.getElementById("fxForm"),
  amount: document.getElementById("amount"),
  base: document.getElementById("base"),
  target: document.getElementById("target"),
  btnConvert: document.getElementById("btnConvert"),
  btnSwap: document.getElementById("btnSwap"),
  statusText: document.getElementById("statusText"),
  resultBox: document.getElementById("resultBox"),
  rateText: document.getElementById("rateText"),
  resultText: document.getElementById("resultText"),
  dateText: document.getElementById("dateText"),
  errAmount: document.getElementById("err-amount"),
  errBase: document.getElementById("err-base"),
  errTarget: document.getElementById("err-target"),
};

let state = {
  amount: 1,
  base: "USD",
  target: "EUR",
  status: "idle",
  rate: null,
  result: null,
  date: null,
  error: null,
  errors: {},
};

function setState(patch) {
  state = { ...state, ...patch };
  render(state, els);
}

function readForm() {
  return {
    amount: parseAmount(els.amount.value || state.amount),
    base: els.base.value,
    target: els.target.value,
  };
}

function validateAndUpdate() {
  const draft = readForm();
  const errors = validate(draft);

  setState({
    ...draft,
    errors,
    status: "idle",
    error: null,
    rate: null,
    result: null,
    date: null,
  });

  return { draft, errors };
}

// init
initCurrencySelects(els.base, els.target, state.base, state.target);
els.amount.value = String(state.amount);
validateAndUpdate();

// listeners
["input", "change", "blur"].forEach((evt) => {
  els.amount.addEventListener(evt, validateAndUpdate);
  els.base.addEventListener(evt, validateAndUpdate);
  els.target.addEventListener(evt, validateAndUpdate);
});

els.btnSwap.addEventListener("click", async () => {
  const current = readForm();
  // swap
  els.base.value = current.target;
  els.target.value = current.base;
  // validateAndUpdate();

  const {draft, errors} = validateAndUpdate();
  if (Object.keys(errors).length > 0) return;

  setState({ status: "loading", error: null });

  try {
    const { rate, date } = await getLatestRate(draft.base, draft.target);
    const result = draft.amount * rate;

    setState({
      status: "success",
      rate,
      result,
      date,
    });

  } catch (err) {
    setState({
      status: "error",
      error: err.message || "Ocurrió un error. Intenta nuevamente."
    });
  }
});

// submit 
els.form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const { draft,errors } = validateAndUpdate();
  if (Object.keys(errors).length > 0) return;

  setState({
    status: "loading", error: null
  })

  try {
    const {rate, date} = await getLatestRate(draft.base, draft.target);
    const result = draft.amount * rate;



  setState({
    status: "success",
   rate, 
   result,
    date,
  });
} catch (err) {
  setState({
    status: "error",
    error: err.message || "Ocurrió un error. Intenta nuevamente."
  });
}
});
