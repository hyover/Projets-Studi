/* NEW GAME */

function newGame() {
    
    //Select name players
    let player1 = prompt("Change Player1 name");
    let player2 = prompt("Change player2 name");

    document.getElementById("player1").innerHTML = player1;
    document.getElementById("player2").innerHTML = player2;

    // Reset stats
    document.getElementById("global-player1").innerHTML = "0";
    document.getElementById("global-player2").innerHTML = "0";
    document.getElementById("round-player1").innerHTML = "0";
    document.getElementById("round-player2").innerHTML = "0";
}


/* ROLL THE DICE */

let images = ["src/dice-01.svg",
"src/dice-02.svg",
"src/dice-03.svg",
"src/dice-04.svg",
"src/dice-05.svg",
"src/dice-06.svg"];

let dice = document.querySelectorAll("img");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random()*6);
        document.querySelector("#die").setAttribute("src", images[dieOneValue]);
        document.querySelector("#round-player1").innerHTML = (dieOneValue + 1);
    },
    1000
    );
}

/* HOLD */
/* END GAME */