document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    fetch("http://127.0.0.1:1880/node-red/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    })
        .then((res) => {
            if (res.ok) alert("Message sent!");
        })
        .catch((err) => console.error(err));
});
