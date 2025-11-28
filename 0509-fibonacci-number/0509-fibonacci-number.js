/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

let prev=0
let next=1
    for(let i=0;i<n;i++)
    {
        let sum=prev+next
        prev=next
        next=sum
    }
    return prev
};