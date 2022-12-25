let input=require('readline-sync')


let limit=parseInt(input.question("enter a array limit "))
let inputArray1 = [];
getArray()
displayArray()


function getArray(){
    console.log("enter a array-1 number")
    for(let i=0;i<limit;i++){
         inputArray1[i]= parseInt(input.question(""))
    }
}

function displayArray(){
       
        console.log(inputArray1)
}