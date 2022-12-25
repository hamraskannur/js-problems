let input=require('readline-sync')


let limit=parseInt(input.question("enter a array limit "))
let inputArray1 = [];

console.log("enter a array-1 number")
for(let i=0;i<limit;i++){
     inputArray1[i]= parseInt(input.question(""))
}

inputArray1.sort();
inputArray1.reverse();


    console.log(inputArray1)
