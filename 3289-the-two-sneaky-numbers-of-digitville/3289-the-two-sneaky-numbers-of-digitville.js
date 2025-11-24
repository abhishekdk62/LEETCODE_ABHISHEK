/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let set=new Set()
let mis=[]
    for(let i=0;i<nums.length;i++)
    {
        if(set.has(nums[i])) mis.push(nums[i])
        set.add(nums[i])

    }
    return mis
};