let input=require('readline-sync')


let limit=parseInt(input.question("enter a array limit "))
let inputArray1 = [];

if(isNaN(limit)){ 
    console.log("this not a number")

  }else{

console.log("enter a array-1 number")
for(let i=0;i<limit;i++){
     inputArray1[i]= parseInt(input.question(""))
}

let sum=0
for(let i=1;i<limit;i++){
    if(inputArray1[i]%2==0){
        sum++
    }
}console.log(" Number of even numbers in the given array is "+sum)
  }