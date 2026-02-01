document.addEventListener("DOMContentLoaded", () => {
  const saleInput = document.getElementById("sale");
  const taxInput = document.getElementById("tax");
  const totalInput = document.getElementById("total");
  const errorMessage = document.getElementById("error_message");

  const calculateBtn = document.getElementById("calculate_btn");
  const clearBtn = document.getElementById("clear_btn");

  const formatMoney = (value) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(value);

  const processEntries = (evt) => {
    // Prevent accidental form submission if this ever ends up inside a <form>
    if (evt) evt.preventDefault();

    const sale = parseFloat(String(saleInput.value).trim());
    const taxPercent = parseFloat(String(taxInput.value).trim());

    errorMessage.textContent = "";
    totalInput.value = "";

    // Validate inputs
    if (Number.isNaN(sale) || Number.isNaN(taxPercent)) {
      errorMessage.textContent = "Please enter numbers for both Sales Amount and Tax Percent.";
      return;
    }
    if (sale < 0 || taxPercent < 0) {
      errorMessage.textContent = "Please enter values greater than or equal to zero.";
      return;
    }

    const taxAmount = sale * (taxPercent / 100);
    const total = sale + taxAmount;

    // Put a currency-formatted value into the disabled text field
    totalInput.value = formatMoney(total);
  };

  const clearEntries = (evt) => {
    if (evt) evt.preventDefault();

    saleInput.value = "";
    taxInput.value = "";
    totalInput.value = "";
    errorMessage.textContent = "";
    saleInput.focus();
  };

  calculateBtn.addEventListener("click", processEntries);
  clearBtn.addEventListener("click", clearEntries);

  // Optional UX: hit Enter in either field to calculate
  [saleInput, taxInput].forEach((el) => {
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter") processEntries(e);
      if (e.key === "Escape") clearEntries(e);
    });
  });
});