height = 50;
let input = require( "readline-sync" );

try {
    let height = parseInt( input.question( "enter your height: " ));
    if( isNaN( height )) {
        throw 'notANumberError'
        
    } else if( height > height ) {
        throw 'hugeHeightError'
        
    } else if( height < height ) {
        throw 'tinyHeightError'
        
    } else {
        console.log( height );
    }
} catch( err ) {
    console.log( err )
}