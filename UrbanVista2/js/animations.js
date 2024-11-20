// Add hover effects to all buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.2s";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

// Add card hover effect
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.3)";
    });

    card.addEventListener("mouseout", () => {
        card.style.boxShadow = "none";
    });
});
