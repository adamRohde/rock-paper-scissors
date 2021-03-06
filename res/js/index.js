// Order of operations index
// 0 - load page, also handles modal and drop down events
// 1 - Start game by clicking screen
// 2a - count to 3
// 2b - the user selects rock paper or scissors
// 3 - UI displays the user and the computers pick after time has elapsed
// 4 - determines winner
// 5 - adds score the left or right side depending on winner
// 6 - displays the winnter
// 7 - a click resets and starts game over again

const resultMap = [
    ["t", "c", "u"],
    ["u", "t", "c"],
    ["c", "u", "t"],
];
const result = {
    t: "Tie",
    u: "You win",
    c: "You lose",
};
const playOptions = [
    "<i class='fas fa-hand-paper'></i>",
    "<i class='fas fa-hand-rock'></i>",
    "<i class='fas fa-hand-scissors'></i>",
];

const speedOptions = [400, 750, 1000];
let playIndex;
let gameResultsOutcome;
let timeleft;
const gameStatusAndCountDown = document.getElementById("game-countdown-and-status");

// -------------------------------------- Modal --------------------------------------
$("#staticBackdrop").on("shown.bs.modal", () => {
    document.body.removeEventListener("click", countDown);
});

$("#staticBackdrop").on("hidden.bs.modal", () => {
    document.body.addEventListener("click", countDown);
});

// -------------------------------------- Dropdown --------------------------------------
$("#myDropdown").on("hidden.bs.dropdown", () => {
    console.log("show dropdown");
    document.body.addEventListener("click", countDown);
});

document.getElementById("dropdownMenuButton").onclick = () => {
    document.body.removeEventListener("click", countDown);
};

// -------------------------------------- 0 --------------------------------------
window.addEventListener("load", () => {
    document.getElementById("the-humans-play").innerHTML = " ";
    document.getElementById("the-computers-play").innerHTML = " ";
    // console.log(window.speedOptions[window.speed]);
    window.mySpeed;
    gameStatusAndCountDown.textContent = "Click!";
});

// -------------------------------------- 1 --------------------------------------
document.body.addEventListener("click", countDown);
// -------------------------------------- 2a --------------------------------------
function countDown() {
    console.log("In the count " + speedOptions[top.counterSpeed]);
    document.getElementById("the-humans-play").innerHTML = " ";
    document.getElementById("the-computers-play").innerHTML = " ";
    timeleft = 1;
    gameStatusAndCountDown.textContent = timeleft;
    let randomNum;
    document.body.removeEventListener("click", countDown);

    var downloadTimer = setInterval(function () {
        // -------------------------------------- 2b Rock --------------------------------------
        document.getElementById("shoot-rock").addEventListener("click", () => {
            if (timeleft <= 4) {
                randomNum = Math.floor(Math.random() * 3);
                playIndex = 1;
            }
        });
        // -------------------------------------- 2b Paper --------------------------------------
        document.getElementById("shoot-paper").addEventListener("click", () => {
            if (timeleft <= 4) {
                randomNum = Math.floor(Math.random() * 3);
                playIndex = 0;
            }
        });
        // -------------------------------------- 2b Scissors --------------------------------------
        document.getElementById("shoot-scissors").addEventListener("click", () => {
            if (timeleft <= 4) {
                randomNum = Math.floor(Math.random() * 3);
                playIndex = 2;
            }
        });
        // -------------------------------------- 3 --------------------------------------
        if (timeleft >= 3) {
            if (randomNum == null) {
                gameStatusAndCountDown.textContent = "to slow";
                document.body.addEventListener("click", countDown);
                clearInterval(downloadTimer);
            } else {
                let computerPlay = playOptions[randomNum];
                let myPlay = playOptions[playIndex];
                document.getElementById("the-humans-play").innerHTML = myPlay;
                document.getElementById("the-computers-play").innerHTML = computerPlay;
                gameResultsOutcome = resultMap[randomNum][playIndex];
                // -------------------------------------- 4 --------------------------------------
                if (gameResultsOutcome == "u") {
                    // -------------------------------------- 5 --------------------------------------
                    let grid_item = document.createElement("grid-item");
                    document.getElementById("add_point_for_human").appendChild(grid_item);
                } else if (gameResultsOutcome == "c") {
                    // -------------------------------------- 5 --------------------------------------
                    let grid_item = document.createElement("grid-item");
                    document.getElementById("add_point_for_computer").appendChild(grid_item);
                }
                // -------------------------------------- 6 --------------------------------------
                gameStatusAndCountDown.textContent = result[gameResultsOutcome];
                document.body.addEventListener("click", countDown);
                clearInterval(downloadTimer);
            }
            // -------------------------------------- 2a --------------------------------------
        } else {
            timeleft += 1;
            gameStatusAndCountDown.textContent = timeleft;
            document.getElementById("the-humans-play").innerHTML = " ";
            document.getElementById("the-computers-play").innerHTML = " ";
            console.log(timeleft);
        }
    }, speedOptions[top.counterSpeed]);
}
