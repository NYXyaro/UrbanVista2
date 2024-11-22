// Add hover effects to all buttons
document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.2s ease-in-out, background-color 0.2s ease-in-out";
        button.style.backgroundColor = "#444"; // Darker background on hover
    });

    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.backgroundColor = ""; // Reset to default
    });
});

// Add card hover effect
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.3)";
        card.style.transform = "translateY(-5px)"; // Lift the card slightly
        card.style.transition = "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out";
    });

    card.addEventListener("mouseout", () => {
        card.style.boxShadow = "none";
        card.style.transform = "translateY(0)"; // Reset to original position
    });
});

// Add animations for navigation menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("visible");
        navMenu.style.transition = "all 0.3s ease-in-out";
        if (navMenu.classList.contains("visible")) {
            navMenu.style.transform = "translateX(0)";
            navMenu.style.opacity = "1";
        } else {
            navMenu.style.transform = "translateX(-100%)";
            navMenu.style.opacity = "0";
        }
    });
}

// Add fade-in animation to all sections
document.querySelectorAll("section").forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transition = `opacity 0.5s ease-in-out ${index * 0.2}s`; // Staggered fade-in

    window.addEventListener("scroll", () => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
        }
    });
});

// Add pulsing animation to theme buttons
document.querySelectorAll("[data-theme]").forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.animation = "pulse 1s infinite alternate";
    });

    button.addEventListener("mouseout", () => {
        button.style.animation = "none";
    });
});

// Define the pulse animation in CSS dynamically
const style = document.createElement("style");
style.innerHTML = `
    @keyframes pulse {
        0% {
            transform: scale(1);
            background-color: #444;
        }
        100% {
            transform: scale(1.1);
            background-color: #555;
        }
    }
`;
document.head.appendChild(style);
