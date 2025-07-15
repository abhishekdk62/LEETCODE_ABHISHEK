/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

let sum=nums.reduce((cur,acc)=>{
acc+=cur
return acc
},0)
console.log(sum)
let ops=[]
nums.forEach((v)=>{
    let t=v.toString().split("")
    ops.push(t)
})
let ans=[]
function get(op)
{
for(let v of op)
{
    if(Array.isArray(v))
    {
        get(v)

    }else
    {
ans.push(v)
    }
}
}
get(ops)
let sum2=0

ans.forEach((v)=>{
    sum2=sum2+Number(v)
})


console.log(ans)
console.log(sum2)
return sum-sum2

};

