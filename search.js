document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const type = document.getElementById("type").value.toLowerCase();
    const breed = document.getElementById("breed").value.toLowerCase();
    const age = document.getElementById("age").value;
    const size = document.getElementById("size").value;
    const temperament = document.getElementById("temperament").value;

    const results = pets.filter((pet) => {
        return (
            (!type || pet.type.toLowerCase() === type) &&
            (!breed || pet.breed.toLowerCase().includes(breed)) &&
            (!age || pet.age === age) &&
            (!size || pet.size === size) &&
            (!temperament || pet.temperament === temperament)
        );
    });

    displayResults(results);
});

function displayResults(results) {
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    if (results.length === 0) {
        resultsDiv.innerHTML = "<p>No pets found matching your criteria. Try different filters.</p>";
        return;
    }

    results.forEach((pet) => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}" class="pet-image">
            <h3>${pet.name}</h3>
            <p><strong>Type:</strong> ${pet.type}</p>
            <p><strong>Breed:</strong> ${pet.breed}</p>
            <p><strong>Age:</strong> ${pet.age}</p>
            <p><strong>Size:<strong> ${pet.size}</p>
            <p><strong>Temperament:</strong> ${pet.temperament}</p>
            <button class="favourite-button" data-id="${pet.id}">Add to Favourites</button>
            <a href="pet-details.html?id=${pet.id}" class="details-button">View Details</a>
        `;
        resultsDiv.appendChild(petCard);
    });

    attachFavouriteListeners();
}

function attachFavouriteListeners() {
    const favouriteButtons = document.querySelectorAll(".favourite-button");
    favouriteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const petId = e.target.dataset.id;
            const pet = pets.find((p) => p.id == petId);

            // Retrieve favourites from localStorage
            const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

            // Check if already added
            if (favourites.some((f) => f.id == pet.id)) {
                alert(`${pet.name} is already in your favourites.`);
                return;
            }

            favourites.push(pet);
            localStorage.setItem("favourites", JSON.stringify(favourites));
            alert(`${pet.name} added to your favourites!`);
        });
    });
}
document.getElementById("searchForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const type = document.getElementById("type").value.toLowerCase();
    const breed = document.getElementById("breed").value.toLowerCase();
    const age = document.getElementById("age").value;
    const size = document.getElementById("size").value;
    const temperament = document.getElementById("temperament").value;

    const results = pets.filter((pet) => {
        return (
            (!type || pet.type.toLowerCase() === type) &&
            (!breed || pet.breed.toLowerCase().includes(breed)) &&
            (!age || pet.age === age) &&
            (!size || pet.size === size) &&
            (!temperament || pet.temperament === temperament)
        );
    });

    displayResults(results);
});

function displayResults(results) {
    const resultsDiv = document.getElementById("searchResults");
    resultsDiv.innerHTML = "";

    if (results.length === 0) {
        resultsDiv.innerHTML = "<p>No pets found matching your criteria. Try different filters.</p>";
        return;
    }

    results.forEach((pet) => {
        const petCard = document.createElement("div");
        petCard.classList.add("pet-card");
        petCard.innerHTML = `
            <img src="${pet.image}" alt="${pet.name}" class="pet-image">
            <h3>${pet.name}</h3>
            <p><strong>Type:</strong> ${pet.type}</p>
            <p><strong>Breed:</strong> ${pet.breed}</p>
            <p><strong>Age:</strong> ${pet.age}</p>
            <p><strong>Size:</strong> ${pet.size}</p>
            <p><strong>Temperament:</strong> ${pet.temperament}</p>
            <button class="favourite-button" data-id="${pet.id}">Add to Favourites</button>
            <a href="pet-details.html?id=${pet.id}" class="details-button">View Details</a>
        `;
        resultsDiv.appendChild(petCard);
    });

    attachFavouriteListeners();
}

function attachFavouriteListeners() {
    const favouriteButtons = document.querySelectorAll(".favourite-button");
    favouriteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const petId = e.target.dataset.id;
            const pet = pets.find((p) => p.id == petId);

            // Retrieve favourites from localStorage
            const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

            // Check if already added
            if (favourites.some((f) => f.id == pet.id)) {
                alert(`${pet.name} is already in your favourites.`);
                return;
            }

            favourites.push(pet);
            localStorage.setItem("favourites", JSON.stringify(favourites));
            alert(`${pet.name} added to your favourites!`);
        });
    });
}
