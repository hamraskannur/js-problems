let input=require('readline-sync')


let limit=parseInt(input.question("enter a array limit "))

let inputArray1 = [];
console.log("enter a array-1 number")
for(let i=0;i<limit;i++){
     inputArray1[i]= parseInt(input.question(""))
}

let sum=[]
console.log("array-1")
for(var i=0;i<limit-1;i++){
    for(var j=i+1;j<=i+1;j++)
    sum[i]=inputArray1[i]*inputArray1[j]
}

console.log(sum)