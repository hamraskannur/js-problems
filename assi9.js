let input=require('readline-sync')


let n=parseFloat(input.question("enter a number  "))

if(isNaN(n)){ 
  console.log("this not a number")

}else{
let string = "";

for(let i = 1; i <= n; i++) { 
  for(let j = 1; j <=i; j++) { 
    string += " "+j;
  }
  string += "\n";
}

console.log(string);
}