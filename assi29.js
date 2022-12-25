let input=require('readline-sync')


let limit=parseInt(input.question("enter a array limit "))
let inputArray1 = [];

console.log("enter a array-1 number")
for(let i=0;i<limit;i++){
     inputArray1[i]= parseInt(input.question(""))
}

const output=inputArray1.reduce(function(sum,num){
   sum=sum+num;
   return sum;
},0)
console.log(output)     
