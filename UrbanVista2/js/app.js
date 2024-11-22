// Theme Switching
function switchTheme(theme) {
    document.body.className = theme; // Apply theme class to the body
    localStorage.setItem("theme", theme); // Save user preference
}

// Load the saved theme on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "dark-theme";
    switchTheme(savedTheme);

    // Initialize event listeners for theme buttons
    document.querySelectorAll("[data-theme]").forEach((button) => {
        button.addEventListener("click", () => {
            const theme = button.getAttribute("data-theme");
            switchTheme(theme);
        });
    });
});

// Responsive Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("visible");
    });
}

// Button Animations
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.05)";
        button.style.transition = "transform 0.2s";
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

// Card Hover Effects
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.3)";
        card.style.transform = "translateY(-5px)";
        card.style.transition = "box-shadow 0.3s, transform 0.3s";
    });

    card.addEventListener("mouseout", () => {
        card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        card.style.transform = "translateY(0)";
    });
});
