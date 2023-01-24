var playing=false;
var score;
var action;
var timeremaining;
var correctanswer
// if we click o strt reset button
document.getElementById("startreset").onclick=function(){
    if(playing==true){
        //if we are playin reload page
        location.reload();
    }else{
        //change the mode to playing 
        playing=true;
        // if we not playing  
        score=0;

//set score to 0 
        document.getElementById("scorevalue").innerHTML=score;
//show countdown
        show("timeremaining");
        timeremaining=60;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;

    //hide game over box

    hide("gameover");
// change butto to reset 
        document.getElementById("startreset").innerHTML="Reset Game";

// start countdown
        startcountdown();

        // generate the question and multiple answer

        generateQA()
        
    }
} 
// click on answer box  
for(i=1;i<5;i++){
    document.getElementById("box"+i).onclick=function(){
        if (playing==true){
            if(this.innerHTML==correctanswer){
                score++;
                document.getElementById("scorevalue").innerHTML=score;
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                },1000);
    
    
                generateQA();
            }else{
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("wrong");
                },1000); 
            }
        }
    }
}

// if we click on answer check answer is correct or not
//show correct box for  sec and generate new question
//so try again


                        // for functions   


//start counter
function startcountdown(){
    {
        action=setInterval(function()
        {
            timeremaining-=1;
            document.getElementById("timeremainingvalue").innerHTML=timeremaining;
            if(timeremaining==0){
                stopcoundown();

                show("gameover");
                document.getElementById("gameover").innerHTML="<p>Game Over:</p><p>Your Score Is " + score +" .";
                hide("timeremaining");
                hide("correct");
                hide("wrong");
                playing="false";
                document.getElementById("startreset").innerHTML="Start Game";
                
            }
        },1000);
    }
}
// stop counter
function stopcoundown(){
    clearInterval(action);
}
// hide an element
function hide(Id){
    document.getElementById(Id).style.display="none";
}

// show the elements 
function show(Id){
    document.getElementById(Id).style.display="block";
}
function generateQA(){
    var x=1+Math.round(Math.random()*9);
    var y=1+Math.round(Math.random()*9);
    correctanswer=x*y;
    document.getElementById("question").innerHTML=x +"X"+y;
    var correctposition=1+ Math.round(Math.random()*3);
    document.getElementById("box"+correctposition).innerHTML=correctanswer;//fill one bx with correct answer
    var answers=[correctanswer];
    for(i=1;i<5;i++){
        if(i!=correctposition){
            var wronganswer;

            do{
                wronganswer=(1+ Math.round(Math.random()*9))*(1+ Math.round(Math.random()*9));
            }
            while(answers.indexOf(wronganswer)>-1)
            document.getElementById("box"+i).innerHTML=wronganswer;
            answers.push(wronganswer);
        }
    }
}