var globalScore, roundScore, activePlayer, gamePlaying

/* NEW GAME */

function newGame() {

    globalScore = [0, 0]
    activePlayer = 1
    roundScore = 0
    gamePlaying = true
    
    //Select name players
    let player1 = prompt("Nom du joueur 1");
    let player2 = prompt("Nom du joueur 2");

    document.getElementById("player-1").innerHTML = player1;
    document.getElementById("player-2").innerHTML = player2;

    // Reset stats
    document.getElementById("global-1").innerHTML = "0";
    document.getElementById("global-2").innerHTML = "0";
    document.getElementById("round-1").innerHTML = "0";
    document.getElementById("round-2").innerHTML = "0";
}


/* ROLL THE DICE */

let images = ["src/dice-01.svg",
"src/dice-02.svg",
"src/dice-03.svg",
"src/dice-04.svg",
"src/dice-05.svg",
"src/dice-06.svg"];

let dice = document.querySelectorAll("img")

function roll(){
    if (gamePlaying) {
        // 1. Shake Dice
        dice.forEach(function(die){
            die.classList.add("shake")
        });
        
        setTimeout(function(){
            dice.forEach(function(die){
                die.classList.remove("shake")
            })
        },
        1000  
        )

        // 2. Display the Result
        let dieValue = Math.floor(Math.random()*6);
        document.querySelector("#die").setAttribute("src", images[dieValue])

        //3. Update the round score IF the rolled number was NOT a 1
        if (dieValue !== 1) {
            //Add score
            roundScore += dieValue + 1;
            document.querySelector('#round-' + activePlayer).textContent = roundScore
        } else {
            //Next player
            nextPlayer();
        }
    }
    
}

/* HOLD BUTTON */

/* END GAME */