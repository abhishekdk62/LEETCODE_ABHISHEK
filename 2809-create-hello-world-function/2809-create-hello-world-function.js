/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
           return "Hello World"
    }//mem
};     

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */