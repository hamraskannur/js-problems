let input = require( "readline-sync" );

let value = input.question( "enter a word: " );
let length = value.length;

for( let i = 0; i <= length/2; i++ ) {
    if( value[i] != value[length - ( i + 1 )] ) {
        console.log( "this not a palintrom" );
        break
    } else {
        if( i == parseInt( length / 2 ) ) {
            console.log( "enter word is a palintom" );
        }
    }
}