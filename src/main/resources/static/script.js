
const careerCards = document.querySelectorAll(".career-card");

const selectionMessage = document.getElementById("selectionMessage");
const selectedCareer = document.getElementById("selectedCareer");
const continueButton = document.getElementById("continueButton");

let selectedRole = "";

// Select a career
careerCards.forEach(card => {

    card.addEventListener("click", () => {

        selectedRole = card.dataset.role;

        selectedCareer.textContent =
            "Selected Career: " + selectedRole;

        selectionMessage.classList.add("show");

        careerCards.forEach(item => {
            item.style.borderColor = "#e9edf0";
        });

        card.style.borderColor = "#568b79";

        selectionMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});

// Continue to skill assessment
continueButton.addEventListener("click", () => {

   window.location.href = "assessment.html";

});
