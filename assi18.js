let input=require('readline-sync')

let w=parseInt(input.question('enter a Written test mark =  '))
let l=parseInt(input.question('enter a Lab exams mark =  '))
let a=parseInt(input.question('enter a Assignments mark =  '))

if(isNaN(w,l.a)){ 
    console.log("this not a mark")
  
  }else{
let grad=parseFloat((w*70)/100 + (l*20)/100 + (a*10)/100)


console.log("Grade of the student is "+grad)
  }