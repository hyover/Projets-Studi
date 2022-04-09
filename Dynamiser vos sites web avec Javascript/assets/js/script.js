var globalScore, roundScore, activePlayer, gamePlaying

let images = ["images/dice-01.svg",
"images/dice-02.svg",
"images/dice-03.svg",
"images/dice-04.svg",
"images/dice-05.svg",
"images/dice-06.svg"]

let dice = document.querySelectorAll("img")

/* NEW GAME */

function newGame() {

    globalScore = [0, 0]
    activePlayer = 0
    roundScore = 0
    gamePlaying = true
    
    //Select name players
    let player1 = prompt("Nom du joueur 1")
    let player2 = prompt("Nom du joueur 2")

    document.getElementById("player-0").innerHTML = player1
    document.getElementById("player-1").innerHTML = player2

    // Reset stats
    document.getElementById("global-0").innerHTML = "0"
    document.getElementById("global-1").innerHTML = "0"
    document.getElementById("round-0").innerHTML = "0"
    document.getElementById("round-1").innerHTML = "0"
    
    dice.forEach((die) => {
        die.classList.remove("shake-winner")
    })

    // Add player active
    document.getElementById("active-0").classList.add("player-active")
    document.getElementById("active-1").classList.remove("player-active")
}


/* ROLL THE DICE */

function roll(){
    if (gamePlaying) {
        // 1. Shake Dice
        dice.forEach((die) => {
            die.classList.add("shake")
        })
        
        setTimeout(() => {
            dice.forEach((die) => {
                die.classList.remove("shake")
            })
        },
        1000  
        )

        // 2. Display the Result
        let dieValue = Math.floor(Math.random()*6)
        document.querySelector("#die").setAttribute("src", images[dieValue])

        //3. Update the round score IF the rolled number was NOT a 1
        if (dieValue !== 0) {// Your code goes here
            //Add score
            roundScore += dieValue + 1
            document.querySelector('#round-' + activePlayer).textContent = roundScore
        } else {
            //Next player
            nextPlayer()
        }
    }
    
}

/* HOLD BUTTON */

function hold() {
    if (gamePlaying) {
        // Add ROUND score in current box to GLOBAL score
        globalScore[activePlayer] += roundScore

        // Update the scores
        document.getElementById('global-' + activePlayer).textContent = globalScore[activePlayer]

        // Check if player won the game
        if (globalScore[activePlayer] >= 100) {
            document.querySelector('#player-' + activePlayer).textContent = 'GAGNANT!'
            dice.forEach((die) => {
                die.classList.add("shake-winner")
            })
            gamePlaying = false
        } else {
            //Next player
            nextPlayer()
        }
    }
}

/* NEXT PLAYER */

function nextPlayer() {
    //Next player
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1
    roundScore = 0

    document.getElementById('round-0').textContent = '0'
    document.getElementById('round-1').textContent = '0'

    // Change player active
    document.getElementById("active-0").classList.toggle("player-active")
    document.getElementById("active-1").classList.toggle("player-active")
}
