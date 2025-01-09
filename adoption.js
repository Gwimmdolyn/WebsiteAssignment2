// This file handles the form for appointments on the adoption process

// Get the form element
const appointmentForm = document.getElementById("appointmentForm");

// Add a submit event listener to the form
appointmentForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Get the values of the form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("date").value;

    // Validate the form inputs
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    if (!email || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!date) {
        alert("Please select a preferred date.");
        return;
    }

    // Display a confirmation message
    alert(`Thank you, ${name}! Your appointment for ${date} has been booked. We will contact you at ${email}.`);

    // Clear the form fields
    appointmentForm.reset();
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return emailPattern.test(email);
}
