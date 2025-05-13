//Q1). WAP to print the marks of a student in an object using for loop.
/*let marks = {
    harry : 98,
    rohan : 70,
    aakash : 7
}
for(let i=0; i < Object.keys(marks).length;i++){
    console.log("The marks of"+" "+Object.keys(marks)[i]+" is"+":"+marks[Object.keys(marks)[i]]);
}*/

//Q2). WAP in Q1 using for in loop.
/*for (const key in marks) {
   console.log("The marks of"+" "+key+" "+ "is"+":"+ marks[key]);
}*/

//Q3). WAP to print "try again" if the num is correct.
/*let cn = 56;
let i;
while(i!=cn){
    i = prompt("Enter your no");
}
console.log("Done");*/

//Q4). Write a function to find the mean of five numbers.
let mean = (a,b,c,d,e)=>{
    console.log("The mean of entered 5 no's is : ",((a+b+c+d+e)/5));
}
mean(1,2,3,4,5);
mean(45,78,54,28,89);

