/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    if(x<2) return x
    let i=1
    while(i*i<=x)
    {
        i++
    }
    return i-1
};