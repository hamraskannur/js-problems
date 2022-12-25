let input=require('readline-sync')


  let num= parseInt(input.question('enter a numbers '))

  if(isNaN(num)){ 
    console.log("this not a number")
  
  }else{
flag=0;
  for(var i=2;i<num;i++){
    if(num%i==0){
        flag=1;
    }
  }

if(flag==0){
    console.log("number is prime");
}else{
    console.log("number is not prime");
}
  }