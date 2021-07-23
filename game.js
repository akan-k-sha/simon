var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];

var c=0;
var level=0;

//handling start of the game

$(document).keypress(function(){
    c++;
    if(c==1){
    nextSequence();}
});

function nextSequence(){
    level++;
    userClickedPattern=[]
    $("h1").text("Level "+" "+level);
    randomNumber=Math.floor((Math.random())*4);
    randomChosenColor=buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    var buttonId="#"+randomChosenColor;
    $(buttonId).fadeOut(100).fadeIn(100);
    playSound("sounds/"+randomChosenColor+".mp3");
}


 $(".btn").click(function(){
        
        userChoiceButton=this.id;
        userClickedPattern.push(userChoiceButton);
        animatePress(userChoiceButton);
        playSound("sounds/"+userChoiceButton+".mp3");    
        checkAnswer((userClickedPattern.length)-1); 
 });




//playing sound
 function playSound(name){
     var audio= new Audio(name);
     audio.play();
 }

 
//animation of buttons
function animatePress(currentColor){
    $("."+userChoiceButton).addClass("pressed");
    setTimeout(function(){
        $("."+userChoiceButton).removeClass("pressed");
    },100);
}


function checkAnswer(currentLevel){
    if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if (userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        startover();
    }
}
function startover(){
    playSound("sounds/wrong.mp3");
    $("h1").text("GAME OVER!!!! PRESS ANY KEY TO RESTART");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
        },500);
    c=0;
    level=0;
    gamePattern=[];
        
}