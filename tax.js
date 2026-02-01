const error_message = document.getElementById("error_message");

const processEntries = () => {
  const salesAmountInput = document.getElementById("sales_amount");
  const taxPercentInput = document.getElementById("tax_percent");
  const totalAmountInput = document.getElementById("total_amount");

  const salesAmount = parseFloat(salesAmountInput.value.trim());
  const taxPercent = parseFloat(taxPercentInput.value.trim());
  error_message.textContent = "";

  // Validate inputs: both must be numbers greater than or equal to zero (tax can be zero)
  if (
    !isNaN(salesAmount) &&
    salesAmount >= 0 &&
    !isNaN(taxPercent) &&
    taxPercent >= 0
  ) {
    // Calculate tax amount
    const taxAmount = salesAmount * (taxPercent / 100);
    // Calculate total amount including tax
    const total = (salesAmount + taxAmount).toFixed(2);
    // Display total amount in the disabled input field
    totalAmountInput.value = total;
  } else {
    error_message.textContent =
      "Please enter valid numbers greater than or equal to zero for both fields.";
  }
};

const clearEntries = () => {
  document.getElementById("sales_amount").value = "";
  document.getElementById("tax_percent").value = "";
  document.getElementById("total_amount").value = "";
  error_message.textContent = "";
  document.getElementById("sales_amount").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("calculate_btn")
    .addEventListener("click", processEntries);
  document.getElementById("clear_btn").addEventListener("click", clearEntries);
});
