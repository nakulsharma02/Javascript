//Array with Simple Loop
let array = [2,4,6,78,90];
for(let i=0; i < array.length; i++){
    console.log(i , array[i]);
}
//Array with Foreach Loop
array.forEach((element) => {
    console.log(element*element);
});
//Array with For of loop
for (const element of array) {
    console.log(element);
}
//Array with For in Loop
for (const key in array) {
    console.log(key, array[key]);
}
//Array.from
let string = "Array";
let arr = Array.from(string);
console.log(arr); 