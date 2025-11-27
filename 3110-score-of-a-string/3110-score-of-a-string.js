/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
let sum=0
    for(let i=0;i<s.length-1;i++)
    {
        let charcode=s[i].charCodeAt(0)
        let charcode2=s[i+1].charCodeAt(0)
        sum=sum+Math.abs(charcode-charcode2)
    }
    return sum
};