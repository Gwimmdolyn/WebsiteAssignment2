document.addEventListener("click", function (e) {
    if (e.target.classList.contains("save-to-favourites")) {
        const petCard = e.target.closest(".pet-card");

        // Ensure all necessary data is present
        const pet = {
            id: petCard?.dataset?.id, // Check for valid dataset
            name: petCard?.querySelector("h3")?.textContent || "Unknown",
            type: petCard?.querySelector("p:nth-of-type(1)")?.textContent?.split(": ")[1] || "Unknown",
            breed: petCard?.querySelector("p:nth-of-type(2)")?.textContent?.split(": ")[1] || "Unknown",
        };

        if (!pet.id) {
            console.error("Pet ID is missing. Cannot save to favourites.");
            return;
        }

        // Load existing favourites or initialize a new array
        let favourites = [];
        try {
            favourites = JSON.parse(localStorage.getItem("favourites")) || [];
        } catch (error) {
            console.error("Error reading favourites from localStorage:", error);
        }

        // Check if pet is already in favourites
        if (!favourites.some((f) => f.id === pet.id)) {
            favourites.push(pet); // Add pet to favourites
            try {
                localStorage.setItem("favourites", JSON.stringify(favourites)); // Save updated favourites
                console.log("Pet added to favourites:", pet);
            } catch (error) {
                console.error("Error saving favourites to localStorage:", error);
            }
        } else {
            console.log("Pet is already in favourites:", pet);
        }
    }
});
