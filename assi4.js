let input=require('readline-sync')


let mark=parseFloat(input.question('enter your mark '))

if(mark>=0 && mark<=50){
    console.log('you are failed');
}else if(mark>=50 && mark<=100){
    console.log('you are passed');
}else{
    console.log("!!unveiled!!");
}