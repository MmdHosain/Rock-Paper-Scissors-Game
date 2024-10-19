document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const nameInput = document.getElementById("name");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const playerName = nameInput.value.trim();

        if (playerName) {
            // Save the player's name to localStorage to use on the next page
            localStorage.setItem("playerName", playerName);

            // Redirect to another page, e.g., menu.html
            window.location.href = "menu.html";
        } else {
            alert("Please enter your name to proceed!"); // Show alert if no name is entered
        }
    });
});