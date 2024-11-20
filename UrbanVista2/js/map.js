// map.js

// Initialize the map
const map = L.map("map").setView([51.505, -0.09], 13);

// Add a tile layer (OpenStreetMap)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Fake pollution data
const pollutionData = [
    { id: 1, location: [51.505, -0.09], type: "Air", level: "High", details: "Industrial emissions" },
    { id: 2, location: [51.51, -0.1], type: "Water", level: "Moderate", details: "River contamination" },
    { id: 3, location: [51.52, -0.12], type: "Underground Water", level: "Low", details: "Minimal leakage" },
    { id: 4, location: [51.50, -0.11], type: "Air", level: "Moderate", details: "Vehicle pollution" },
];

// Create a LayerGroup for clustering
const markerClusterGroup = L.markerClusterGroup();

// Function to add markers with animations
function addMarkers() {
    pollutionData.forEach((data) => {
        const marker = L.marker(data.location, { bounceOnAdd: true }) // Animate marker addition
            .bindPopup(
                `<b>Pollution Type:</b> ${data.type}<br><b>Level:</b> ${data.level}<br><b>Details:</b> ${data.details}`
            );

        marker.type = data.type; // Assign type for filtering

        // Add click animation
        marker.on("click", () => {
            marker.setOpacity(0.6);
            setTimeout(() => marker.setOpacity(1), 300);
        });

        markerClusterGroup.addLayer(marker); // Add marker to cluster group
    });

    map.addLayer(markerClusterGroup); // Add cluster group to map
}

// Function to filter markers
function filterMarkers(filterType) {
    markerClusterGroup.clearLayers(); // Clear all markers
    pollutionData.forEach((data) => {
        if (filterType === "All" || data.type === filterType) {
            const marker = L.marker(data.location).bindPopup(
                `<b>Pollution Type:</b> ${data.type}<br><b>Level:</b> ${data.level}<br><b>Details:</b> ${data.details}`
            );
            markerClusterGroup.addLayer(marker);
        }
    });
}

// Add markers on map load
addMarkers();
