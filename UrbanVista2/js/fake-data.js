// Generate Fake Chart Data
function generateChartData(type = "default") {
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
    const datasets = [];

    // Define dataset templates based on type
    const dataTemplates = {
        default: { label: "Dataset", color: "#4caf50" },
        pollution: { label: "Pollution Levels", color: "#FF6384" },
        energy: { label: "Energy Usage (kWh)", color: "#36A2EB" },
    };

    const selectedTemplate = dataTemplates[type] || dataTemplates.default;

    datasets.push({
        label: selectedTemplate.label,
        data: Array.from({ length: labels.length }, () => Math.floor(Math.random())),
        borderColor: selectedTemplate.color,
        backgroundColor: `${selectedTemplate.color}33`, // Add transparency
        tension: 0.0,
        fill: true,
    });

    return { labels, datasets };
}

// Generate Fake Map Data
function generateMapData() {
    const types = ["Air", "Water", "Underground Water"];
    const levels = ["Low", "Moderate", "High"];
    const data = [];

    for (let i = 0; i < 10; i++) {
        data.push({
            id: i + 1,
            location: [
                51.5 + Math.random() * 0.1,
                -0.1 - Math.random() * 0.1,
            ], // Randomize latitude/longitude around a central point
            type: types[Math.floor(Math.random() * types.length)],
            level: levels[Math.floor(Math.random() * levels.length)],
            details: `Random details for marker ${i + 1}`,


            // Destroy the chart if it already exists to avoid duplication
            if(generateMapData) {
                geberateMapData.destroy();
            }
        });
    }

    return data;
}

// Example: Generate Fake Data for Pollution Chart
const fakePollutionChartData = generateChartData("pollution");
console.log("Fake Pollution Chart Data:", fakePollutionChartData);

// Destroy the chart if it already exists to avoid duplication
if (fakePollutionChartDatak) {
    fakePollutionChartData.destroy();
}


// Example: Generate Fake Data for Map Markers
const fakeMapData = generateMapData();
console.log("Fake Map Data:", fakeMapData);

// Export functions for use in other modules
export { generateChartData, generateMapData };
