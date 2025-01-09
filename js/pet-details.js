const params = new URLSearchParams(window.location.search);
const petId = parseInt(params.get("id"), 10);

const pet = pets.find((p) => p.id === petId);

if (pet) {
    document.getElementById("petDetails").innerHTML = `
        <h1>${pet.name}</h1>
        <img src="${pet.image}" alt="${pet.name}">
        <p>${pet.description}</p>
        <a href="adoptionForm.html?id=${pet.id}">Adopt ${pet.name}</a>
    `;
} else {
    document.getElementById("petDetails").innerHTML = "<p>Pet not found.</p>";
}
