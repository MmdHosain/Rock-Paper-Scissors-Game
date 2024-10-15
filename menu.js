document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");

    const button_1 = document.getElementById("1-player");
    const button_2 = document.getElementById("2-player");
    const button_3 = document.getElementById("score-board");
    const button_4 = document.getElementById("setting");

    button_1.addEventListener("click", () => {

        localStorage.setItem("game_mode", "1 player");
        window.location.href = "game.html";
    });
    button_2.addEventListener("click", () => {

        localStorage.setItem("game_mode", "2 player");
        window.location.href = "game.html";
    });


});