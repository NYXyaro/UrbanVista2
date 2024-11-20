// charts.js

// Pollution Chart instance (global for updates)
let pollutionChart;

// Function to initialize the chart
function initChart(data) {
    const ctx = document.getElementById("pollutionChart").getContext("2d");

    // Destroy the chart if it already exists to avoid duplication
    if (pollutionChart) {
        pollutionChart.destroy();
    }

    // Create the chart with the provided data
    pollutionChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: data.labels,
            datasets: [
                {
                    label: "Pollution Levels (%)",
                    data: data.values,
                    backgroundColor: data.colors,
                    borderColor: data.borders,
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "top",
                    labels: {
                        color: "#dcdcdc",
                        font: { family: "Orbitron", size: 14 },
                    },
                },
            },
            scales: {
                x: {
                    ticks: { color: "#dcdcdc", font: { family: "Orbitron" } },
                    grid: { color: "rgba(255, 255, 255, 0.1)" },
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: "#dcdcdc", font: { family: "Orbitron" } },
                    grid: { color: "rgba(255, 255, 255, 0.1)" },
                },
            },
        },
    });
}

// Example function to fetch and format chart data
function getChartData(filterType) {
    const filteredData = pollutionData.filter(
        (data) => filterType === "All" || data.type === filterType
    );

    return {
        labels: filteredData.map((item) => item.type),
        values: filteredData.map((item) => {
            if (item.type === "Air") return 65;
            if (item.type === "Water") return 45;
            return 20; // Underground Water
        }),
        colors: ["#ff4b5c", "#1e90ff", "#28a745"],
        borders: ["#ff2b4d", "#187bcd", "#1c8b36"],
    };
}

// Initialize with "All" data on page load
document.addEventListener("DOMContentLoaded", () => {
    const initialData = getChartData("All");
    initChart(initialData);
});
