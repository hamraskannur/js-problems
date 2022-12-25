let input=require('readline-sync')


let limit=parseInt(input.question("enter a array limit "))
let inputArray1 = [];

console.log("enter a array-1 number")
for(let i=0;i<limit;i++){
     inputArray1[i]= parseInt(input.question(""))
}

let inputArray2 = [];

console.log("enter a array-2 number")
for(let i=0;i<limit;i++){
     inputArray2[i]= parseInt(input.question(""))
}

console.log("array-1")
for(let i=0;i<limit;i++){
    console.log(""+inputArray2[i])
}

console.log("array-2")
for(let i=0;i<limit;i++){
    console.log(""+inputArray1[i])
}