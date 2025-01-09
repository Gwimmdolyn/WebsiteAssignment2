document.getElementById("donationForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const amount = document.getElementById("amount").value;
    const frequency = document.getElementById("frequency").value;

    if (amount && frequency) {
        document.getElementById("donationMessage").textContent =
            `Thank you for your ${frequency} donation of £${amount}!`;
    } else {
        alert("Please fill out all fields!");
    }
});
