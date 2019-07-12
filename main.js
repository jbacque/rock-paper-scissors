// ROCK PAPER SCISSORS

/* Ideas for procedural programming
 * -Have students build base program, or do together as a class
 * -Remove all global variables (except count (maybe?))and students need to use parameters
 * and return values and the site should still work
 * -Add functionality... maybe something happens when a score reaches 10
 * or add a 2-player mode
 */

// Global Vars
let count = 3;
let pScore = 0;
let cScore = 0;
let pPick = '';
let cPick = '';

// Event Listeners
document.getElementById('rock').addEventListener('click', pickRock);
document.getElementById('paper').addEventListener('click', pickPaper);
document.getElementById('scissors').addEventListener('click', pickScissors);

// Event Functions

// When the appropriate picture is selected, pPick and cPick
// are set, then a countdown timer begins.
function pickRock(){
    pPick = 'rock';
    computerChooses();
    countdown();
}

function pickPaper(){
    pPick = 'paper';
    computerChooses();
    countdown();
}

function pickScissors(){
    pPick = 'scissors';
    computerChooses();
    countdown();
}

// Other functions

// Demonstrates timing/recursion using the setTimeout function
function countdown() {
    document.getElementById('countdown-area').style.visibility = "visible";
    if (count > 0) {
        document.getElementById('countdown-area').innerHTML = count
        count--;
        setTimeout(countdown, 700);
    }
    else {
        count = 3;
        document.getElementById('countdown-area').style.visibility = "hidden";
        showPicks();
        checkWinner();
    }
}

// Simulate a computer choosing rock, paper, or scissors
function computerChooses(){
    randNum = Math.random();
    if (randNum < 0.33){
        cPick = 'rock';
    } else if (randNum < 0.66){
        cPick = 'paper';
    } else {
        cPick = 'scissors';
    }
    console.log("computer picked: " + cPick);
}

// Compare player pick and computer pick to see who wins and increase their score by 1
function checkWinner(){
    if (pPick == 'paper' && cPick == 'rock' || pPick == 'scissors' && cPick == 'paper' || pPick == 'rock' && cPick == 'scissors'){
        console.log('player wins');
        pScore++;
        updateScoreArea();
    } else if (pPick == cPick) {
        console.log('tie');
    } else {
        console.log('computer wins');
        cScore++;
        updateScoreArea();
    }
}

// Show the updated player/computer score in the table
function updateScoreArea(){
    document.getElementById('p-score').innerHTML = pScore;
    document.getElementById('c-score').innerHTML = cScore;
}

// Update the display area to show what the player/computer chose
function showPicks(){
    if(pPick == 'rock'){
        document.getElementById('p-move').src = 'images/rock.png'
    } else if (pPick == 'paper') {
        document.getElementById('p-move').src = 'images/paper.png'
    } else {
        document.getElementById('p-move').src = 'images/scissors.png'
    }

    if(cPick == 'rock'){
        document.getElementById('c-move').src = 'images/rock.png'
    } else if (cPick == 'paper') {
        document.getElementById('c-move').src = 'images/paper.png'
    } else {
        document.getElementById('c-move').src = 'images/scissors.png'
    }
}

