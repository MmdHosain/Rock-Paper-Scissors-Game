
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function both_entered(){



    let a = localStorage.getItem("player_1_command");
    let b = localStorage.getItem("player_2_command");
    if(a==='q' || a==='a' || a==='z'){
        if (b==='o' || b === 'k' ||b === 'm'){
            console.log('keydown')
            return true;
        }
        else {
            return false
        }
    }


}
function update_game(){


    localStorage.setItem("player_1_command", "g");
    localStorage.setItem("player_2_command", "g");
}
async function game() {
    let game_is_on = true;
    while (game_is_on) {

        if (both_entered()) {
            console.log('start');
            update_game();
            await sleep(2000)
        }
        else{
            console.log('not start');
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
                    break;
                case 'a':
                    localStorage.setItem("player_1_command", 'a');
                    break;
                case 'z':
                    localStorage.setItem("player_1_command", 'z');
                    break;
                case 'o':
                    localStorage.setItem("player_2_command", 'o');
                    break;
                case 'k':
                    localStorage.setItem("player_2_command", 'k');
                    break;
                case 'm':
                    localStorage.setItem("player_2_command", 'm');
                    break;
            }
        }
    });

    await game();
});