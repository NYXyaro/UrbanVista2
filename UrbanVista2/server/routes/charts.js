function initChart(data) {
    const chartCanvas = document.getElementById("pollutionChart");
    const ctx = chartCanvas.getContext("2d");

    // Reset canvas dimensions to prevent layout issues
    chartCanvas.width = chartCanvas.width;

    // Destroy the chart if it already exists
    if (pollutionChart) {
        pollutionChart.destroy();
    }

    // Create the chart with new configuration
    pollutionChart = new Chart(ctx, {
        type: "line", // Use line chart
        data: {
            labels: data.labels, // X-axis labels
            datasets: [
                {
                    label: "Pollution Levels (%)",
                    data: data.values, // Y-axis data
                    borderColor: "#1e90ff", // Line color
                    backgroundColor: "rgba(30, 144, 255, 0.2)", // Fill under the line
                    tension: 0.4, // Smooth curves
                    fill: true, // Fill area under the line
                    pointRadius: 5, // Size of data points
                    pointBackgroundColor: "#ff4b5c", // Point color
                    pointHoverRadius: 7, // Enlarged point on hover
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: true, // Ensures chart stretches properly
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
