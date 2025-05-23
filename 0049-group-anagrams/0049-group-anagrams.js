/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let strings=strs.map((v)=>v.split("").sort().join(""))
let map={}

strings.forEach((v,i)=>{
    if(map[v])
    {
map[v].push(strs[i])
    }else
    {
         map[v]=[strs[i]]
    }
})
    
    console.log(map)
    return Object.values(map)
    
};