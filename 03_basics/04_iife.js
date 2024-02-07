// Immediately Invoked Function Expressions (IIFE)

// to prevent global scope pollution we use iife

;(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')