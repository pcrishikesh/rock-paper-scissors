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
    result_div = document.getElementById('result').style.display = 'block'
    //game logic
    getcomputerchoice()
    gameLogic(player,computer)
    round = round + 1    
    if (round >= 5) {
        players.forEach(btn => {
        btn.removeEventListener('click', handler)
        })
    }
        


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
}

// making the logic

let result = document.createElement('h2')
function domResult(final,playerdom,computerdom) {
    result_div = document.getElementById('result')
    document.getElementById('computer_selection').textContent = computerdom
    document.getElementById('player_selection').textContent = playerdom

    result.classList.add('result_element')
    result.textContent = final
    result_div.append(result)
    
}

function resultCalculator() {

}

async function gameLogic(player_select,computer_select) {
  //rps logic
    if (
        (player_select == "rock" && computer_select == "rock") ||
        (player_select == "paper" && computer_select == "paper") ||
        (player_select == "scissor" && computer_select == "scissor")
    ) {
        domResult('same',player_select,computer_select)
    } else if (player_select == "rock" && computer_select == "paper") {
        domResult('computer win',player_select,computer_select)
    } else if (player_select == "rock" && computer_select == "scissor") {
        domResult('player win',player_select,computer_select)
    } else if (player_select == "paper" && computer_select == "rock") {
        domResult('player win',player_select,computer_select)
    } else if (player_select == "paper" && computer_select == "scissor") {
        domResult('computer win',player_select,computer_select)
    } else if (player_select == "scissor" && computer_select == "rock") {
        domResult('computer win',player_select,computer_select)
    } else if (player_select == "scissor" && computer_select == "paper") {
        domResult('player win',player_select,computer_select)
    } else {
        domResult('none',player_select,computer_select)
    }
}
// a round first player select using prompt then computer also select stores in a vairable
// then compare it and update score and round


// making 5 rounds
function loopround() {
  for (let i=1;i<=5;i++) {
      Round()
      // adding score
      if (round_result == "none") {
          player_score = player_score+0;
          computer_score = computer_score +0;
          console.log(round_result);
      }
      else if (round_result == "player_win") {
        console.log(round_result);
        
          player_score = player_score+1;
          computer_score = computer_score +0;
      }
      else if (round_result == "computer_win") {
          player_score = player_score+0;
          computer_score = computer_score +1;
          console.log(round_result);
      }

  }

  // making the final result
  console.log(`player score : ${player_score}`);
  console.log(`computer score : ${computer_score}`);

  if (player_score > computer_score) {
    alert("player win's the game");
  } else if (player_score < computer_score) {
    alert("computer wins the game");
  } else {
    // alert("the game ended in a draw")
  }
}

loopround()

