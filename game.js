
var buttonColours = ["red","blue","green","yellow"];
var randomChosenColour = buttonColours[nextSequence()];
console.log(randomChosenColour);
var gamePattern = [];
// console.log(gamePattern.push(randomChosenColour));
// alert("This is the game.js page!!!");
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    console.log(randomNumber);
    return randomNumber;
}

// nextSequence();