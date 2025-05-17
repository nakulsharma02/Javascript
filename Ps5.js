//Q1). Create an Array of numbers and take input from the user to add numbers to this array.
/*let array = []
let num;
let length = prompt("Enter the length of the array");
length = Number.parseInt(length);
for (let i = 0; i < length; i++) {
    num = prompt("Enter the array no :");
    num = Number .parseInt(num);
    array.push(num);
}
console.log("Your array is : ",array);*/

//Q2). Keep Adding numbers to the array in 1 until 0 is added to the array
/*let array = [];
let num = 32;
while(num!=0){
    num = prompt("Enter the array element");
    num = Number.parseInt(num);
    array.push(num);
}
console.log("Your array is : ", array);*/

//Q3). Filter for numbers divisible by 10 from the given array.
/*let array = [10,39,40,89,50,100,5,7];
let newarr = array.filter((element)=>{
        return element%10==0;
})
console.log(newarr);*/

//Q4). Create an array of square of given numbers.
/*let numbers = [2,3,4,6];
let arr = numbers.map((element)=>{
    return (element)**2;
});
console.log("Your Array is: ",arr);*/

//Use Reduce to calculate the factorial of the given number from an array of first n natural numbers (n being the number whose factorial will be calculated);
let arr = [1,2,3,4,5,6,7,8];
console.log(arr);
let fact = arr.reduce((num1,num2)=>{
    return num1*num2;
})
console.log(fact);
