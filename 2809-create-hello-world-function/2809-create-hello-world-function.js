/**
 */
var createHelloWorld = function() {
    
    return function() {
        {return "Hello World"}

    }
};
var res=createHelloWorld()
var ans=res()
console.log(ans)
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */