  
  let input=require('readline-sync')


  let a= parseInt(input.question('enter a 1st numbers '))

  let b=parseFloat(input.question('enter a 2nd numbers '))
  if(isNaN(a,b)){ 
    console.log("this not a number")
  }else{
   let sum=  a  +  b  ;

   console.log("result " + sum )
  }