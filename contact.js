// Select the form element
const contactForm = document.getElementById("contactForm");

// Add a submit event listener
contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page refresh

    // Collect the form data
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Show an alert with the user's input
    alert(`Thank you for contacting us!\n\nDetails:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Optionally reset the form
    contactForm.reset();
});
