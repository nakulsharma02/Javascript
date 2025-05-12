// Conditional statements : if, if-else, if-else if-else,switch,Use of ternary operator 
let age = prompt("Enter Your age.");
age = Number.parseInt(age);
console.log(age);
console.log(typeof age);
//if- else 
if(age<0){
    alert("You entered a invalid age");
}
else if(age>0 && age<10){
    alert("You are a child. You are not able to drive");
}
else if(age>10 && age<15){
    alert("You are a Teenager. You think about that but not able to drive");
}
else if(age>15 && age<18){
    alert("You are close. But wait until 18");
}
else if(age>=18){
    alert("You can Drive.");
}
else{
    alert("Give the correct age");
}
// switch
switch(true){
    case (age<0):
        console.log("You entered a invalid age");
        break;
    case (age>0 && age<10):
        console.log("You are a child. You are not able to drive");
        break;
    case (age>10 && age<15):
        console.log("You are a Teenager. You think about that but not able to drive");
        break;
    case (age>15 && age<18):
        console.log("You are close. But wait until 18");
        break;
    case (age>=18):
        console.log("You can Drive.");
        break;
    default:
        console.log("Give the Correct age");    
}


