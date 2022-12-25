let input=require('readline-sync')


let num=parseInt(input.question("Enter the annual income "))
let sum=0
if(isNaN(num)){ 
   console.log("this not a mark")
 
 }else{
if(num<250000){
   console.log("no tax")
}else if(num=>250000 && num<500000){
   sum=parseFloat((num*5)/100)
   console.log("Income tax amount "+sum)
}else if(num=>500000 && num<1000000){
    sum=parseFloat((num*20)/100)
    console.log("Income tax amount "+sum)
 }else if(num=>1000000 && num<5000000){
    sum=parseFloat((num*30)/100)
    console.log("Income tax amount "+sum)
 }
 }