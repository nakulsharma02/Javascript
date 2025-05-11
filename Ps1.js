//Q1). Create a variable of type string and try to add a number to it.
let a = "Hello "
let b = 23;
console.log(a+b);

//Q2). Use type of operator to find the datatype of string in last question
console.log(typeof (a+b));

//Q3).Create a const object in js .can you can change it to hold the number later
const obj = {
    a : 1,
    b : "Hello"
}
console.log(obj);
// obj = 34;
// console.log(obj);

//Q4).Try to add a new key to the const object in problem 3 were youable to do it?
obj['c'] = 67;
console.log(obj);

//Q5). Write a js program to create a word-meaning dictionary of 5 words.
const dict = {
    Ephemeral : "Lasting for a very short time; transient.",
    Mellifluous : "(of a voice or words) sweet or musical; pleasant to hear.",
    Ubiquitous : "Present, appearing, or found everywhere.",
    Lackadaisical : " Carelessly lazy; showing a lack of interest or enthusiasm.",
    Pernicious : "Having a harmful effect, especially in a gradual or subtle way."
}
console.log(dict);
