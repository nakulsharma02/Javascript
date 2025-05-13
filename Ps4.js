//Q1). What will the following print in javascript? console.log("har\"".length).
/*console.log("har\"".length);//output = 4
*/

//Q2). Explore the include , startsWith & endsWith function of a string.
/*let string = "  Hello Dosto";
console.log(string.endsWith("Dosto"));
console.log(string.startsWith("Hello"));
let str1 = "Hello"
console.log(string.includes(str1));*/

//Q3). WAP to convert a given string to lowercase.
/*let string = "Hello";
console.log(string.toLowerCase());*/

//Q4). Extract the amount out of this string "Please give Rs 1000"
/*let price = "Please give Rs 1000";
let amount = price.slice("Please give Rs ".length);
amount = Number.parseInt(amount);
console.log(amount,typeof amount);*/

//Q5).Try to change 4th ch of a given string .Were you ale to do it? ans.no
let string = "Hello";
string[2]="t";
console.log(string);