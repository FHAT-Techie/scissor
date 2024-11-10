let faqItems = document.querySelectorAll(".faqItem");
let faqAnswers = document.querySelectorAll(".faqAnswer");

function openFAQ() {
    // Loop through each faq item
    faqItems.forEach((item, index) => {
        // Set event listener for each item
        item.addEventListener("click", () => {
            // Get the corresponding answer based on index
            let answer = faqAnswers[index];
            // Get the icon element
            let icon = item.querySelector("i");

            // Toggle display property
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "flex"; // Show answer
                icon.classList.remove("fa-plus"); // Remove plus icon
                icon.classList.add("fa-minus"); // Add minus icon
            } else {
                answer.style.display = "none"; // Hide answer
                icon.classList.remove("fa-minus"); // Remove minus icon
                icon.classList.add("fa-plus"); // Add plus icon
            }
        });
    });
}

// Initialize the FAQ functionality
openFAQ();
