//declaring variables
const months = ["rock", "paper", "scissor"];
let random,myinput;
let round = 0;
let player_select,computer_select
let player_score=0,computer_score = 0;


// getting computer choice
 
function getcomputerchoice() {
    random = Math.floor(Math.random() * months.length);
    return months[random]
}


// getting player choice
function getmyinput() {
    myinput = prompt("select rock,paper or scissor")
    return myinput
}

// making the logic
// a round first player select using prompt then computer also select stores in a vairable
// then compare it and update score and round

function Round() {
    round = round+1;
    player_select = getmyinput();
    computer_select = getcomputerchoice();
    
    //rps logic
    if(player_select == "rock" && computer_select == "rock" || 
        player_select == "paper" && computer_select == "paper" ||
        player_select == "scissor" && computer_select == "scissor"
    ) {
        console.log("same");
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
    }
    else if (player_select == "rock" && computer_select == "paper"){
        console.log("computer win");
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
    }
    else if (player_select == "rock" && computer_select == "scissor"){
        console.log("player win");
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
    }
    else if (player_select == "paper" && computer_select == "rock"){
        console.log("player win");
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
    }
    else if (player_select == "paper" && computer_select == "scissor"){
        console.log("computer win");
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
    }
    else if (player_select == "scissor" && computer_select == "rock"){
        console.log("computer win");
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
    }
    else if (player_select == "scissor" && computer_select == "paper"){
        console.log("player win");
        console.log(`player selection : ${player_select}`);
        console.log(`computer selection : ${computer_select}`);
    }
    console.log(`player score ${player_score} & computer score  ${computer_score}`);
    console.log(round);
}

Round()




