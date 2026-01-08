// script.js

document.addEventListener("DOMContentLoaded", () => {
    const apiDiv = document.getElementById("apiMessage");

    // Placeholder message before API exists
    apiDiv.textContent = "Hello! Your serverless API will appear here soon 😄";

    // Optional: uncomment to connect real API
    // fetch("https://your-api-url.com")
    //     .then(res => res.json())
    //     .then(data => { apiDiv.textContent = data.message; })
    //     .catch(err => console.error(err));
});

