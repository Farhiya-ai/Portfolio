// script.js

// Replace this URL with your API endpoint
const API_URL = "https://your-api-url.com/";

window.addEventListener("DOMContentLoaded", () => {
    const apiDiv = document.getElementById("apiMessage");

    // Fetch message from API
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            apiDiv.textContent = data.message;
        })
        .catch(err => {
            apiDiv.textContent = "API not available yet.";
            console.error(err);
        });
});
