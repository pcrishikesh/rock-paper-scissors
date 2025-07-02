//declaring variables
const months = ["rock", "paper", "scissor"];
let random;
let round = 0;
let player_score = 0,
  computer_score = 0;
let round_result = "";
let computer;
let player;

let player_dom = document.getElementById("player");
let computer_dom = document.getElementById("computer")
// getting computer choice

function getcomputerchoice() {
  random = Math.floor(Math.random() * months.length);
  computer =  months[random];
  computer_dom.textContent = computer
}

// getting player choice


let rock_select = document.getElementById('rock')
let paper_select = document.getElementById('paper');
let scissor_select = document.getElementById('scissor');
let players = document.querySelectorAll('.option')


// its function

function handler(element) {
    player = element.target.innerHTML;
    player_dom.textContent = player

    //game logic
    gameLogic(player,computer)

    players.forEach(btn => {
        btn.removeEventListener('click', handler)
    })
}


function getmyinput() {
    return new Promise((resolve) => {
    players.forEach(event=> {
        event.addEventListener('click' ,handler)

        resolve();
    })
    });

}


async function Round() {
    await getmyinput(); // Wait until button is clicked
    await getcomputerchoice()

}
Round();

// making the logic

async function gameLogic(player_select,computer_select) {
  //rps logic
    if (
        (player_select == "rock" && computer_select == "rock") ||
        (player_select == "paper" && computer_select == "paper") ||
        (player_select == "scissor" && computer_select == "scissor")
    ) {
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
        round_result = "same";
        console.log("same");
    } else if (player_select == "rock" && computer_select == "paper") {
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
        round_result = "computer_win";
        console.log("computer win");
    } else if (player_select == "rock" && computer_select == "scissor") {
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
        round_result = "player_win";
        console.log("player win");
    } else if (player_select == "paper" && computer_select == "rock") {
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
        round_result = "player_win";
        console.log("player win");
    } else if (player_select == "paper" && computer_select == "scissor") {
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
        round_result = "computer_win";
        console.log("computer win");
    } else if (player_select == "scissor" && computer_select == "rock") {
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
        round_result = "computer_win";
        console.log("computer win");
    } else if (player_select == "scissor" && computer_select == "paper") {
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
        console.log("player win");
        round_result = "player_win";
    } else {
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
        console.log("wrong input");
        round_result = "none";
    }
}
// a round first player select using prompt then computer also select stores in a vairable
// then compare it and update score and round













































// // making 5 rounds
// function loopround() {
//   // for (let i=1;i<=5;i++) {
//   //     Round()
//   //     // adding score
//   //     if (round_result == "none") {
//   //         player_score = player_score+0;
//   //         computer_score = computer_score +0;
//   //     }
//   //     else if (round_result == "player_win") {
//   //         player_score = player_score+1;
//   //         computer_score = computer_score +0;
//   //     }
//   //     else if (round_result == "computer_win") {
//   //         player_score = player_score+0;
//   //         computer_score = computer_score +1;
//   //     }
//   //     console.log("");

//   // }

//   // making the final result
//   console.log(`player score : ${player_score}`);
//   console.log(`computer score : ${computer_score}`);

//   if (player_score > computer_score) {
//     alert("player win's the game");
//   } else if (player_score < computer_score) {
//     alert("computer wins the game");
//   } else {
//     // alert("the game ended in a draw")
//   }
// }


