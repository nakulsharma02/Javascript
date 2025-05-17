let computer = Math.floor(Math.random()*10);
let user = prompt("Guess the Correct number");
user = Number.parseInt(user);
let score = 10;
if(user == computer){
    console.log("You got it right. Your score:" + score);
}else{
  while(user!=computer){
    if(user<computer){
        user = prompt("You Guessed the lesser no . Try again.");
        score = score-1;
    }
    if(user>computer){
        user = prompt("You Guessed the greater no . Try again.");
        score = score-1;
    }}
  console.log("You got it right. Your score:" + score);
}
