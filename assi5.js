let input=require('readline-sync')

let mark=parseFloat(input.question('enter your mark '))



if(mark>=90 && mark<=100){
    console.log("your grade  A")
}else if(mark>=80 && mark<=89){
    console.log("your grade B ")
}else if(mark>=70 && mark<=79){
    console.log("your grade C ")
}else if(mark>=60 && mark<=69){
    console.log("your grade D ")
}else if(mark>=50 && mark<=59){
    console.log("your grade E ")
}else if(mark>=0 && mark<=50){
    console.log("you are failed")
}else{
    console.log("!!unveiled!!")
}