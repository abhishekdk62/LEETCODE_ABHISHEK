/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length<=0) return true
   
let str=s.split("").filter((v) =>/[A-Za-z0-9]/.test(v)) 


    return str.join().toLowerCase()==str.reverse().join().toLowerCase()
 
};