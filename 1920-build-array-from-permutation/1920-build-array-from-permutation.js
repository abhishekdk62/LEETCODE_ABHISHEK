/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let arr2=[]
    for(let i=0;i<nums.length;i++)
    {
        arr2[i]=nums[nums[i]]
    }
    return arr2
};