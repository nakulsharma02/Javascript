//Q1). Use logical operators to find whether the age of the person lies b/w 10 and 20
let age = prompt("Enter The Age");
age = Number.parseInt(age);
if(age>10 && age<20){
    console.log("The Age lies b/w 10 and 20");
}
else{
    console.log("The Age is not lies b/w 10 and 20");
}

//Q2). Demonstrate the use of switch-case statement in javascript
switch(true){
    case (age>10 && age<20):
        alert("The Age is  lies b/w 10 and 20.");
        break;
    default:
        alert("The Age is not lies b/w 10 and 20.");
}

//Q3). WAP to find whether a number is divisible by 2 and 3
if((age%2)==0 && (age%3)==0){
    console.log("The no is divisible by both 2 and 3.");
}
else{
    console.log("The no is not divisible by 2 and 3.");
}

//Q4). WAP program to find whether a number is either by 2 or 3.
if((age%2)==0 || (age%3)==0){
    console.log("The no is divisible by 2 or 3.");
}
else{
    console.log("The no is not divisible by 2 or 3.");
}

//Q5). Print "You can Drive." or "You can't Drive." based on age being greater than 18 using ternary Operator.
(age>18)?(console.log("You can Drive.")):(console.log("You can't Drive"));