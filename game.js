
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
// alert("This is the game.js page!!!");
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
    // console.log(randomChosenColour);
    
    gamePattern.push(randomChosenColour)
    $("#"+ randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // audio.play();
    
    playSound(randomChosenColour);
    
}
$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);    
    animatePress(userChosenColour);
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColour){
    $('#' + currentColour).addClass("pressed");
    setTimeout(()=> {
        $('#' + currentColour).removeClass("pressed");
    },100);

        
}
