
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
// alert("This is the game.js page!!!");
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    // console.log(randomChosenColour);
    
    gamePattern.push(randomChosenColour)
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var sound = () =>{
        new Audio("sounds/" + randomChosenColour+ ".mp3");
    }
}

nextSequence();
