
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function change_to_selected(type){
    if (type=="left"){
        const cover = document.getElementById("selected_dive_left");
        cover.style.display="block";
    }else {
        const cover = document.getElementById("selected_dive_right");
        cover.style.display="block";
    }
}

function both_entered(){



    let a = localStorage.getItem("player_1_command");
    let b = localStorage.getItem("player_2_command");
    if(a==='q' || a==='a' || a==='z'){
        if (b==='o' || b === 'k' ||b === 'm'){
            // console.log('keydown')
            return true;
        }
        else {
            return false
        }
    }


}

function who_won(a,b){
    switch (a) {
        case 'q':
            switch (b) {
                case 'o':
                    return "draw"

                case 'k':
                    return "right"
                    break;
                case 'm':
                    return "left"
                    break;
            }
            break;
        case 'a':
            switch (b) {
                case 'o':
                    return "left"
                    break;
                case 'k':
                    return "draw"
                    break;
                case 'm':
                    return "right"
                    break;
            }
            break;
        case 'z':
            switch (b) {
                case 'o':
                    return "right"
                    break;
                case 'k':
                    return "left"
                    break;
                case 'm':
                    return "draw"
                    break;
            }
            break;
        default:
            console.log("error")
    }
}
async function update_game() {

    const game = document.getElementById("game");

    const left_score_num = document.getElementById("left_score_num");
    const right_score_num = document.getElementById("right_score_num");


    const cover_left = document.getElementById("selected_dive_left");
    const cover_right = document.getElementById("selected_dive_right");

    const result_left = document.getElementById("result_left");
    const result_right = document.getElementById("result_right");


    const result_left_img = document.getElementById("result_left_img");
    const result_right_img = document.getElementById("result_right_img");

    const left = document.getElementById("left");
    const right = document.getElementById("right");

    let guide = document.getElementById("guide");

    let a = localStorage.getItem("player_1_command");
    let b = localStorage.getItem("player_2_command");

    await sleep(500);
    cover_left.style.display = "none";
    cover_right.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
    result_left.style.display = "block";
    result_right.style.display = "block";
    guide.style.display = "none";
    game.style.marginTop = "10px"

    result_left_img.style.backgroundColor = "#8abdb2"
    result_right_img.style.backgroundColor = "#8abdb2"
    // console.log(a)
    switch (a) {
        case 'q':
            result_left_img.src = "Rock.svg"
            break;
        case 'a':
            result_left_img.src = "paper.svg"
            break;
        case 'z':
            result_left_img.src = "scissors.svg"
            break;
    }
    // console.log(b)
    switch (b) {
        case 'o':
            result_right_img.src = "Rock.svg"
            break;
        case 'k':
            result_right_img.src = "paper.svg"
            break;
        case 'm':
            result_right_img.src = "scissors.svg"
            break;
    }

    await sleep(1000);
    let winner = who_won(a,b);
    console.log(winner)

    let temp_score
    switch (winner) {
        case 'left':
            temp_score = parseInt(localStorage.getItem("left_score"), 10);

            console.log(temp_score)
            temp_score += 1;
            console.log(temp_score)
            localStorage.setItem("left_score",`${temp_score}`)
            left_score_num.innerText = temp_score;
            result_left_img.style.backgroundColor = "#a5ff38"
            result_right_img.style.backgroundColor = "#ff6638"
            break;
        case 'right':
            temp_score = parseInt(localStorage.getItem("right_score"), 10);
            temp_score += 1;
            localStorage.setItem("right_score",`${temp_score}`)
            right_score_num.innerText = temp_score;
            result_right_img.style.backgroundColor = "#a5ff38"
            result_left_img.style.backgroundColor = "#ff6638"
            break;
        case 'draw':
            result_right_img.style.backgroundColor = "#fcead4"
            result_left_img.style.backgroundColor = "#fcead4"
            break;
    }





    await sleep(2000);
    game.style.marginTop = "13%"
    guide.style.display = "block"
    result_left.style.display = "none";
    result_right.style.display = "none";
    left.style.display = "block";
    right.style.display = "block";
    localStorage.setItem("player_1_command", "g");
    localStorage.setItem("player_2_command", "g");
}
async function game() {
    let game_is_on = true;
    localStorage.setItem("left_score","0")
    localStorage.setItem("right_score","0")
    console.log('game is on');
    while (game_is_on) {
        if (both_entered()) {
            // console.log('start');
            await update_game();

        }
        else{
            // console.log('not start');
        }
        await sleep(1000)
    }


}


document.addEventListener("DOMContentLoaded", async () => {

    document.addEventListener('keydown', function (event) {

        if(!both_entered()){
            switch (event.key) {
                case 'q':
                    localStorage.setItem("player_1_command", 'q');
                    change_to_selected("left");
                    break;
                case 'a':
                    localStorage.setItem("player_1_command", 'a');
                    change_to_selected("left");
                    break;
                case 'z':
                    localStorage.setItem("player_1_command", 'z');
                    change_to_selected("left");
                    break;
                case 'o':
                    localStorage.setItem("player_2_command", 'o');
                    change_to_selected("right");
                    break;
                case 'k':
                    localStorage.setItem("player_2_command", 'k');
                    change_to_selected("right");
                    break;
                case 'm':
                    localStorage.setItem("player_2_command", 'm');
                    change_to_selected("right");
                    break;
            }
        }
    });

    await game();
});