let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("msg");

const userScoreSpan = document.querySelector("#user-score");
const compScoreSpan = document.querySelector("#comp-score");

const genCompChoice =()=>{
//rock,paper,scissor
const options = ["rock","paper","scissor"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
};

const drawGame = () =>{
    msg.innerText="Game was draw.Play again.";
    msg.style.backgroundColor ="#f19a3e";
};

const showWinner =(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreSpan.innerText = userScore;
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="#61e294";
    }
    else{
        compScore++;
        compScoreSpan.innerText = compScore;
         msg.innerText=`You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="#fe5154";

    }
};

const playGame = (userChoice)=>{
            // generate computer choice
             const compChoice =genCompChoice();
           if(userChoice === compChoice){
            drawGame(); //draw game
            }
             else{
                let userWin=true;
                   if(userChoice==="rock"){
                      userWin=compChoice==="paper"?false:true ;
                    }else if(userChoice==="paper"){
                        userWin=compChoice==="scissor"?false:true ;
                      } else{
                       userWin= compChoice==="rock" ? false:true ;
                      }
                      showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
 