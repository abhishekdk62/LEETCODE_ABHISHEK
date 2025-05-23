/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!=t.length)
    {
        return false
    }
let map={}
s.split("").forEach((v)=>{
map[v]=(map[v]||0)+1
})
for(let char of t)
{
    if(map[char])
    {
        map[char]=map[char]-1
    }
    else
    {
        return false
    }
}
return true
    
};