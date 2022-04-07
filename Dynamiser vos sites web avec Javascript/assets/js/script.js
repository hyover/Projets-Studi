/* NEW GAME */

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
        console.log(dieOneValue);
        document.querySelector("#die").setAttribute("src", images[dieOneValue]);
        document.querySelector("#round-player1").innerHTML = (dieOneValue + 1);
    },
    1000
    );
}

/* HOLD */
/* END GAME */