document.addEventListener("DOMContentLoaded", () => {
    fetch("http://127.0.0.1:1880/node-red/charts")
        .then((response) => response.json())
        .then((data) => {
            const ctx = document.getElementById("pollutionChart").getContext("2d");
            new Chart(ctx, {
                type: "line",
                data: data,
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch((error) => console.error("Error fetching chart data:", error));
});
