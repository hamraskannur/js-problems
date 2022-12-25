let input=require('readline-sync')

let p=parseInt(input.question('enter a Principal amount  '))
let r=parseFloat(input.question('enter a Interest rate  '))
let n=parseFloat(input.question('enter a Number of years  '))

if(isNaN(p,r,n)){ 

    console.log("this not a number")

  }else{
    
let sum=((p*r*n )/100)
let si=parseInt(sum)

console.log("result = "+si)}