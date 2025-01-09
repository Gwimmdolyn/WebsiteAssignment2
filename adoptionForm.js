// this is the adoption form when you click on the animal and click adopt (animal name)
const params = new URLSearchParams(window.location.search);
const petId = parseInt(params.get("id"), 10);

const pet = pets.find((p) => p.id === petId);

if (pet) {
    document.getElementById("petInfo").innerHTML = `
        <h2>Adopting: ${pet.name}</h2>
        <p>${pet.description}</p>
    `;
} else {
    document.getElementById("petInfo").innerHTML = "<p>Pet not found.</p>";
}

document.getElementById("adoptionForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Your adoption request has been submitted!");
});
