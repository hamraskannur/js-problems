let input=require('readline-sync')


let n=parseInt(input.question("Enter a limite "))

if(isNaN(n)){ 
  console.log("limit not a mark")

}else{

let string = "";
let num=1;

for(let i = 1; i <= n; i++) { 
  for(let j = 1; j <= i; j++) { 
    string += " "+num;
    num++;
  }
  string += "\n";
}

console.log(string);}