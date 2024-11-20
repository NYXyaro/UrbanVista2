fetch("http://127.0.0.1:1880/node-red/map")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((item) => {
            const marker = L.marker(item.location).bindPopup(
                `<b>Type:</b> ${item.type}<br><b>Level:</b> ${item.level}<br><b>Details:</b> ${item.details}`
            );
            marker.addTo(map);
        });
    });
