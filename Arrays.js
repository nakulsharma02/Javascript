let array = [1,2,3,4,5,6,"Hello This is an array"];
console.log(array);
console.log(array.length);
// array[8]="Hii";
// console.log(array);

//Array Methods
// console.log(array.toString());
// console.log(array.join('------'));
// let a = array.push("Nine");
// console.log(array);
// console.log(a);
// let b = array.pop();
// console.log(array);
// console.log(b);
// let c = array.shift();
// console.log(array);
// console.log(c);
// let d = array.unshift("a");
// console.log(array);
// console.log(d)
// delete array[6];
// let compare = (a,b)=>{
//     return a-b;
// }
// console.log(array);
// let arr1 = [4,26,30,9,7];
// console.log(array.concat(arr1));
// console.log(arr1.sort(compare));// Sorted array alphabetically taking all numbers as string.
// console.log(array.reverse());

// Splice and Slice
//Splice Method
let num  = [12,34,67,89];
console.log(num);
// let deletedval = num.splice(1,2,56,78,99); (index,deleting values,adding values)// the splice method returnd deleted values
// console.log(num);
// console.log(deletedval);

//Slice Method
let num1 = num.slice(1,3);
console.log(num1);
