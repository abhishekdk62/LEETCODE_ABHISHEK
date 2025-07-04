/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length) return false

let strs=s.split("").sort()
let ttrs=t.split("").sort()
let flag=true
strs.map((v,i)=>{
    if(ttrs[i]!=v) flag=false 
})
if(!flag) return false
return true
};