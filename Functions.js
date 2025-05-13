function hello(name){
    console.log("Hello"+ " "+name);
}
function greet(){
    console.log("How are you?");
}
function ans(){
    return "I am fine";
}
hello("Shyam");
greet();
let i= ans();
console.log(i);
//FUNCTION USING ARROW OPERATOR
//Avg of 4 no's
let avg = (a,b,c,d)=>{
console.log((a+b+c+d)/4);
}
avg(12,14,15,16);
