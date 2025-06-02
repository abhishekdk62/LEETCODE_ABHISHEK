/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
           return "Hello World"
    }//m
};     

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */