"use strict";

$(document).ready(() => {
    // Regular Expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /**
     * Handles Form Validation
     */
    const processEntries = () => {
        let isValid = true;

        // 1. Get values and trim whitespace from text inputs
        const email = $("#email_address").val().trim();
        const phone = $("#phone").val().trim();
        const country = $("#country").val();
        const terms = $("#terms").is(":checked");
        
        // Get the value of the selected radio button
        const contactMethod = $("input[name='contact']:checked").val();

        // 2. Validate Email
        if (email === "") {
            $("#email_error").text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email_error").text("Please enter a valid email address.");
            isValid = false;
        } else {
            $("#email_error").text("");
        }

        // 3. Validate Phone
        if (phone === "") {
            $("#phone_error").text("This field is required.");
            isValid = false;
        } else {
            $("#phone_error").text("");
        }

        // 4. Validate Country
        if (country === "") {
            $("#country_error").text("Please select a country.");
            isValid = false;
        } else {
            $("#country_error").text("");
        }

        // 5. Validate Contact Method
        // Because 'Text' is checked by default in HTML, this usually stays valid.
        if (contactMethod === undefined) {
            $("#contact_error").text("Please select a contact method.");
            isValid = false;
        } else {
            $("#contact_error").text("");
        }

        // 6. Validate Terms
        if (!terms) {
            $("#terms_error").text("This box must be checked.");
            isValid = false;
        } else {
            $("#terms_error").text("");
        }

        // 7. Submit the form if all fields pass
        if (isValid) {
            $("#registration_form").submit();
        }
    };

    /**
     * Resets the form and clears error messages
     */
    const resetForm = () => {
        // Resets text, dropdowns, and returns radio buttons to HTML defaults
        $("#registration_form")[0].reset();
        
        // Grouped selector clears all error messages at once
        $("#email_error, #phone_error, #country_error, #contact_error, #terms_error").text("");

        // Move focus back to the first field
        $("#email_address").focus();
    };

    // --- Event Handlers ---
    $("#register").on("click", processEntries);
    $("#reset_form").on("click", resetForm);

    // Initial focus on load
    $("#email_address").focus();
});