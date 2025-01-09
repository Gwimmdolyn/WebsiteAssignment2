// Add to favourites
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("save-to-favourites")) {
        const petCard = e.target.closest(".pet-card");
        const pet = {
            id: petCard.dataset.id, // Ensure this is a string
            name: petCard.querySelector("h3").textContent,
            type: petCard.querySelector("p:nth-of-type(1)").textContent.split(": ")[1],
            breed: petCard.querySelector("p:nth-of-type(2)").textContent.split(": ")[1],
        };

        // Debugging
        console.log("Pet being added:", pet);

        // Get favourites from localStorage
        let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        if (!favourites.some((f) => f.id === pet.id)) {
            favourites.push(pet);
            localStorage.setItem("favourites", JSON.stringify(favourites));
            console.log("Updated favourites:", favourites);
            alert(`${pet.name} added to favourites!`);
        } else {
            alert(`${pet.name} is already in your favourites.`);
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const favouritesList = document.getElementById("favouritesList");
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    console.log("Retrieved favourites:", favourites);

    if (favourites.length === 0) {
        favouritesList.innerHTML = "<p>You have no favourites yet.</p>";
    } else {
        favourites.forEach((pet) => {
            const petDiv = document.createElement("div");
            petDiv.classList.add("pet-card");
            petDiv.innerHTML = `
                <h3>${pet.name}</h3>
                <p>Type: ${pet.type}</p>
                <p>Breed: ${pet.breed}</p>
            `;
            favouritesList.appendChild(petDiv);
        });
    }
});
