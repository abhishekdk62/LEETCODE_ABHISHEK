/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
let ar=[]
for(let i=0;i<s.length;i++)
{
ar[indices[i]]=s[i]
}
    return ar.join('')
};