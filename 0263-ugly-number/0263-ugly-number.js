/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {

    
    if(n==0) return false


let primes=[2,3,5]


primes.forEach((v)=>{
    while(n%v==0)
    {
        n=n/v
    }
})

return n==1?true:false

    
};