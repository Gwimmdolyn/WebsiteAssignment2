document.getElementById("calculateCostButton").addEventListener("click", function () {
    try {
        const adoptionFee = parseFloat(document.getElementById("adoptionFee").value) || 0;
        const vetCost = parseFloat(document.getElementById("vetCost").value) || 0;
        const suppliesCost = parseFloat(document.getElementById("suppliesCost").value) || 0;

        if (adoptionFee < 0 || vetCost < 0 || suppliesCost < 0) {
            throw new Error("Costs cannot be negative.");
        }

        const totalCost = adoptionFee + vetCost + suppliesCost;
        document.getElementById("totalCost").textContent = `Estimated Total Cost: $${totalCost.toFixed(2)}`;
    } catch (error) {
        alert(error.message);
    }
});