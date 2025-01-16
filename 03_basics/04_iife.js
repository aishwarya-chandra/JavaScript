// Immediately Invoked Function Expressions (IIFE)
// (function defination)(Execution)
// done to prevent fuction from global scope pollution
// and to execute immediately

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


( (name) => {          //name is parameter
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('aish')             //aish is argument
