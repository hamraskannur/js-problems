let input=require('readline-sync')




let a= parseInt(input.question('enter a 1st numbers '))

let b=parseFloat(input.question('enter a 2nd numbers '))

let sum=0;
let num=parseFloat(input.question(' 1-addition\n 2-subtraction\n 3-multiplication\n 4-division\n enter your choice'))


let choice;
switch (num) {
    case 1:
        addition()
        console.log(" "+sum)
      break;
    case 2:
        subtraction()
        console.log(" "+sum)
      break;
    case 3:
        multiplication()
        console.log(" "+sum)
      break;
    case 4:
        division()
        console.log(" "+sum)
      break;
    default:
      console.log("!!fool!!")
  }
 



  function addition(){
    sum=a+b;
  }


  function subtraction(){
    sum=a-b;
  }
  function multiplication(){
    sum=a*b;
  }
  function division(){
    sum=a/b
  }

