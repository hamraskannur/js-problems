
let input=require('readline-sync')


let a=parseInt(input.question("enter a number  "))

if(isNaN(a)){ 
    console.log("this not a number")

  }else{

for(var i=1;i<=10;i++){
    var sum=a*i;
    console.log(a + "*" + i + "=" + a * i)
}
  }