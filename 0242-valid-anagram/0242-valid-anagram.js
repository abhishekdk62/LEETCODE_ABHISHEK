/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  

let map={}
    s.split("").map((v)=>{

if(map[v])
{
    map[v]=map[v]+1
}else
{
    map[v]=1
}
    })
    
let map2={}
t.split("").map((v)=>{
    if(map2[v])
{
    map2[v]=map2[v]+1
}else
{
    map2[v]=1
}
})
console.log(map)
console.log(map2)
let flag=false
for(let i in map)
{
    if(map[i]==map2[i])
    {
        flag=true
    }
    else
    {
        return false
    }
}



return flag
};