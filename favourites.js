document.addEventListener("click", function (e) {
    // Check if the clicked element has the correct class
    if (e.target.classList.contains("save-to-favourites")) {
        console.log("Save to favourites clicked."); // Debugging log

        const petCard = e.target.closest(".pet-card");
        if (!petCard) {
            console.error("No pet card found for the clicked element.");
            return;
        }

        // Extract pet information from the card
        const pet = {
            id: petCard.dataset?.id || null,
            name: petCard.querySelector("h3")?.textContent || "Unknown",
            type: petCard.querySelector("p:nth-of-type(1)")?.textContent?.split(": ")[1] || "Unknown",
            breed: petCard.querySelector("p:nth-of-type(2)")?.textContent?.split(": ")[1] || "Unknown",
        };

        // Validate pet ID
        if (!pet.id) {
            console.error("Pet ID is missing or invalid:", pet);
            return;
        }

        console.log("Pet to be saved:", pet); // Debugging log

        // Load favourites from localStorage
        let favourites = [];
        try {
            favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        } catch (error) {
            console.error("Error reading favourites from localStorage:", error);
            favourites = []; // Initialize to empty array if there's an error
        }

        // Check if the pet already exists in favourites
        const petExists = favourites.some((f) => f.id === pet.id);
        if (petExists) {
            console.log("Pet is already in favourites:", pet);
        } else {
            favourites.push(pet); // Add the new pet
            try {
                localStorage.setItem("favourites", JSON.stringify(favourites)); // Save updated favourites
                console.log("Favourites updated successfully:", favourites);
            } catch (error) {
                console.error("Error saving favourites to localStorage:", error);
            }
        }
    }
});
