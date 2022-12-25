let input=require('readline-sync')

let a=parseFloat(input.question("enter a limit "))
var sum=0

if(isNaN(a)){ 
    console.log("this not a number")

  }else{
for(var i = 0 ; i <= a ; i++){
    if(i%2!=0){
        sum = sum + i;
    }
      }

console.log("result ="+sum)
    }