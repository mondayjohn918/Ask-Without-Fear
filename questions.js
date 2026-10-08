// 1. Find the elements we need
const filterButtons = document.querySelectorAll(".filter-btn");
const questions = document.querySelectorAll(".qa-item");


// 2. A function that shows or hides questions
function filterQuestions(topic) {

    questions.forEach(function (question) {

        if (topic === "all" || question.dataset.topic === topic) {
            question.classList.remove("hidden");
        } else {
            question.classList.add("hidden");
        }

    });
}


// 3. Make each button respond to clicks
filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove "active" from every button
        filterButtons.forEach(function (otherButton) {
            otherButton.classList.remove("active");
        });

        // Add "active" to the one that was clicked
        button.classList.add("active");

        // Show only the matching questions
        filterQuestions(button.dataset.filter);

    });

});