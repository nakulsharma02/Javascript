let array = [1,2,3,4,5,6,"Hello This is an array"];
console.log(array);
console.log(array.length);
// array[8]="Hii";
// console.log(array);

//Array Methods
console.log(array.toString());
console.log(array.join('------'));
let a = array.push("Nine");
console.log(array);
console.log(a);
let b = array.pop();
console.log(array);
console.log(b);
let c = array.shift();
console.log(array);
console.log(c);
let d = array.unshift("a");
console.log(array);
console.log(d)
delete array[6];
console.log(array);
