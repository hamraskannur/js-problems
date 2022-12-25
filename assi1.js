var read = require( "readline-sync" )

var value = read.question( "enter your name: " );

if(isNaN(value)){
console.log( `you entered = ${ value }` ); 

}else{
    console.log("this nat a name");
}