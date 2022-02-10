
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
// alert("This is the game.js page!!!");
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    // console.log(randomChosenColour);
    
    gamePattern.push(randomChosenColour);
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // audio.play();
    
    playSound(randomChosenColour);
    
}
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColour);
  
  });
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
