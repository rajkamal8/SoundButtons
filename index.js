let gamePattern = [];
const colorPalatte = ["red","blue","green","yellow"];
const userClickedPattern = [];

function nextSequence(){
    let random = Math.floor(Math.random()*4);
    let randomChosenColor = colorPalatte[random];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}
nextSequence();

$(".btn").click(function (event){
    // userChosenColor = $(this).attr("id");
    userChosenColor = event["currentTarget"].id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

});

function playSound(name){
    let audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 70);
}

$(document).keypress(function(event){
    if((event.key>='a'&&event.key<='z')||(event.key>='A'&&event.key<='Z'))
    {
        $("#level-title").html("Press A Key to Start");
        nextSequence();
        gamePattern = [];
        userClickedPattern = [];
    }
})