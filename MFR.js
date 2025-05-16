//Map, Filter , Reduce (Modern js Methods);
let arr = [44,67,42];
let arr1 = arr.map((element,index,array) => {
    return element+index;
})
console.log(arr1);
let arr2 = arr.filter((a,i,arr)=>{
    return a<50;
})
console.log(arr2);
let arr3 = arr.reduce((element1,element2)=>{
    return element1*element2;
})
console.log(arr3);
