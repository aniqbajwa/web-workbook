var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice <0.34){
    computerChoice = "rock";
}else if(computerChoice <=0.67){
    computerChoice = "paper";
}
else{
    computerChoice = "scissors";
}
var compare = function(choice1,choice2){
    if(choice1===choice2){
        return "Stalemate, boo :( The result is a tie.";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "I bet you're crushed! Rock wins.";
        }
        else{
            return "That's a wrap! Paper wins.";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "That's a wrap! Paper wins.";
        }
        else{
            return "That cut deep :( scissors wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "I bet you're crushed! Rock wins.";
        }
        else{
            return "That cut deep :( scissors wins";
        }
    }
};
compare(userChoice,computerChoice);
