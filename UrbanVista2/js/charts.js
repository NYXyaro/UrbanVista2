// Global Pollution Chart instance
let pollutionChart;

// Function to initialize or update the chart
function initChart(data) {
    const chartCanvas = document.getElementById("pollutionChart");
    const ctx = chartCanvas.getContext("2d");

    // Clear canvas dimensions to prevent infinite growth
    chartCanvas.width = chartCanvas.width;

    // Destroy the chart if it already exists
    if (pollutionChart) {
        pollutionChart.destroy();
    }

    // Create a new Line Chart
    pollutionChart = new Chart(ctx, {
        type: "line", // Changed to line graph
        data: {
            labels: data.labels, // X-axis labels
            datasets: [
                {
                    label: "Pollution Levels (%)",
                    data: data.values, // Data points
                    borderColor: "#1e90ff", // Line color
                    backgroundColor: "rgba(30, 144, 255, 0.2)", // Fill under the line
                    pointBackgroundColor: "#ff4b5c", // Point color
                    pointBorderColor: "#ffffff", // Border color of points
                    pointHoverBackgroundColor: "#ff4b5c",
                    pointHoverBorderColor: "#ffffff",
                    fill: true, // Fill the area under the line
                    tension: 0.4, // Smoothness of the curve
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: "top",
                    labels: {
                        color: "#dcdcdc",
                        font: { family: "Orbitron", size: 14 },
                    },
                },
                tooltip: {
                    callbacks: {
                        label: (context) => `${context.raw}% Pollution`,
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

// Example dataset
const pollutionData = [
    { type: "January", value: 60 },
    { type: "February", value: 55 },
    { type: "March", value: 50 },
    { type: "April", value: 65 },
    { type: "May", value: 70 },
    { type: "June", value: 80 },
    { type: "July", value: 75 },
    { type: "August", value: 85 },
];

// Function to format data for the chart
function getChartData() {
    return {
        labels: pollutionData.map((item) => item.type), // Months
        values: pollutionData.map((item) => item.value), // Pollution values
    };
}

// Initialize chart with data on page load
document.addEventListener("DOMContentLoaded", () => {
    const initialData = getChartData();
    initChart(initialData);
});
