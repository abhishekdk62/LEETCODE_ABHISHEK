/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length!=t.length) return false
    let map={}
    let map2={}
   
for(let i=0;i<s.length;i++)
{
    let char1=s[i]
    let char2=t[i]
if(map[char1]&&map[char1]!=char2) return false
if(map2[char2]&&map2[char2]!=char1) return false

map[char1]=char2
map2[char2]=char1

}
return true
    
};