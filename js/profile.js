document.addEventListener("DOMContentLoaded", () => {
    //console.log("DOM fully loaded."); // for debugging

    const favouritesList = document.getElementById("favouritesList");

    // Load favourites from localStorage and display them
    const loadFavourites = () => {
        const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        console.log("Favourites loaded from localStorage:", favourites);

        // Clear the current favourites list
        favouritesList.innerHTML = "";

        if (favourites.length === 0) {
            favouritesList.innerHTML = "<p>You have no favourites yet.</p>";
        } else {
            favourites.forEach((pet) => {
                const petCard = document.createElement("div");
                petCard.classList.add("pet-card");
                petCard.dataset.id = pet.id; // Attach ID to the card for reference

                petCard.innerHTML = `
                    <img src="${pet.image}" alt="${pet.name}" class="pet-image">
                    <h3>${pet.name}</h3>
                    <p><strong>Type:</strong> ${pet.type}</p>
                    <p><strong>Breed:</strong> ${pet.breed}</p>
                    <button class="remove-favourite" data-id="${pet.id}">Remove from Favourites</button>
                `;

                favouritesList.appendChild(petCard);
            });
        }
    };

    // Handle remove button click was trying to make it so the users could remove the pets from the favourite list but could'nt get it to work
    const handleFavouriteRemoval = (e) => {
        if (e.target.classList.contains("remove-favourite")) {
            console.log("Remove button clicked. Pet ID:", e.target.dataset.id);

            const petId = parseInt(e.target.dataset.id, 10);

            // Retrieve favourites from localStorage
            let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
            console.log("Current favourites before removal:", favourites);

            // Remove the selected pet
            favourites = favourites.filter((pet) => pet.id !== petId);
            console.log("Updated favourites after removal:", favourites);

            // Save updated favourites back to localStorage
            localStorage.setItem("favourites", JSON.stringify(favourites));

            // Reload the favourites list
            loadFavourites();
        }
    };

    // Attach click event listener to favouritesList
    if (favouritesList) {
        favouritesList.addEventListener("click", handleFavouriteRemoval);
        console.log("Event listener attached to favouritesList.");
    } else {
        console.error("favouritesList element not found in the DOM.");
    }

    // Load favourites initially
    loadFavourites();
});
