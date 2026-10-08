// 1. Find the elements we need
const form = document.getElementById("ask-form");
const questionBox = document.getElementById("question");
const charCount = document.getElementById("char-count");
const messageBox = document.getElementById("form-message");
const submitButton = form.querySelector(".form-submit");


// 2. Live character counter
questionBox.addEventListener("input", function () {
    charCount.textContent = questionBox.value.length + " / 1000";
});


// 3. A helper that shows a message to the user
function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = "form-message " + type;
    messageBox.hidden = false;
}


// 4. Send the form without leaving the page
form.addEventListener("submit", async function (event) {

    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    try {
        const formData = new FormData(form);
        const data = JSON.stringify(Object.fromEntries(formData));

        const response = await fetch(form.action, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: data
        });

        const result = await response.json();

        if (result.success) {
            showMessage(
                "Thank you. Your question has been sent. You were brave to ask.",
                "success"
            );
            form.reset();
            charCount.textContent = "0 / 1000";
        } else {
            showMessage(
                "Sorry, something went wrong and your question was not sent. Please try again.",
                "error"
            );
        }

    } catch (error) {
        showMessage(
            "We could not connect. Please check your internet and try again.",
            "error"
        );
    }

    submitButton.disabled = false;
    submitButton.textContent = "Send My Question";
});