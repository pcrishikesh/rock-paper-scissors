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
    document.getElementById('roundid').textContent = round 
    if (round >= 5) {
        players.forEach(btn => {
        btn.removeEventListener('click', handler)
        })
        checkResult()
        setTimeout(()=> document.querySelector('body').style.display = 'none',3000)
        
        
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

function resultCalculator(result) {
    if (result == "computer") {
        computer_score = computer_score + 1
    }
    else if(result == "player") {
        player_score = player_score + 1
    }
    
}

function checkResult() {
    let final = document.getElementById('gamefinish')
    let gameresult = document.getElementById('game')
    if (round >= 5) {
        if (player_score > computer_score) {
            gameresult.style.display = 'block'
            final.textContent = 'Player Winning'
        }
        else if (player_score < computer_score) {
            gameresult.style.display = 'block'
            final.textContent = 'Computer Winning'
        }else {
            gameresult.style.display = 'block'
            final.textContent = 'Draw'
        }
    }
}

async function gameLogic(player_select,computer_select) {
  //rps logic
    if (
        (player_select == "rock" && computer_select == "rock") ||
        (player_select == "paper" && computer_select == "paper") ||
        (player_select == "scissor" && computer_select == "scissor")
    ) {
        domResult('same',player_select,computer_select)
        resultCalculator('same')
    } else if (player_select == "rock" && computer_select == "paper") {
        domResult('computer win',player_select,computer_select)
        resultCalculator('computer')
    } else if (player_select == "rock" && computer_select == "scissor") {
        domResult('player win',player_select,computer_select)
        resultCalculator('player')
    } else if (player_select == "paper" && computer_select == "rock") {
        domResult('player win',player_select,computer_select)
        resultCalculator('player')
    } else if (player_select == "paper" && computer_select == "scissor") {
        domResult('computer win',player_select,computer_select)
        resultCalculator('computer')
    } else if (player_select == "scissor" && computer_select == "rock") {
        domResult('computer win',player_select,computer_select)
        resultCalculator('computer')
    } else if (player_select == "scissor" && computer_select == "paper") {
        domResult('player win',player_select,computer_select)
        resultCalculator('player')
    } else {
        domResult('none',player_select,computer_select)
    }
}
// a round first player select using prompt then computer also select stores in a vairable
// then compare it and update score and round


// making 5 rounds
Round()
