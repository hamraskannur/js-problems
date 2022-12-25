class Main {
    constructor () {
        this.main();
    }

    main() {
        let input = require( "readline-sync" );

        let arr1 = [];

        let limit = parseInt( input.question( "enter array lenth = " ));

        arr1 = this.getArray( limit, input );
 
        this.displayArray( arr1 );
    }

    getArray( limit, input ) {
        let arr = [];
        let temp = [];

        // get array value
        for( let i = 0; i < limit; i++ ) {
            for( let j = 0; j < limit; j++ ) {
                temp.push(
                    parseInt(
                        input.question( `enter arr[${i}][${j}]th position value:` )
                    )
                )
            };

          
            arr.push( temp );
            temp = [];
        }

       
        return arr;
    }

    displayArray( arr1 ) {
       
        console.log( arr1 );
    }
}

let obj1 = new Main(); 