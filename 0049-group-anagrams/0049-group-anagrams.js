/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {


let arr=strs.map((v)=>(v.split("").sort().join("")))
let map={}
arr.forEach((v,i)=>{

    if(map[v])
    {
map[v].push(strs[i])
    }else
    {
        map[v]=[strs[i]]
    }

})

return(Object.values(map))

};